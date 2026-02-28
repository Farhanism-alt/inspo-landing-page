import { Clock, FolderOpen, Palette, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

/* ── Mockup sub-components ── */

const problems = [
  {
    icon: Clock,
    title: "Hours lost searching",
    body: "Designers spend 2 to 3 hours per project hunting for inspiration across Pinterest, Dribbble, Behance, and dozens of bookmarks. That time adds up fast.",
    image: "/problem-hours.png",
  },
  {
    icon: FolderOpen,
    title: "Scattered tools and tabs",
    body: "Moodboards in one app. Brand guidelines in another. Design references in a third. Your creative workflow is fragmented across too many tools.",
    image: "/problem-tools.png",
  },
  {
    icon: Palette,
    title: "No brand consistency",
    body: "Without a quick way to audit designs against brand standards, small deviations slip through and erode brand trust over time.",
    image: "/problem-brand.png",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground text-center mb-20"
        >
          Your workflow is working against you
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-52 sm:h-56 mb-6">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center rounded-[24px]"
                />
              </div>
              <div className="pt-0">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 tracking-[-0.01em]">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-inspo-body">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
