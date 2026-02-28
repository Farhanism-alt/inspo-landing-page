import { PenTool, Palette, Megaphone, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import { Link } from "react-router-dom";

const cases = [
  { icon: PenTool, title: "UI/UX Designers", link: "/use-cases/ui-ux-designers", body: "Find layout inspiration, explore typography, and build client pitch moodboards faster than ever." },
  { icon: Palette, title: "Brand Teams", link: "/use-cases/brand-teams", body: "Audit designs for brand compliance, scan competitor brands, and maintain visual consistency at scale." },
  { icon: Megaphone, title: "Marketing Teams", link: "/use-cases/marketing-teams", body: "Create campaign moodboards, align creative direction across stakeholders, and speed up approvals." },
  { icon: Briefcase, title: "Agencies and Freelancers", link: "/use-cases/agencies", body: "Impress clients with polished moodboards, run competitive brand audits, and accelerate the ideation phase." },
];

const UseCasesPreview = () => {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground text-center mb-20"
        >
          Built for every creative workflow
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <Link to={c.link} className="block bg-card rounded-[24px] border border-border p-8 shadow-inspo transition-all duration-300 hover:shadow-inspo-lg hover:-translate-y-1 group h-full cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  <c.icon size={20} className="text-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 tracking-[-0.01em]">{c.title}</h3>
                <p className="text-inspo-body text-sm leading-relaxed mb-5">{c.body}</p>
                <span className="text-sm font-medium text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesPreview;
