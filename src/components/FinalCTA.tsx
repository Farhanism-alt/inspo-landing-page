import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

const FinalCTA = () => {
  return (
    <section className="section-padding py-28 lg:py-36">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BlurReveal as="h2" className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-foreground mb-6">
            Start finding design inspiration in seconds
          </BlurReveal>
          <p className="text-inspo-body text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Join thousands of designers, marketers, and creative teams who use Inspo AI to work smarter. Free to start. No credit card required.
          </p>
          <a
            href="https://app.inspoai.io"
            aria-label="Get started with Inspo AI for free"
            className="inspo-gradient-bg shimmer-btn text-white text-lg px-10 py-4 rounded-pill inline-flex items-center gap-2 transition-all duration-300 shadow-inspo-lg hover:shadow-[0_8px_30px_rgba(0,140,255,0.25)] hover:-translate-y-[1px]"
            style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}
          >
            GET INSPIRED
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
