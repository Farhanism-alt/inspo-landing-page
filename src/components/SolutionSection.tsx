import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import { Sparkles, Search, LayoutGrid, ShieldCheck, Globe, Wand2, Users, CheckCircle, MessageSquare } from "lucide-react";

const sidebarIcons = [Search, LayoutGrid, ShieldCheck, Globe, Wand2, Users];

const BrowserFrame = () => (
  <div className="bg-card rounded-[24px] border border-border shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full max-w-[520px] mx-auto overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
    <div className="flex">
      <div className="w-12 bg-secondary flex flex-col items-center py-4 gap-4 shrink-0 border-r border-border">
        {sidebarIcons.map((Icon, i) => (
          <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? "bg-white shadow-sm border border-border" : ""}`}>
            <Icon size={14} className={i === 0 ? "text-primary" : "text-muted-foreground"} />
          </div>
        ))}
      </div>
      <div className="flex-1 p-4">
        <div className="bg-secondary/60 rounded-xl border border-border px-3 py-2.5 flex items-center gap-2 mb-4">
          <Search size={13} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground">minimalist SaaS landing page...</span>
          <div className="ml-auto inspo-gradient-bg text-primary-foreground text-[10px] font-medium px-3 py-1 rounded-pill">Search</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[72, 56, 56, 72].map((h, i) => (
            <div key={i} className="rounded-xl bg-gradient-to-br from-secondary to-muted border border-border" style={{ height: h }} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MoodboardSatellite = () => (
  <div className="bg-card rounded-xl border border-border shadow-inspo p-3 w-[140px]">
    <div className="grid grid-cols-3 gap-1 mb-2">
      {[0, 1, 2].map(i => <div key={i} className="h-8 rounded bg-gradient-to-br from-secondary to-muted border border-border" />)}
    </div>
    <span className="text-[9px] font-medium text-primary-foreground bg-accent/80 px-2 py-0.5 rounded-pill">Shared</span>
  </div>
);

const AuditSatellite = () => (
  <div className="bg-card rounded-xl border border-border shadow-inspo p-3 w-[120px] flex flex-col items-center">
    <svg width="52" height="52" viewBox="0 0 52 52">
      <circle cx="26" cy="26" r="22" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
      <circle cx="26" cy="26" r="22" fill="none" stroke="url(#auditGrad)" strokeWidth="4" strokeLinecap="round"
        strokeDasharray={`${0.94 * 2 * Math.PI * 22} ${2 * Math.PI * 22}`}
        transform="rotate(-90 26 26)" />
      <defs><linearGradient id="auditGrad" x1="0" y1="0" x2="52" y2="0"><stop stopColor="#008CFF" /><stop offset="1" stopColor="#41F461" /></linearGradient></defs>
      <text x="26" y="30" textAnchor="middle" className="fill-foreground" style={{ fontSize: 14, fontWeight: 700, fontFamily: "DM Sans" }}>94</text>
    </svg>
    <div className="flex items-center gap-1 mt-1">
      <CheckCircle size={10} className="text-accent" />
      <span className="text-[9px] font-medium text-foreground">On Brand</span>
    </div>
  </div>
);

const ScannerSatellite = () => (
  <div className="bg-card rounded-xl border border-border shadow-inspo p-3 w-[130px]">
    <svg width="100" height="48" viewBox="0 0 100 48">
      <circle cx="20" cy="24" r="6" fill="none" stroke="#008CFF" strokeWidth="1.5" />
      <circle cx="50" cy="12" r="6" fill="none" stroke="#41F461" strokeWidth="1.5" />
      <circle cx="80" cy="28" r="6" fill="none" stroke="#008CFF" strokeWidth="1.5" />
      <line x1="26" y1="22" x2="44" y2="14" stroke="hsl(var(--border))" strokeWidth="1" />
      <line x1="56" y1="14" x2="74" y2="26" stroke="hsl(var(--border))" strokeWidth="1" />
      <text x="20" y="40" textAnchor="middle" style={{ fontSize: 7 }} className="fill-muted-foreground">Colors</text>
      <text x="50" y="40" textAnchor="middle" style={{ fontSize: 7 }} className="fill-muted-foreground">Fonts</text>
      <text x="80" y="44" textAnchor="middle" style={{ fontSize: 7 }} className="fill-muted-foreground">Tech</text>
    </svg>
  </div>
);

const CreatorSatellite = () => (
  <div className="bg-card rounded-xl border border-border shadow-inspo p-3 w-[150px]">
    <div className="flex items-start gap-1.5 mb-2">
      <MessageSquare size={10} className="text-muted-foreground mt-0.5" />
      <div className="bg-primary text-white text-[9px] px-2 py-1 rounded-lg rounded-tl-none">Design a hero section</div>
    </div>
    <div className="bg-secondary/60 rounded-lg border border-border p-2 h-8" />
  </div>
);

const CollabSatellite = () => (
  <div className="bg-card rounded-xl border border-border shadow-inspo p-3 w-[140px] flex items-center gap-2">
    <div className="flex -space-x-2">
      {["bg-primary", "bg-purple-400", "bg-orange-400"].map((c, i) => (
        <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-card`} />
      ))}
    </div>
    <div>
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-[9px] font-medium text-accent">Live</span>
      </div>
      <span className="text-[8px] text-muted-foreground">3 editing now</span>
    </div>
  </div>
);

const ConnectionLines = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" preserveAspectRatio="none">
    <line x1="18%" y1="25%" x2="35%" y2="40%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="82%" y1="22%" x2="65%" y2="38%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="88%" y1="52%" x2="68%" y2="50%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="80%" y1="78%" x2="65%" y2="65%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="15%" y1="75%" x2="35%" y2="62%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 3" />
  </svg>
);

const satellites = [
  { Component: MoodboardSatellite, className: "lg:absolute lg:top-[8%] lg:left-[4%] lg:-rotate-3" },
  { Component: AuditSatellite, className: "lg:absolute lg:top-[4%] lg:right-[8%] lg:rotate-2" },
  { Component: ScannerSatellite, className: "lg:absolute lg:top-[42%] lg:right-[2%] lg:rotate-[4deg]" },
  { Component: CreatorSatellite, className: "lg:absolute lg:bottom-[8%] lg:right-[6%] lg:-rotate-2" },
  { Component: CollabSatellite, className: "lg:absolute lg:bottom-[10%] lg:left-[4%] lg:rotate-3" },
];

const SolutionSection = () => {
  return (
    <section className="section-padding" style={{ background: "#f9f9f9" }}>
      <div className="container-narrow">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground mb-5"
          >
            One workspace for inspiration, intelligence, and creation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-[640px] mx-auto leading-relaxed text-inspo-body"
          >
            Inspo AI brings together everything creative professionals need. Search for design inspiration with AI. Build and share moodboards with your team. Audit any design against brand guidelines. Scan competitor websites for brand DNA. Generate new designs with AI chat. All in one clean, fast workspace.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mb-14 aspect-video w-full max-w-[1000px] mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-border"
        >
          <iframe
            src="https://www.youtube.com/embed/QYE6qP7cfLU?si=lGwY-FjGDRr2PHzq"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            title="Inspo AI Demo"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://app.inspoai.io"
            className="inspo-gradient-bg shimmer-btn text-white text-base px-8 py-3.5 rounded-pill inline-flex items-center gap-2 shadow-inspo-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_8px_30px_rgba(0,140,255,0.25)]"
            style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}
          >
            GET INSPIRED
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
