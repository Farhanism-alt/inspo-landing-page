import { Clock, FolderOpen, Palette, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

/* ── Mockup sub-components ── */

const SearchChaosMockup = () => (
  <div className="bg-gradient-to-br from-[#FFF5F5] to-[#FFEDED] rounded-[24px] p-4 h-full flex flex-col gap-2.5 relative overflow-hidden">
    {/* Browser tabs */}
    <div className="flex gap-1.5 flex-wrap">
      {[
        { label: "Pinterest", active: true },
        { label: "Dribbble", active: false },
        { label: "Behance", active: false },
        { label: "Awwwards", active: false },
        { label: "Google", active: false },
        { label: "+", active: false },
      ].map((t) => (
        <div
          key={t.label}
          className={`text-[8px] font-semibold px-2 py-1 rounded-full ${
            t.active
              ? "bg-white border border-border text-foreground shadow-sm"
              : "bg-foreground/[0.04] text-muted-foreground"
          }`}
        >
          {t.label}
        </div>
      ))}
    </div>
    {/* Search bar */}
    <div className="bg-white rounded-full border border-border px-3 py-1.5 flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-foreground/[0.15]" />
      <div className="h-1.5 bg-foreground/[0.08] rounded-full flex-1" />
      <div className="text-[7px] text-muted-foreground">⌘K</div>
    </div>
    {/* Scattered thumbnails */}
    <div className="flex-1 relative">
      {[
        { top: "0%", left: "0%", rot: "-5deg", w: 68, h: 50 },
        { top: "5%", left: "42%", rot: "3deg", w: 60, h: 44 },
        { top: "44%", left: "8%", rot: "6deg", w: 54, h: 40 },
        { top: "38%", left: "48%", rot: "-4deg", w: 48, h: 38 },
        { top: "20%", left: "25%", rot: "2deg", w: 44, h: 34 },
      ].map((item, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-xl border border-border shadow-sm overflow-hidden"
          style={{ top: item.top, left: item.left, transform: `rotate(${item.rot})`, width: item.w, height: item.h }}
        >
          <div className="w-full h-[65%] rounded-t bg-gradient-to-br from-secondary to-muted" />
          <div className="p-1 flex flex-col gap-0.5">
            <div className="h-1 bg-foreground/[0.06] rounded-full w-3/4" />
            <div className="h-1 bg-foreground/[0.04] rounded-full w-1/2" />
          </div>
        </div>
      ))}
      <div className="absolute top-0 right-0 w-14 h-14 rounded-full bg-[#E85D5D] flex items-center justify-center shadow-lg">
        <span className="text-primary-foreground text-xs font-bold leading-none">2h 47m</span>
      </div>
      <div className="absolute bottom-1 left-1 animate-pulse">
        <Clock size={14} className="text-[#E85D5D]" />
      </div>
    </div>
  </div>
);

const ScatteredToolsMockup = () => (
  <div className="bg-gradient-to-br from-[#FFF5F5] to-[#FFEDED] rounded-[24px] p-3 h-full relative overflow-hidden">
    {[
      { label: "Moodboard.fig", top: "4%", left: "5%", rot: "-3deg", z: 1, iconColor: "#a259ff" },
      { label: "Brand_v3.pdf", top: "16%", left: "32%", rot: "2deg", z: 2, iconColor: "#E85D5D" },
      { label: "refs-folder", top: "36%", left: "8%", rot: "-1deg", z: 3, iconColor: "#f59e0b" },
      { label: "slack-thread", top: "30%", left: "48%", rot: "3deg", z: 4, iconColor: "#4A154B" },
    ].map((w, i) => (
      <div
        key={i}
        className="absolute w-[52%] h-[36%] bg-white rounded-xl border border-border shadow-sm overflow-hidden"
        style={{ top: w.top, left: w.left, transform: `rotate(${w.rot})`, zIndex: w.z }}
      >
        <div className="flex items-center gap-1 px-2 py-1 bg-secondary/50 border-b border-border">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E85D5D]" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
          <span className="text-[7px] text-muted-foreground ml-1 truncate">{w.label}</span>
        </div>
        <div className="p-2 flex gap-1.5">
          <div className="w-5 h-5 rounded shrink-0" style={{ backgroundColor: w.iconColor, opacity: 0.2 }} />
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-1.5 bg-foreground/[0.06] rounded-full w-full" />
            <div className="h-1.5 bg-foreground/[0.04] rounded-full w-2/3" />
            <div className="h-1.5 bg-foreground/[0.03] rounded-full w-1/2" />
          </div>
        </div>
      </div>
    ))}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
      <polyline points="40,25 95,55 45,85 100,115 55,145 105,170" fill="none" stroke="#E85D5D" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      {[[40,25],[95,55],[45,85],[100,115],[55,145],[105,170]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#E85D5D" opacity="0.4" />
      ))}
    </svg>
    <div className="absolute bottom-3 right-3" style={{ zIndex: 6 }}>
      <AlertTriangle size={16} className="text-[#E85D5D]" />
    </div>
  </div>
);

