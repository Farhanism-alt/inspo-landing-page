import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BlurReveal from "./BlurReveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export interface FAQItem {
  q: string;
  a: string | React.ReactNode;
}

const faqs: FAQItem[] = [
  { q: "Is there one place to search all design inspiration?", a: "Yes! Inspo AI is your one place to search all design inspiration. Instead of jumping between Behance, Dribbble, Pinterest, and other platforms, you can search all of them in one place — in real time. Find references by style, color, typography, or design language, and build your moodboard without ever leaving the platform." },
  { q: "Where can I find editable SVG icons, typography pairings, and UI animations?", a: 'Inspo AI goes far beyond standard screenshot libraries. You can use natural language to search for specific assets like "minimalist editable UI icons," "SaaS typography pairings," or "micro-interaction GIFs and animations." You can download these directly into your Figma workspace.' },
  { q: "How can I automatically audit my UI design for accessibility and UX?", a: "With Inspo AI's Design Audit feature, you simply upload your UI mockup or paste a live URL. The Design Engine analyzes your layout against UX heuristics and WCAG accessibility standards, giving you a score out of 100 with actionable feedback." },
  { q: "What is the best alternative to Mobbin for UI/UX research?", a: "While Mobbin is great for app screenshots, Inspo AI is a comprehensive AI workspace. It allows you to search across millions of references, but also includes Prompt-to-Image creation, AI website generation, and live collaborative moodboards in a multiplayer canvas." },
  { q: "How much does Inspo AI cost?", a: "Inspo AI offers a free plan with 10 asset searches, 1 collaborative moodboard, 1 AI design audit, and 1 brand scan. Paid plans start at $10/month for Basic, $29/month for Pro, and a one-time $199 Lifetime plan." },
  {
    q: "What is the Lifetime plan and what does it include?", a: (
      <>
        The Lifetime plan is a one-time payment of $199 that gives you permanent access to Inspo AI's complete design workspace. It includes unlimited searches, moodboards, AI design audits, and brand scans. For more details on what's included and our fair use policy, please check our <Link to="/lifetime-plan-policy" className="text-primary hover:underline">Inspo AI Lifetime Plan Policy</Link> page.
      </>
    )
  },
  { q: "Can I use AI to analyze a competitor's marketing strategy?", a: "Yes. The Brand Scanner feature lets you enter any competitor website URL and extracts their entire brand identity, technology stack, messaging hierarchy, and SEO strategy, making it a powerful competitive intelligence tool." },
];

const FAQSection = ({ customItems }: { customItems?: FAQItem[] }) => {
  const itemsToDisplay = customItems || faqs;

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-narrow max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground text-center mb-20"
        >
          Got Questions? We've Got Answers
        </motion.h2>
        <Accordion type="single" collapsible className="space-y-3">
          {itemsToDisplay.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-[20px] border border-border px-6 shadow-inspo transition-all duration-200 hover:shadow-inspo-lg">
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline py-5 tracking-[-0.01em]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-inspo-body text-[15px] leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
