import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useImageReady } from "@/components/kit/kitMotion";
import Icon, { type IconName } from "@/components/kit/Icon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import MakroTitle from "@/components/kit/MakroTitle";
import Media, { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Step = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

type FeaturesStepWashCardsProps = {
  ariaLabel?: string;
  tag?: string;
  tagIcon?: IconName;
  title: string;
  description?: string;
  items: Step[];
  cta?: { text: string; href: string };
  className?: string;
};

const reveal = { type: "spring", bounce: 0.2, duration: 1 } as const;
const VIEW = { once: true, margin: "0px 0px -8% 0px" } as const;

const StepCard = ({ item, index }: { item: Step; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "0px 0px -10% 0px" });
  const cardReady = useImageReady(cardRef, cardInView);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <motion.article
      ref={cardRef}
      initial={reduceMotion ? false : { opacity: 0, y: 64 }}
      animate={cardInView && cardReady ? { opacity: 1, y: 0 } : undefined}
      transition={{ ...reveal, delay: index * 0.12 }}
      className="flex flex-col rounded-[var(--radius-card)] bg-card p-[8px] text-card-foreground"
    >
      <div ref={ref} data-wash-frame="" className="relative isolate aspect-[4/3] overflow-hidden rounded-[calc(var(--radius-card)-8px)] bg-deep/30">
        <Media src={item.imageSrc} alt="" aria-hidden="true" loading="lazy" decoding="async" data-wash="" className="absolute inset-0 -z-2 size-full scale-[1.4] object-cover blur-[48px] saturate-[0.6]" />
        <div aria-hidden="true" className="absolute inset-0 -z-1 bg-linear-to-b from-card/40 via-card/15 to-deep/5" />
        <div className="absolute inset-[clamp(20px,9%,36px)] overflow-hidden rounded-[var(--radius-image)] shadow-[0_1.5rem_3rem_-1.5rem_color-mix(in_srgb,var(--deep)_45%,transparent)]">
          <MotionMedia
            src={item.imageSrc}
            alt={item.imageAlt ?? ""}
            loading="lazy"
            decoding="async"
            style={{ y, scale: 1.15 }}
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] px-[clamp(16px,2vw,24px)] pb-[clamp(16px,2vw,24px)] pt-[clamp(20px,2.4vw,28px)]">
        <p aria-hidden="true" className="flex size-[32px] items-center justify-center rounded-full bg-accent text-[length:var(--text-small)] leading-none text-accent-foreground">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-[6px] text-[length:calc(var(--text-h3)*0.8)] leading-[1.35] tracking-[-0.02em] text-balance [overflow-wrap:anywhere]">{item.title}</h3>
        <p className="text-[length:var(--text-body)] leading-[1.5] text-muted-foreground">{item.description}</p>
      </div>
    </motion.article>
  );
};

const FeaturesStepWashCards = ({ ariaLabel, tag, tagIcon, title, description, items, cta, className }: FeaturesStepWashCardsProps) => {
  const reduceMotion = useReducedMotion();
  const steps = items;

  if (steps.length === 0) return null;

  return (
    <section data-scene aria-label={ariaLabel ?? title} className={cn("relative bg-background py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto mb-[clamp(2.5rem,5vw,4rem)] flex w-[var(--container)] flex-col items-center text-center">
        {tag && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={reveal}
            className="mb-[20px] flex max-w-full items-center gap-[8px] rounded-full bg-card py-[4px] pl-[4px] pr-[14px] text-card-foreground"
          >
            <div className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-background">
              <Icon name={tagIcon ?? "sparkles"} aria-hidden="true" className="size-[14px]" strokeWidth={1.5} />
            </div>
            <p className="truncate text-[length:var(--text-label)] leading-[1.5]">{tag}</p>
          </motion.div>
        )}
        <MakroTitle text={title} className="max-w-[18ch] text-[length:var(--text-h1)] leading-[1.2]" />
        {description && (
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 72 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...reveal, delay: 0.15 }}
            className="mt-[16px] max-w-[36rem] text-[length:var(--text-body-lg)] leading-[1.5] text-balance text-muted-foreground"
          >
            {description}
          </motion.p>
        )}
      </div>
      <div className={cn("mx-auto grid w-[var(--container)] grid-cols-1 gap-[var(--gap)]", steps.length === 4 ? "sm:grid-cols-2 xl:grid-cols-4" : steps.length === 2 ? "sm:grid-cols-2" : "lg:grid-cols-3")}>
        {steps.map((item, index) => (
          <StepCard key={index} item={item} index={index} />
        ))}
      </div>
      {cta && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ ...reveal, delay: 0.3 }}
          className="mx-auto mt-[clamp(2.5rem,5vw,3.5rem)] flex w-[var(--container)] justify-center"
        >
          <a href={cta.href} className="btn-primary">
            {cta.text}
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default FeaturesStepWashCards;