const BrandDriftMockup = () => (
  <div className="bg-gradient-to-br from-[#FFF5F5] to-[#FFEDED] rounded-[24px] p-3.5 h-full flex flex-col gap-2 overflow-hidden">
    <div className="bg-white rounded-xl border border-border p-2.5 flex items-center gap-2.5 shadow-sm">
      <div className="w-9 h-9 rounded-lg bg-primary shrink-0 flex items-center justify-center">
        <div className="w-4 h-3 rounded-sm bg-primary-foreground/30" />
      </div>
      <div className="flex-1">
        <div className="h-2 bg-foreground/[0.10] rounded-full w-[85%] mb-1.5" />
        <div className="h-1.5 bg-foreground/[0.06] rounded-full w-[60%]" />
      </div>
      <span className="text-[10px] font-bold text-accent bg-accent/10 w-6 h-6 rounded-full flex items-center justify-center border border-accent/20">✓</span>
    </div>
    {[
      { color: "#7ba3d9", label: "Wrong shade", dashed: false },
      { color: "#2563eb", label: "Wrong font", dashed: false, isFont: true },
      { color: "#2563eb", label: "Bad spacing", dashed: true },
    ].map((v, i) => (
      <div
        key={i}
        className={`bg-white rounded-xl p-2.5 flex items-center gap-2.5 ${v.dashed ? "border-[1.5px] border-dashed border-[#E85D5D]" : "border border-border"}`}
      >
        <div className="w-7 h-7 rounded shrink-0 flex items-center justify-center" style={{ backgroundColor: v.color }}>
          {v.isFont && <span className="text-primary-foreground text-[8px] font-serif italic font-bold">Aa</span>}
          {!v.isFont && <div className="w-3 h-2 rounded-sm bg-primary-foreground/30" />}
        </div>
        <div className="flex-1">
          <div className={`h-1.5 bg-foreground/[0.08] rounded-full w-[80%] mb-1 ${i === 2 ? "ml-4" : ""}`} />
          <div className={`h-1.5 bg-foreground/[0.05] rounded-full w-[55%] ${i === 2 ? "ml-2" : ""}`} />
        </div>
        <span className="text-[10px] font-bold text-[#E85D5D] w-5 h-5 rounded-full flex items-center justify-center bg-destructive/10 border border-destructive/20">✕</span>
      </div>
    ))}
  </div>
);

const problems = [
  {
    icon: Clock,
    title: "Hours lost searching",
    body: "Designers spend 2 to 3 hours per project hunting for inspiration across Pinterest, Dribbble, Behance, and dozens of bookmarks. That time adds up fast.",
    Mockup: SearchChaosMockup,
  },
  {
    icon: FolderOpen,
    title: "Scattered tools and tabs",
    body: "Moodboards in one app. Brand guidelines in another. Design references in a third. Your creative workflow is fragmented across too many tools.",
    Mockup: ScatteredToolsMockup,
  },
  {
    icon: Palette,
    title: "No brand consistency",
    body: "Without a quick way to audit designs against brand standards, small deviations slip through and erode brand trust over time.",
    Mockup: BrandDriftMockup,
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <BlurReveal as="h2" className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground text-center mb-20">
          The creative process is broken
        </BlurReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="bg-card rounded-[24px] border border-border overflow-hidden shadow-inspo transition-all duration-300 hover:shadow-inspo-lg hover:-translate-y-1"
            >
              <div className="px-4 pt-4 h-52 sm:h-56">
                <p.Mockup />
              </div>
              <div className="p-6 pt-5">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-4">
                  <p.icon size={18} className="text-foreground" />
                </div>
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
