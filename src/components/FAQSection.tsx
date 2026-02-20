import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BlurReveal from "./BlurReveal";

const faqs = [
  { q: "What is Inspo AI?", a: "Inspo AI is an AI-powered design inspiration and brand intelligence platform. It helps designers, marketers, and creative teams search for visual inspiration, build moodboards, audit designs against brand guidelines, scan websites for brand DNA, and generate designs using AI." },
  { q: "How does the AI design search work?", a: 'The AI design search lets you describe what you are looking for in natural language. For example, you can type "minimalist SaaS landing page with dark mode" and Inspo AI returns relevant design references. You can also filter by industry, style, color, and font.' },
  { q: "Can I share moodboards with my team or clients?", a: "Yes. Every moodboard can be shared via a public link. You can also invite team members to collaborate on moodboards in real time using the live collaboration feature." },
  { q: "What does the Brand Scanner extract?", a: "The Brand Scanner takes any website URL and extracts its complete brand DNA including colors, fonts, logo, tech stack, pricing structure, contact information, SEO metadata, and all visual assets. Results are displayed as an interactive node graph." },
  { q: "How much does Inspo AI cost?", a: "Inspo AI offers a free plan with 10 searches, 1 moodboard, 1 audit, and 1 scan. Paid plans start at $10 per month for Basic, $29 per month for Pro, and a one-time $249 Lifetime plan with unlimited access to all features." },
  { q: "What is the AI Design Audit?", a: "The AI Design Audit lets you upload brand guidelines as a PDF or image and then upload any design to check. The AI analyzes the design against the guidelines and returns a score out of 100 with visual annotations showing exactly where the design deviates." },
  { q: "Is there an API for Inspo AI?", a: "Inspo AI is currently available as a web application. API access is on the roadmap for future releases." },
  { q: "Can I use Inspo AI for competitive analysis?", a: "Yes. The Brand Scanner feature lets you enter any competitor website URL and extract their entire brand identity including colors, fonts, technology stack, pricing, and SEO strategy. This makes it a powerful competitive intelligence tool for brand and marketing teams." },
];

export interface FAQItem {
  q: string;
  a: string;
}

const FAQSection = ({ customItems }: { customItems?: FAQItem[] }) => {
  const itemsToDisplay = customItems || faqs;

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-narrow max-w-3xl">
        <BlurReveal as="h2" className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground text-center mb-20">
          Got Questions? We've Got Answers
        </BlurReveal>
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
