import { Search, Layout, ShieldCheck, Globe, Wand2, Users } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

/* ── Mockup sub-components ── */

const SearchMockup = () => (
  <div className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] rounded-[24px] p-4 h-full flex flex-col gap-3">
    <div className="bg-card rounded-full border border-border px-4 py-2.5 flex items-center gap-2">
      <Search size={14} className="text-muted-foreground shrink-0" />
      <span className="text-sm text-foreground/70">minimalist SaaS landing page</span>
    </div>
    <div className="flex gap-2 flex-wrap">
      {["Industry", "Style", "Color", "Font"].map((f) => (
        <span key={f} className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-border bg-card text-muted-foreground">
          {f}
        </span>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-1.5 flex-1 min-h-0">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`bg-card rounded-xl border border-border ${i < 3 ? "h-16" : "h-12"}`} />
      ))}
    </div>
  </div>
);

const MoodboardMockup = () => (
  <div className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] rounded-[24px] p-4 h-full flex flex-col gap-3">
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">My Moodboard</span>
      <span className="text-[10px] font-medium px-3 py-1 rounded-full inspo-gradient-bg text-primary-foreground">Share</span>
    </div>
    <div className="grid grid-cols-4 gap-1.5">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-14 bg-card rounded-xl border border-border" />
      ))}
    </div>
    <div className="flex gap-1.5">
      {["#2563eb", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"].map((c) => (
        <div key={c} className="w-8 h-8 rounded-lg" style={{ backgroundColor: c }} />
      ))}
    </div>
    <div className="flex gap-3">
      <div className="bg-card rounded-xl border border-border px-3 py-2 flex-1">
        <span className="text-[10px] text-muted-foreground block">Heading</span>
        <span className="font-display text-sm font-bold">Inter</span>
      </div>
      <div className="bg-card rounded-xl border border-border px-3 py-2 flex-1">
        <span className="text-[10px] text-muted-foreground block">Body</span>
        <span className="text-sm">DM Sans</span>
      </div>
    </div>
  </div>
);

const AuditMockup = () => (
  <div className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] rounded-[24px] p-4 h-full flex flex-col items-center justify-center relative">
    <div className="flex gap-2 w-full flex-1 min-h-0">
      <div className="bg-card rounded-xl border border-border flex-1 p-2 flex flex-col gap-1">
        <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Guidelines</span>
        <div className="flex-1 flex flex-col gap-1">
          <div className="h-2 bg-foreground/[0.06] rounded-full w-3/4" />
          <div className="h-2 bg-foreground/[0.06] rounded-full w-1/2" />
          <div className="h-2 bg-foreground/[0.06] rounded-full w-2/3" />
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border flex-1 p-2 flex flex-col gap-1">
        <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Design</span>
        <div className="flex-1 bg-secondary/50 rounded-lg" />
      </div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full inspo-gradient-bg flex items-center justify-center shadow-lg">
      <div className="w-[54px] h-[54px] rounded-full bg-card flex flex-col items-center justify-center">
        <span className="text-lg font-bold font-display leading-none">87</span>
        <span className="text-[8px] text-muted-foreground">/100</span>
      </div>
    </div>
  </div>
);

const ScannerMockup = () => (
  <div className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] rounded-[24px] p-4 h-full flex flex-col gap-3">
    <div className="bg-card rounded-full border border-border px-4 py-2 flex items-center gap-2">
      <Globe size={12} className="text-muted-foreground" />
      <span className="text-sm text-foreground/70">competitor.com</span>
    </div>
    <div className="flex-1 flex items-center justify-center relative">
      <div className="w-12 h-12 rounded-full inspo-gradient-bg flex items-center justify-center z-10">
        <Globe size={16} className="text-primary-foreground" />
      </div>
      {["Colors", "Fonts", "Tech", "Pricing", "SEO"].map((label, i) => {
        const angle = (i * 72 - 90) * (Math.PI / 180);
        const r = 55;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <div key={label} className="absolute flex flex-col items-center" style={{ left: `calc(50% + ${x}px - 18px)`, top: `calc(50% + ${y}px - 12px)` }}>
            <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center">
              <span className="text-[8px] font-medium text-muted-foreground">{label}</span>
            </div>
          </div>
        );
      })}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i * 72 - 90) * (Math.PI / 180);
          const r = 55;
          return (
            <line key={i} x1="100" y1="100" x2={100 + Math.cos(angle) * r} y2={100 + Math.sin(angle) * r} stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
          );
        })}
      </svg>
    </div>
  </div>
);

