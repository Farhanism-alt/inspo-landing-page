import { motion } from "framer-motion";

const logos = ["Acme Co", "Pixel Labs", "DesignHQ", "BrandForge", "CreativSync", "Artisan"];

const LogoBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-14 border-y border-border bg-card"
    >
      <div className="container-narrow px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">
          Used by creative teams at
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left gap-16 w-max">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="text-lg font-semibold text-muted-foreground/40 whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LogoBar;
