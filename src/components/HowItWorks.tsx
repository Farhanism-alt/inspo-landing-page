import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

/* ─── Step 1 Mockup: Search or Scan ─── */
const SearchMockup = () => (
  <div className="bg-white rounded-[24px] border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 w-full">
    <div className="flex items-center gap-2.5 bg-[#f5f5f5] border border-gray-200 rounded-full px-4 py-3 mb-4">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="#41F461" strokeWidth="1.5" />
        <line x1="11" y1="11" x2="14" y2="14" stroke="#41F461" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="text-xs text-foreground">minimalist SaaS landing page</span>
    </div>
    <div className="flex gap-2 mb-5">
      <span className="text-[11px] px-3 py-1.5 rounded-full bg-accent/15 text-foreground font-medium">SaaS</span>
      <span className="text-[11px] px-3 py-1.5 rounded-full bg-[#f0f0f0] text-muted-foreground border border-gray-200">Minimalist</span>
      <span className="text-[11px] px-3 py-1.5 rounded-full bg-[#f0f0f0] text-muted-foreground border border-gray-200">Sans-serif</span>
    </div>
    <div className="grid grid-cols-3 gap-2.5">
      <div className="h-20 rounded-xl bg-[#e8e8e8]" />
      <div className="h-24 rounded-xl bg-[#e0e0e0]" />
      <div className="h-16 rounded-xl bg-[#e8e8e8]" />
      <div className="h-14 rounded-xl bg-[#e0e0e0] col-span-2" />
      <div className="h-14 rounded-xl bg-[#e8e8e8]" />
    </div>
  </div>
);

/* ─── Step 2 Mockup: Curate & Collaborate ─── */
const CurateMockup = () => (
  <div className="bg-white rounded-[24px] border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 w-full">
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center -space-x-2">
        <div className="w-7 h-7 rounded-full bg-primary border-2 border-white" />
        <div className="w-7 h-7 rounded-full bg-[#9b5de5] border-2 border-white" />
        <div className="w-7 h-7 rounded-full bg-accent border-2 border-white" />
      </div>
      <span className="text-[11px] bg-foreground text-primary-foreground px-4 py-1.5 rounded-full font-medium">Share</span>
    </div>
    <div className="flex gap-2.5 mb-5">
      <div className="w-10 h-10 rounded-xl bg-foreground" />
      <div className="w-10 h-10 rounded-xl bg-primary" />
      <div className="w-10 h-10 rounded-xl bg-accent" />
      <div className="w-10 h-10 rounded-xl bg-[#f5c542]" />
      <div className="w-10 h-10 rounded-xl bg-[#e0e0e0]" />
    </div>
    <div className="bg-[#f5f5f5] rounded-xl p-4 mb-4">
      <p className="font-display text-sm text-foreground leading-tight mb-1">Inter</p>
      <p className="font-sans text-[11px] text-muted-foreground">DM Sans — Body text</p>
    </div>
    <div className="grid grid-cols-3 gap-2">
      <div className="h-12 rounded-xl bg-[#e8e8e8]" />
      <div className="h-12 rounded-xl bg-[#e0e0e0]" />
      <div className="h-12 rounded-xl bg-[#e8e8e8]" />
    </div>
  </div>
);

/* ─── Step 3 Mockup: Audit & Create ─── */
const AuditMockup = () => (
  <div className="bg-white rounded-[24px] border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 w-full">
    <div className="flex gap-4">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 mb-2">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="38" fill="none" stroke="#e0e0e0" strokeWidth="7" />
            <circle cx="48" cy="48" r="38" fill="none" stroke="url(#progressGrad)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 38 * 0.92} ${2 * Math.PI * 38 * 0.08}`} />
            <defs>
              <linearGradient id="progressGrad" x1="0" y1="0" x2="96" y2="0">
                <stop offset="0%" stopColor="#008CFF" />
                <stop offset="100%" stopColor="#41F461" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-foreground">92</span>
        </div>
        <span className="text-[10px] text-accent font-medium flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5L8.5 2.5" stroke="#41F461" strokeWidth="1.5" strokeLinecap="round" /></svg>
          On Brand
        </span>
      </div>
      <div className="w-px bg-gray-200 self-stretch" />
      <div className="flex-1 flex flex-col gap-3 justify-center">
        <div className="bg-[#1a1a1a] text-white text-[11px] px-4 py-2.5 rounded-2xl rounded-bl-sm self-end max-w-[95%]">
          Add a testimonial section
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-[#f5f5f5] h-4 flex items-center gap-1 px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
          </div>
          <div className="p-3 bg-[#fafafa]">
            <div className="text-primary text-base leading-none mb-1.5">&ldquo;</div>
            <div className="h-2 bg-[#e0e0e0] rounded-full w-full mb-1.5" />
            <div className="h-2 bg-[#e0e0e0] rounded-full w-3/4 mb-2" />
            <div className="h-2 bg-[#e8e8e8] rounded-full w-1/2" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Connector Arrow (desktop) ─── */
const ConnectorArrow = () => (
  <div className="hidden md:flex items-center justify-center absolute top-[20%] -right-6 z-10 w-12">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M4 36 C16 36, 16 12, 32 12" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="6 4" fill="none" />
      <path d="M30 8L35 12L30 16" stroke="hsl(var(--border))" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

/* ─── Mobile Chevron ─── */
const MobileChevron = () => (
  <div className="flex md:hidden justify-center py-4">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="hsl(var(--border))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const steps = [
  { num: "01", title: "Search or scan", body: "Type what you are looking for in natural language or enter a website URL to scan its brand DNA. Inspo AI returns relevant results instantly.", Mockup: SearchMockup },
  { num: "02", title: "Curate and collaborate", body: "Save designs to moodboards. Add color palettes and font pairs. Invite team members to collaborate in real time. Share via public link.", Mockup: CurateMockup },
  { num: "03", title: "Audit and create", body: "Upload brand guidelines to audit any design for consistency. Use Creator Studio to generate new designs through AI chat with live preview.", Mockup: AuditMockup },
];

const HowItWorks = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container-narrow">
        <BlurReveal as="h2" className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground text-center mb-20">
          From search to moodboard in three steps
        </BlurReveal>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  <span className="text-4xl font-bold font-sans text-foreground">{s.num}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 tracking-[-0.01em]">{s.title}</h3>
                <p className="text-inspo-body text-[15px] leading-relaxed mb-8 max-w-[280px] mx-auto">{s.body}</p>
                <div className="w-full">
                  <s.Mockup />
                </div>
              </motion.div>
              {i < 2 && <ConnectorArrow />}
              {i < 2 && <MobileChevron />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