const CreatorMockup = () => (
  <div className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] rounded-[24px] p-3 h-full flex gap-2">
    <div className="w-2/5 bg-card rounded-xl border border-border p-2 flex flex-col gap-2">
      <div className="bg-secondary/50 rounded-lg p-2">
        <span className="text-[9px] text-foreground/70">Design a pricing page with 3 tiers</span>
      </div>
      <div className="bg-primary/10 rounded-lg p-2 flex-1">
        <span className="text-[9px] text-foreground/70">Here's your pricing page with three tiers...</span>
      </div>
    </div>
    <div className="flex-1 bg-card rounded-xl border border-border p-2 flex flex-col gap-1">
      <div className="flex gap-1 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-destructive/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex gap-1 flex-1">
        {[1, 2, 3].map((t) => (
          <div key={t} className="flex-1 bg-secondary/30 rounded p-1 flex flex-col items-center gap-0.5">
            <div className="h-1.5 w-4 bg-foreground/[0.08] rounded-full" />
            <div className="h-1 w-3 bg-foreground/[0.06] rounded-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CollabMockup = () => (
  <div className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] rounded-[24px] p-4 h-full relative">
    <div className="absolute top-3 right-3 flex -space-x-2">
      <div className="w-6 h-6 rounded-full bg-primary/80 border-2 border-card" />
      <div className="w-6 h-6 rounded-full bg-accent/80 border-2 border-card" />
    </div>
    <div className="absolute top-3 right-20">
      <span className="text-[9px] font-medium px-2 py-1 rounded-full bg-card border border-border text-muted-foreground">2 collaborators</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mt-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-12 bg-card rounded-xl border border-border relative">
          {i === 2 && (
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/80 border border-card" />
          )}
        </div>
      ))}
    </div>
    <div className="absolute bottom-8 left-1/3">
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
        <path d="M1 1L11 8L5.5 9L3 15L1 1Z" fill="hsl(var(--primary))" stroke="white" strokeWidth="1" />
      </svg>
    </div>
  </div>
);

const features = [
  { icon: Search, title: "AI Design Search", body: "Search millions of designs using natural language. Filter by industry, style, color, and font. Get AI-powered recommendations. Hit Surprise Me for unexpected inspiration.", tag: "Core Feature", large: true, Mockup: SearchMockup },
  { icon: Layout, title: "Moodboard Builder", body: "Save any design to a moodboard. Organize by images, color palettes, and font pairs. Share with clients via public link. Export for presentations.", tag: "Core Feature", large: true, Mockup: MoodboardMockup },
  { icon: ShieldCheck, title: "AI Design Audit", body: "Upload brand guidelines and any design. Get an instant score out of 100 with visual annotations showing where the design deviates.", tag: "Brand Intelligence", large: false, Mockup: AuditMockup },
  { icon: Globe, title: "Brand Scanner", body: "Enter any website URL and extract its complete brand DNA. Colors, fonts, tech stack, pricing, SEO metadata, and more.", tag: "Competitive Intel", large: false, Mockup: ScannerMockup },
  { icon: Wand2, title: "Creator Studio", body: "Describe what you want and AI generates the design as live HTML and CSS. Preview across devices. Copy the code or iterate through chat.", tag: "Beta", large: false, Mockup: CreatorMockup },
  { icon: Users, title: "Live Collaboration", body: "Work on moodboards together in real time. Multiple team members can add, remove, and organize inspiration simultaneously.", tag: "Team Feature", large: false, Mockup: CollabMockup },
];

const BentoGrid = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container-narrow">
        <BlurReveal as="h2" className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground text-center mb-20">
          Everything you need to design smarter
        </BlurReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="bg-card rounded-[24px] border border-border overflow-hidden shadow-inspo transition-all duration-300 hover:shadow-inspo-lg hover:-translate-y-1"
            >
              <div className={`px-4 pt-4 ${f.large ? "h-64 sm:h-72" : "h-48 sm:h-56"}`}>
                <f.Mockup />
              </div>
              <div className="p-6 pt-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                    <f.icon size={14} className="text-foreground" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 tracking-[-0.01em]">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-inspo-body">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
