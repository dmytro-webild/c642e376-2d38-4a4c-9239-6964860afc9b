import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useImageReady } from "@/components/kit/kitMotion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import MakroTitle from "@/components/kit/MakroTitle";
import Media, { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const SPRING = { type: "spring", bounce: 0.2, duration: 1 } as const;
const BOARD_SPRING = { type: "spring", bounce: 0, duration: 1.4 } as const;
const VIEW = { once: true, margin: "0px 0px -8% 0px" } as const;

type StatementDarkPanelBoardProps = {
  title: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  imageSrc: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  ariaLabel?: string;
  className?: string;
};

const StatementDarkPanelBoard = ({ title, primaryCta, secondaryCta, imageSrc, imageAlt, logoSrc, logoAlt, ariaLabel, className }: StatementDarkPanelBoardProps) => {
  const reduce = useReducedMotion();
  const boardRef = useRef<HTMLImageElement>(null);
  const boardIn = useInView(boardRef, { once: true, margin: "0px 0px -10% 0px" });
  const boardReady = useImageReady(boardRef, boardIn);

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative bg-background py-[calc(var(--section-space)/2)]", className)}>
      <div data-button="lime" className="relative isolate mx-[var(--panel-inset)] overflow-hidden rounded-[var(--radius-card)] bg-deep pt-[var(--section-space)] text-white">
        <Media
          src={imageSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          data-wash=""
          className="pointer-events-none absolute inset-0 -z-2 size-full scale-[1.4] object-cover blur-[56px] saturate-[0.6]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-1 bg-linear-to-b from-black/60 via-black/40 to-black/65" />
        <div className="mx-auto flex w-[var(--container)] flex-col items-center">
          {logoSrc && (
            <MotionMedia
              src={logoSrc}
              alt={logoAlt ?? ""}
              aria-hidden={logoAlt ? undefined : true}
              loading="lazy"
              decoding="async"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={SPRING}
              className="mb-8 h-[clamp(2rem,3.4vw,3rem)] w-auto max-w-[10rem] object-contain"
            />
          )}
          <MakroTitle text={title} className="max-w-[18ch] text-center text-[length:var(--text-h1)] leading-[1.2]" />
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 96 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...SPRING, delay: 0.1 }}
            className="mt-[clamp(2rem,4vw,3rem)] flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center"
          >
            <a href={primaryCta.href} className="btn-primary btn-lime btn-lg sm:min-w-[12rem]">
              {primaryCta.text}
            </a>
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn-secondary btn-lg sm:min-w-[12rem]">
                {secondaryCta.text}
              </a>
            )}
          </motion.div>
        </div>
        <div className="relative mx-auto mt-[clamp(3rem,7vw,5.5rem)] w-[var(--container)] [perspective:1200px]">
          <MotionMedia
            src={imageSrc}
            alt={imageAlt ?? ""}
            aria-hidden={imageAlt ? undefined : true}
            loading="lazy"
            decoding="async"
            initial={reduce ? false : { rotateX: 8, y: 66, opacity: 0 }}
            ref={boardRef}
            animate={boardIn && boardReady ? { rotateX: 0, y: 0, opacity: 1 } : undefined}
            transition={{ ...BOARD_SPRING, opacity: { duration: 0.6 } }}
            className="-mb-[18%] block aspect-[16/10] w-full origin-bottom rounded-[var(--radius-card)] object-cover [mask-image:linear-gradient(to_bottom,black_35%,transparent_82%)]"
          />
        </div>
      </div>
    </section>
  );
};

export default StatementDarkPanelBoard;
