import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BlurReveal from "./BlurReveal";

const plans = [
  {
    name: "Free",
    price: { monthly: "$0", annual: "$0" },
    period: { monthly: "forever", annual: "forever" },
    features: [
      "15 searches / day",
      "1 moodboard (max 20 images)",
      "1 design audit",
      "1 brand scan",
      "5 search history saved",
      "Live collaboration",
    ],
    cta: "Get Started Free",
    href: "https://app.inspoai.io/",
    highlighted: false,
  },
  {
    name: "Solo",
    price: { monthly: "$12", annual: "$9" },
    period: { monthly: "/month", annual: "/mo, billed yearly" },
    features: [
      "100 searches / day",
      "10 moodboard creations",
      "5 moodboard share links",
      "5 design audits",
      "5 brand scans",
      "50 search history",
      "Live collaboration",
      "Email support",
    ],
    cta: "Get Solo",
    href: "https://app.inspoai.io",
    highlighted: false,
  },
  {
    name: "Team",
    price: { monthly: "$39", annual: "$29" },
    period: { monthly: "/month", annual: "/mo, billed yearly" },
    badge: "BEST VALUE",
    features: [
      "1 Owner + 2 Members",
      "300 searches / day",
      "Unlimited moodboard creations",
      "20 moodboard share links",
      "50 design audits",
      "50 brand scans",
      "Live collaboration",
      "Creator Studio Beta",
      "Unlimited history",
      "High priority support",
    ],
    cta: "Get Team",
    href: "https://app.inspoai.io",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: { monthly: "$199", annual: "$199" },
    period: { monthly: "one-time", annual: "one-time" },
    features: [
      "Everything unlimited",
      "All features unlocked",
      "Creator Studio Beta",
      "Priority support",
      "Early access to new features",
      "No recurring charges",
    ],
    cta: "Get Lifetime",
    href: "https://app.inspoai.io",
    highlighted: false,
  },
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <BlurReveal as="h2" className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-foreground mb-4">
            Simple pricing that scales with you
          </BlurReveal>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 rounded-full bg-foreground/10 transition-colors hover:bg-foreground/20"
            >
              <motion.div
                animate={{ x: isAnnual ? 26 : 4 }}
                className="absolute top-1 w-4 h-4 rounded-full bg-foreground shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Annually</span>
              <span className="bg-[#E6F9F1] text-[#00A368] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#00A368]/10">
                SAVE UP TO 25%
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`rounded-[32px] border p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-1 ${p.highlighted
                ? "bg-black shadow-[0_24px_48px_rgba(0,0,0,0.2)] border-white/10 hover:shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
                : "bg-card border-border shadow-inspo hover:shadow-inspo-lg"
                }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00A368] text-white text-[10px] font-bold tracking-wider px-4 py-1.5 rounded-full uppercase">
                  {p.badge}
                </span>
              )}
              <h3 className={`font-display text-lg font-bold tracking-[-0.01em] ${p.highlighted ? "text-white" : "text-foreground"}`}>{p.name}</h3>
              <div className="mt-4 mb-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isAnnual ? "annual" : "monthly"}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`text-4xl font-extrabold tracking-tight inline-block ${p.highlighted ? "text-white" : "text-foreground"}`}
                  >
                    {isAnnual ? p.price.annual : p.price.monthly}
                  </motion.span>
                </AnimatePresence>
                <span className={`text-sm ml-1.5 leading-none ${p.highlighted ? "text-white/50" : "text-muted-foreground"}`}>
                  {isAnnual ? p.period.annual : p.period.monthly}
                </span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] ${p.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                    <Check size={16} className={`flex-shrink-0 mt-0.5 ${p.highlighted ? "text-white/40" : "text-foreground/20"}`} strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 text-center text-sm px-6 py-4 rounded-full block transition-all duration-300 shadow-sm ${p.highlighted
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-foreground text-background hover:opacity-90"
                  }`}
                style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}
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
