import { Check } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "10 searches / credits",
      "1 moodboard creation",
      "1 design audit",
      "1 brand scan",
      "5 search history saved",
    ],
    cta: "Get Started Free",
    href: "https://app.inspoai.live/",
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$10",
    period: "/month",
    features: [
      "50 searches / credits",
      "10 moodboard creations",
      "3 moodboard share links",
      "5 design audits",
      "5 brand scans",
      "50 search history",
      "Email support",
    ],
    cta: "Get Basic",
    href: "https://app.inspoai.live",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    badge: "BEST VALUE",
    features: [
      "500 searches / credits",
      "Unlimited moodboard creations",
      "20 moodboard share links",
      "50 design audits",
      "50 brand scans",
      "Live collaboration",
      "Creator Studio Beta (Coming Soon)",
      "Unlimited history",
      "High priority support",
    ],
    cta: "Upgrade",
    href: "https://app.inspoai.io",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "$249",
    period: "one-time",
    features: [
      "Everything unlimited",
      "All features unlocked",
      "Priority support",
      "Early access to new features",
      "No recurring charges",
    ],
    cta: "Get Lifetime",
    href: "https://app.inspoai.live",
    highlighted: false,
    dark: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <BlurReveal as="h2" className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground mb-4">
            Simple pricing that scales with you
          </BlurReveal>
          <p className="text-muted-foreground text-lg">Start free. Upgrade when you need more.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`rounded-[24px] border p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-1 ${p.highlighted
                ? "bg-card shadow-inspo-lg inspo-gradient-border hover:shadow-[0_16px_48px_rgba(0,140,255,0.12)]"
                : "bg-card border-border shadow-inspo hover:shadow-inspo-lg"
                }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inspo-gradient-bg text-primary-foreground text-xs font-semibold px-4 py-1 rounded-pill">
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-foreground tracking-[-0.01em]">{p.name}</h3>
              <div className="mt-3 mb-1">
                <span className="text-3xl font-extrabold text-foreground tracking-tight">{p.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-inspo-body">
                    <Check size={15} className="flex-shrink-0 mt-0.5 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 text-center font-semibold text-sm px-6 py-3.5 rounded-pill block transition-all duration-300 bg-black hover:inspo-gradient-bg shimmer-btn text-white shadow-inspo hover:shadow-[0_4px_20px_rgba(0,140,255,0.2)] hover:-translate-y-[1px]"
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
