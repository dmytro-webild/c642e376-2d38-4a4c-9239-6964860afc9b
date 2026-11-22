import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue, type Variants } from "motion/react";
import { useImageReady } from "@/components/kit/kitMotion";
import { CircleCheck } from "lucide-react";
import Icon, { type IconName } from "@/components/kit/Icon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import MakroTitle from "@/components/kit/MakroTitle";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Tile = {
  tag?: string;
  icon?: IconName;
  title: string;
  description: string;
  note?: string;
  imageSrc: string;
  imageAlt?: string;
};

type FeaturesStackingTilesMakroProps = {
  ariaLabel?: string;
  tag?: string;
  title?: string;
  description?: string;
  items: Tile[];
  className?: string;
};

const reveal = { type: "spring", bounce: 0.2, duration: 1 } as const;
const uiSpring = { type: "spring", bounce: 0.2, duration: 1.5 } as const;

const SHRINK = 0.05;
const TILT = 8;
const PEEK = 14;

const starts = [
  { rotate: 10, x: 96 },
  { rotate: -12, y: -64 },
  { rotate: 14, x: 80, y: 96 },
  { rotate: -10, x: 40, y: -72 },
];

const rise = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  shown: { opacity: 1, y: 0, transition: reveal },
});

const front = (tile: number): Variants => ({
  hidden: { opacity: 0, x: 0, y: 0, ...starts[tile % starts.length] },
  shown: { opacity: 1, rotate: tile % 2 === 0 ? -2.5 : 2.5, x: 0, y: 0, transition: { ...uiSpring, delay: 0.2 } },
});

const SEED_W = 16;
const SEED_H = 12;
const WASH_W = 144;
const WASH_H = 108;

const WashCanvas = ({ src }: { src: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      const seed = document.createElement("canvas");
      seed.width = SEED_W;
      seed.height = SEED_H;
      const seedContext = seed.getContext("2d");
      if (!seedContext) return;
      const zoom = 1.4 * Math.max(SEED_W / image.naturalWidth, SEED_H / image.naturalHeight);
      const width = image.naturalWidth * zoom;
      const height = image.naturalHeight * zoom;
      seedContext.filter = "saturate(0.6)";
      seedContext.imageSmoothingQuality = "high";
      seedContext.drawImage(image, (SEED_W - width) / 2, (SEED_H - height) / 2, width, height);
      let source: HTMLCanvasElement = seed;
      for (const factor of [3, 3]) {
        const step = document.createElement("canvas");
        step.width = source.width * factor;
        step.height = source.height * factor;
        const stepContext = step.getContext("2d");
        if (!stepContext) return;
        stepContext.imageSmoothingQuality = "high";
        stepContext.drawImage(source, 0, 0, step.width, step.height);
        source = step;
      }
      context.clearRect(0, 0, WASH_W, WASH_H);
      context.imageSmoothingQuality = "high";
      context.drawImage(source, 0, 0, WASH_W, WASH_H);
    };
    image.src = src;
    return () => {
      image.onload = null;
    };
  }, [src]);

  return <canvas ref={ref} width={WASH_W} height={WASH_H} aria-hidden="true" data-wash="" className="absolute inset-0 -z-2 size-full" />;
};

type StackTileProps ={ item: Tile; index: number; total: number; progress: MotionValue<number> };

