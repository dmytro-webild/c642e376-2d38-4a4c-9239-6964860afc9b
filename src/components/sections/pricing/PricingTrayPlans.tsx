import { Check, Plus } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import MakroTitle from "@/components/kit/MakroTitle";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const SPRING = { type: "spring", bounce: 0.2, duration: 1 } as const;
const HEADER_VIEW = { once: true, margin: "0px 0px -8% 0px" } as const;
const ITEM_VIEW = { once: true, margin: "0px 0px -10% 0px" } as const;

type Plan = {
  name: string;
  description?: string;
  price: string;
  period?: string;
  note?: string;
  features: string[];
  includesPrevious?: boolean;
  highlighted?: boolean;
  cta: { text: string; href: string };
};

type Enterprise = {
  label?: string;
  title: string;
  description?: string;
  cta: { text: string; href: string };
};

type PricingTrayPlansProps = {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  items: Plan[];
  enterprise?: Enterprise;
  ariaLabel?: string;
  className?: string;
};

const PricingTrayPlans = ({ tag, title, highlight, description, items, enterprise, ariaLabel, className }: PricingTrayPlansProps) => {
  const reduce = useReducedMotion();
  const count = items.length;
  const cols = count === 1 ? "lg:grid-cols-1" : count === 2 ? "lg:grid-cols-2" : count === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 xl:grid-cols-4";

  return (
    <section aria-label={ariaLabel ?? [title, highlight].filter(Boolean).join(" ")} className={cn("relative py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto flex w-[var(--container)] flex-col items-center">
        {tag && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={HEADER_VIEW}
            transition={SPRING}
            className="rounded-full bg-secondary px-3.5 py-1 text-[length:var(--text-label)] leading-[1.5] text-secondary-foreground whitespace-nowrap"
          >
            {tag}
          </motion.p>
        )}
        <MakroTitle
          text={title}
          highlight={highlight}
          className="mt-5 max-w-[16em] text-center text-[length:var(--text-h1)] leading-[1.2] tracking-[var(--heading-tracking)]"
        />
        {description && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 72 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={HEADER_VIEW}
            transition={SPRING}
            className="mt-5 max-w-[30em] text-center text-[length:var(--text-body-lg)] leading-[1.5] text-muted-foreground text-balance"
          >
            {description}
          </motion.p>
        )}
        <div className="mt-[clamp(2.5rem,5vw,3.5rem)] w-full">
          <ul className={cn("grid grid-cols-1 gap-[var(--gap)]", cols, count === 1 && "mx-auto max-w-[36rem]")}>
            {items.map((plan, index) => (
              <motion.li
                key={`${index}-${plan.name}`}
                initial={reduce ? false : { opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ITEM_VIEW}
                transition={{ ...SPRING, delay: 0.1 + Math.min(index, 3) * 0.08 }}
                className="flex min-w-0 flex-col rounded-[var(--radius-card)] bg-card text-card-foreground p-[clamp(1.5rem,2.6vw,2.25rem)]"
              >
                <h3 className="text-[length:calc(var(--text-h3)*0.75)] leading-[1.4] tracking-[-0.02em] [overflow-wrap:anywhere]">{plan.name}</h3>
                {plan.description && (
                  <p className="mt-2 max-w-[24em] text-[length:var(--text-body)] leading-[1.5] text-muted-foreground">{plan.description}</p>
                )}
                <div className="mt-[clamp(1.5rem,3vw,2.5rem)] flex flex-col gap-2">
                  {plan.note && <p className="text-[length:var(--text-small)] leading-[1.5] text-muted-foreground whitespace-nowrap">{plan.note}</p>}
                  <p className="text-[length:calc(var(--text-h1)*0.86)] leading-[1.1] tracking-[-0.04em] [overflow-wrap:anywhere]">
                    {plan.price}
                  </p>
                  {plan.period && <p className="text-[length:var(--text-small)] leading-[1.5] text-muted-foreground">{plan.period}</p>}
                </div>
                <a href={plan.cta.href} className={cn(plan.highlighted ? "btn-primary" : "btn-secondary bg-background text-foreground", "mt-[clamp(1.25rem,2.4vw,2rem)] w-full")}>
                  {plan.cta.text}
                </a>
                <ul className="mt-[clamp(1.25rem,2.4vw,2rem)] flex flex-col">
                  {plan.features.map((feature, featureIndex) => {
                    const Icon = plan.includesPrevious && featureIndex === 0 ? Check : Plus;
                    return (
                      <li key={`${featureIndex}-${feature}`} className="flex items-start gap-3 border-b border-border py-3.5 last:border-b-0">
                        <Icon aria-hidden="true" className="mt-[0.2em] size-4 shrink-0 text-muted-foreground" strokeWidth={1.25} />
                        <p className="min-w-0 text-[length:var(--text-body)] leading-[1.5] [overflow-wrap:anywhere]">{feature}</p>
                      </li>
                    );
                  })}
                </ul>
              </motion.li>
            ))}
          </ul>
          {enterprise && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ITEM_VIEW}
              transition={{ ...SPRING, delay: 0.1 }}
              className="relative isolate mt-[var(--gap)] flex flex-col gap-6 overflow-hidden rounded-[var(--radius-card)] bg-deep text-deep-foreground p-[clamp(1.5rem,2.6vw,2.25rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-12"
            >
              <div aria-hidden="true" className="pointer-events-none absolute -right-[10%] -top-[120%] -z-1 aspect-square w-[60%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_22%,transparent),transparent)]" />
              <div className="flex min-w-0 flex-col items-start">
                {enterprise.label && (
                  <p className="rounded-full bg-accent px-3.5 py-1 text-[length:var(--text-label)] leading-[1.5] text-accent-foreground whitespace-nowrap">{enterprise.label}</p>
                )}
                <h3 className={cn("text-[length:var(--text-h3)] leading-[1.3] tracking-[-0.03em] text-balance [overflow-wrap:anywhere]", enterprise.label && "mt-4")}>
                  {enterprise.title}
                </h3>
                {enterprise.description && (
                  <p className="mt-3 max-w-[34em] text-[length:var(--text-body)] leading-[1.6] text-deep-foreground/70">{enterprise.description}</p>
                )}
              </div>
              <a href={enterprise.cta.href} className="btn-primary btn-lime btn-lg w-full shrink-0 lg:w-auto lg:min-w-[clamp(14rem,24vw,22rem)]">
                {enterprise.cta.text}
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingTrayPlans;
