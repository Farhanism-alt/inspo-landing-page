import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "div" | "p";
}

const BlurReveal = ({ children, className = "", delay = 0, as = "div" }: BlurRevealProps) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 24, filter: "blur(12px)", scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default BlurReveal;