const StackTile = ({ item, index, total, progress }: StackTileProps) => {
  const reduceMotion = useReducedMotion();
  const flip = index % 2 === 1;
  const lastIndex = total - 1;
  const segment = 1 / Math.max(lastIndex, 1);
  const start = Math.min(index * segment, 0.999);
  const behind = lastIndex - index;
  const scale = useTransform(progress, [start, 1], [1, 1 - behind * SHRINK]);
  const rotateX = useTransform(progress, [start, Math.min(start + segment, 1)], [0, behind ? TILT : 0]);
  const dim = useTransform(progress, [start, 1], [0, Math.min(behind * 0.16, 0.5)]);
  const still = reduceMotion || !behind;
  const tileRef = useRef<HTMLElement>(null);
  const tileInView = useInView(tileRef, { once: true, margin: "0px 0px -25% 0px" });
  const tileReady = useImageReady(tileRef, tileInView);

  return (
    <div className="sticky [perspective:1600px]" style={{ top: `calc(clamp(4.5rem, 10svh, 7rem) + ${index * PEEK}px)` }}>
      <motion.article
        ref={tileRef}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion || (tileInView && tileReady) ? "shown" : "hidden"}
        style={still ? undefined : { scale, rotateX }}
        data-wash-frame=""
        className="relative isolate flex origin-top flex-col overflow-hidden rounded-[var(--radius-card)] bg-deep/30 will-change-transform lg:block lg:h-[min(76svh,44rem)]"
      >
        <WashCanvas src={item.imageSrc} />
        <div aria-hidden="true" className="absolute inset-0 -z-1 bg-linear-to-b from-card/40 via-card/15 to-deep/5" />
        <div
          className={cn(
            "relative flex aspect-[1/1] w-full items-center justify-center px-[clamp(40px,10vw,96px)] py-[48px] sm:aspect-[4/3] lg:absolute lg:inset-y-0 lg:aspect-auto lg:w-1/2 lg:px-[clamp(48px,6vw,96px)]",
            flip ? "lg:left-0" : "lg:right-0",
          )}
        >
          <motion.div
            variants={front(index)}
            style={{ transformPerspective: 1200 }}
            className="w-[min(100%,26rem)] rounded-[var(--radius-image)] bg-card p-[8px] shadow-[0_1.5rem_3rem_-1.5rem_color-mix(in_srgb,var(--deep)_45%,transparent)]"
          >
            <Media
              src={item.imageSrc}
              alt={item.imageAlt ?? ""}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-[calc(var(--radius-image)-6px)] object-cover lg:aspect-[4/5]"
            />
          </motion.div>
        </div>
        <div
          className={cn(
            "relative m-[8px] mt-0 flex flex-col rounded-[calc(var(--radius-card)-8px)] bg-card p-[24px] text-card-foreground lg:absolute lg:inset-y-0 lg:m-0 lg:my-[8px] lg:w-[calc(50%-8px)] lg:p-[clamp(32px,4vw,48px)]",
            flip ? "lg:right-[8px]" : "lg:left-[8px]",
          )}
        >
          {item.tag && (
            <motion.div
              variants={rise(24)}
              className="mb-[clamp(20px,3.5vw,40px)] flex w-fit max-w-full items-center gap-[8px] rounded-full bg-background py-[4px] pl-[4px] pr-[14px] text-foreground"
            >
              <div className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-card">
                <Icon name={item.icon ?? "sparkles"} aria-hidden="true" className="size-[15px]" strokeWidth={1.5} />
              </div>
              <p className="truncate text-[length:var(--text-label)] leading-[1.5]">{item.tag}</p>
            </motion.div>
          )}
          <motion.h3
            variants={rise(48)}
            className="max-w-[16ch] text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.03em] text-balance [overflow-wrap:anywhere]"
          >
            {item.title}
          </motion.h3>
          <motion.p variants={rise(72)} className="mt-[20px] max-w-[30rem] text-[length:var(--text-body)] leading-[1.55] text-muted-foreground">
            {item.description}
          </motion.p>
          {item.note && (
            <motion.div variants={rise(72)} className="mt-[32px] flex items-start gap-[10px] lg:mt-auto">
              <CircleCheck aria-hidden="true" strokeWidth={1.25} className="mt-[1px] size-[20px] shrink-0 text-muted-foreground" />
              <p className="text-[length:var(--text-body)] leading-[1.45]">{item.note}</p>
            </motion.div>
          )}
        </div>
        {!still && <motion.div aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 z-10 bg-black" />}
      </motion.article>
    </div>
  );
};

const FeaturesStackingTilesMakro = ({ ariaLabel, tag, title, description, items, className }: FeaturesStackingTilesMakroProps) => {
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.0005 });

  if (items.length === 0) return null;

  return (
    <section
      data-scene
      aria-label={ariaLabel ?? title ?? items.map((item) => item.title).join(", ")}
      className={cn("relative overflow-x-clip py-[var(--section-space)] text-foreground", className)}
    >
      {title && (
        <div className="mx-auto mb-[clamp(2.5rem,5vw,4rem)] flex w-[var(--container)] flex-col items-center text-center">
          {tag && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={reveal}
              className="mb-[20px] whitespace-nowrap rounded-full bg-secondary px-[14px] py-[6px] text-[length:var(--text-label)] leading-[1.5] text-secondary-foreground"
            >
              {tag}
            </motion.p>
          )}
          <MakroTitle text={title} className="max-w-[18ch] text-[length:var(--text-h1)] leading-[1.2]" />
          {description && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 72 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={reveal}
              className="mt-[16px] max-w-[36rem] text-[length:var(--text-body-lg)] leading-[1.5] text-balance text-muted-foreground"
            >
              {description}
            </motion.p>
          )}
        </div>
      )}
      <div ref={listRef} className="mx-auto flex w-[var(--container)] flex-col gap-[12svh]">
        {items.map((item, index) => (
          <StackTile key={index} item={item} index={index} total={items.length} progress={progress} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesStackingTilesMakro;
