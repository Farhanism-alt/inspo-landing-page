import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

const testimonials = [
  {
    quote: "Inspo AI cut our moodboarding time from 3 hours to 20 minutes. The AI search actually understands what I mean when I type something like 'clean fintech dashboard with dark mode'.",
    name: "Sarah Chen",
    role: "Senior UI Designer, Fintech Startup",
  },
  {
    quote: "Brand Scanner is a game changer for competitive research. We scan client competitors before every pitch and walk in with insights that blow them away.",
    name: "Marcus Rivera",
    role: "Creative Director, Brand Agency",
  },
  {
    quote: "The design audit feature saved us from shipping three off-brand campaigns last quarter. Upload the guidelines, upload the design, get an instant score. Simple.",
    name: "Priya Patel",
    role: "Marketing Manager, SaaS Company",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <BlurReveal as="h2" className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground text-center mb-20">
          What creative professionals are saying
        </BlurReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="bg-card rounded-[24px] border border-border p-9 shadow-inspo transition-all duration-300 hover:shadow-inspo-lg hover:-translate-y-1"
            >
              <p className="text-inspo-body text-[15px] leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
