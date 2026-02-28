import { motion } from "framer-motion";
import { Search, CheckCircle, AlertTriangle, Share2, Link as LinkIcon, MessageSquare, Globe, Cpu, CreditCard, BarChart3, Monitor, Tablet, Smartphone, Copy } from "lucide-react";

// Reusable mock image component with fallback
const MockupImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
    <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover rounded-lg ${className}`}
        onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=60&w=800";
        }}
    />
);

// 1. InspoSearchMockup: Expanded Dynamic Island state
export const InspoSearchMockup = () => (
    <div className="bg-white rounded-[32px] border border-border shadow-inspo p-8 max-w-[800px] w-full">
        <div className="bg-[#F5F5F7] rounded-full px-6 py-4 flex items-center gap-4 mb-8 border border-black/5 shadow-inner">
            <Search size={20} className="text-[#0A1A2F]/40" />
            <span className="text-base font-medium text-[#0A1A2F]">bold SaaS hero with 3D illustration and dark gradient</span>
        </div>
        <div className="flex gap-3 mb-10 overflow-x-auto no-scrollbar pb-2">
            {[
                { label: "SaaS", color: "bg-[#41F461]/10 text-[#41F461]" },
                { label: "Bold", color: "bg-black text-white" },
                { label: "Dark Mode", color: "bg-black text-white" },
                { label: "", color: "bg-gradient-to-r from-purple-500 to-blue-500 w-8 h-8 rounded-full" }
            ].map((pill, i) => (
                <div key={i} className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 ${pill.color}`}>
                    {pill.label}
                    {pill.label && <X size={12} />}
                </div>
            ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
                <div key={n} className="aspect-[3/4] rounded-2xl bg-[#F5F5F7] border border-black/5 overflow-hidden shadow-sm hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-slate-200 animate-pulse" />
                </div>
            ))}
        </div>
    </div>
);

// 2. FilterBarDetailMockup: Active filter pills & results
export const FilterBarDetailMockup = () => (
    <div className="bg-white rounded-[24px] border border-border shadow-inspo p-6 max-w-[600px] w-full overflow-hidden">
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
            {[
                { label: "Fintech", icon: <Globe size={12} /> },
                { label: "Minimalist", icon: <CreditCard size={12} /> },
                { label: "Dark Mode", icon: <Monitor size={12} /> },
                { label: "#41F461", color: "#41F461" },
                { label: "Inter", icon: <span className="text-[10px]">Aa</span> }
            ].map((pill, i) => (
                <div key={i} className="px-3 py-1.5 rounded-full bg-[#41F461]/5 border border-[#41F461]/20 text-[10px] font-black uppercase tracking-widest text-black flex items-center gap-2">
                    {pill.icon}{pill.color && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pill.color }} />}{pill.label}
                </div>
            ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
                <div key={n} className="aspect-[4/5] rounded-xl bg-black border border-white/5 overflow-hidden shadow-soft relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <div className="absolute bottom-3 left-3 w-4/5 h-1.5 bg-[#41F461] rounded-full opacity-40" />
                </div>
            ))}
        </div>
    </div>
);

// 3. BrandAuditHeroMockup: Split hero visual
export const BrandAuditHeroMockup = () => (
    <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Design Audit */}
        <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-slate-900 overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-pink-900/40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black text-4xl text-center px-6">NEW SEASON</div>
                <div className="absolute bottom-8 left-10 right-10 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white uppercase text-xs tracking-widest" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400 }}>Shop Now</div>

                {/* Annotations */}
                <div className="absolute top-[30%] left-[20%] w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-lg flex items-center justify-center text-white"><CheckCircle size={12} fill="currentColor" className="text-green-500" /></div>
                <div className="absolute bottom-[12%] right-[20%] w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-lg flex items-center justify-center text-white"><AlertTriangle size={12} fill="currentColor" className="text-amber-500" /></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white border-8 border-[#F5F5F7] shadow-xl flex flex-col items-center justify-center">
                <div className="text-3xl font-black inspo-gradient-text leading-none">88</div>
                <div className="text-[10px] font-black uppercase text-green-500 tracking-tighter">On Brand</div>
            </div>
        </div>

        {/* Right: Brand Scanner */}
        <div className="bg-[#F5F5F7] rounded-3xl p-8 border border-black/5 h-[320px] relative overflow-hidden flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white border border-border shadow-xl flex items-center justify-center relative z-10">
                <Globe className="text-[#008CFF]" size={32} />
            </div>
            {/* Node Lines */}
            <svg className="absolute inset-0 w-full h-full">
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#008CFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#008CFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#008CFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#008CFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
            </svg>
            {/* Nodes */}
            <div className="absolute top-[20%] left-[20%] p-2 bg-white rounded-lg shadow-md flex gap-1"><div className="w-3 h-3 rounded-full bg-blue-900" /><div className="w-3 h-3 rounded-full bg-indigo-500" /></div>
            <div className="absolute top-[20%] right-[20%] p-2 bg-white rounded-lg shadow-md font-bold text-[10px]">Inter</div>
            <div className="absolute bottom-[20%] right-[20%] p-2 bg-white rounded-lg shadow-md border-emerald-500 border flex gap-2 items-center"><Cpu size={12} className="text-emerald-500" /> <span className="text-[8px] font-bold">Vercel</span></div>
            <div className="absolute bottom-[20%] left-[20%] p-2 bg-white rounded-lg shadow-md text-[9px] font-black">$19 / $49</div>
        </div>
    </div>
);

// 4. AuditProcessMockup: 3-card horizontal flow
export const AuditProcessMockup = () => (
    <div className="flex flex-col md:flex-row gap-6 items-center w-full justify-center py-8">
        {[
            { label: "Guidelines", icon: <Copy size={16} />, content: "Brand guide.pdf", color: "bg-blue-50" },
            { label: "Design", icon: <Smartphone size={16} />, content: "Social Ad v2", color: "bg-purple-50" },
            { label: "Results", icon: <CheckCircle size={16} />, content: "Score: 78/100", color: "bg-green-50" }
        ].map((step, i) => (
            <div key={i} className="flex items-center gap-6">
                <div className="w-56 bg-white rounded-2xl border border-border shadow-soft p-6">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#0A1A2F]/40 mb-4 flex items-center gap-2">
                        {step.icon} {step.label}
                    </div>
                    <div className={`aspect-video rounded-xl ${step.color} border border-black/5 mb-3 flex items-center justify-center text-xs font-bold text-black/60`}>
                        {step.content}
                    </div>
                    {i === 2 && (
                        <div className="space-y-1.5 opacity-60">
                            {[1, 2].map(n => <div key={n} className="h-1 bg-slate-100 rounded-full w-full" />)}
                        </div>
                    )}
                </div>
                {i < 2 && <div className="hidden md:block w-8 h-px bg-border relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:border-t-4 after:border-t-transparent after:border-b-4 after:border-b-transparent after:border-l-4 after:border-l-border" />}
            </div>
        ))}
    </div>
);

// 5. CollaborationHeroMockup: Moodboard with active avatars
export const CollaborationHeroMockup = () => (
    <div className="bg-white rounded-[32px] border border-border shadow-inspo p-8 max-w-[900px] w-full relative">
        <div className="flex items-center justify-between mb-10">
            <div className="bg-[#F5F5F7] px-4 py-2 rounded-full border border-black/5 flex items-center gap-2">
                <LinkIcon size={14} className="text-[#0A1A2F]/40" />
                <span className="text-[10px] font-bold text-[#0A1A2F]/60">inspo.ai/share/q3-campaign</span>
            </div>
            <div className="flex -space-x-2">
                {[
                    { color: "ring-blue-500", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" },
                    { color: "ring-purple-500", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                    { color: "ring-green-500", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" }
                ].map((av, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full ring-2 ${av.color} bg-white border-2 border-white overflow-hidden relative`}>
                        <img src={av.img} alt="User" className="w-full h-full object-cover" />
                        {i === 0 && <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />}
                    </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[#F5F5F7] border-2 border-white flex items-center justify-center text-[10px] font-black text-[#0A1A2F]/40">+12</div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map(n => (
                <div key={n} className="aspect-square rounded-2xl bg-[#F5F5F7] border border-black/5 overflow-hidden shadow-soft relative group">
                    <div className="w-full h-full bg-slate-200 animate-pulse" />
                    {n === 1 && (
                        <div className="absolute top-2 right-2 flex gap-1">
                            <div className="bg-blue-500 text-[8px] font-black text-white px-2 py-0.5 rounded-full shadow-lg">Alex</div>
                            <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
                        </div>
                    )}
                </div>
            ))}
        </div>

        <div className="flex flex-wrap gap-3 items-center">
            {["#4A1D96", "#3B82F6", "#41F461", "#FFFFFF", "#F5F0EB", "#0A0A0A"].map(c => (
                <div key={c} className="w-8 h-8 rounded-full border border-black/10 shadow-inner" style={{ backgroundColor: c }} />
            ))}
            <div className="h-4 w-px bg-border mx-2" />
            <div className="text-xs font-black uppercase tracking-widest text-[#0A1A2F]/40">Cabinet Groatesk + Instrument Serif</div>
        </div>
    </div>
);

// 6. PublicMoodboardMockup: Clean presentation view
export const PublicMoodboardMockup = () => (
    <div className="bg-white rounded-[40px] border border-border shadow-inspo p-12 max-w-[800px] w-full">
        <h3 className="font-display text-4xl font-bold text-[#0A1A2F] mb-12 text-center">Q3 Campaign Direction</h3>
        <div className="grid grid-cols-2 gap-8 mb-16">
            {[1, 2, 3, 4].map(n => (
                <div key={n} className="aspect-video rounded-3xl bg-[#F5F5F7] border border-black/5 shadow-soft overflow-hidden">
                    <div className="w-full h-full bg-orange-50 animate-pulse flex items-center justify-center">
                        {n === 1 && <div className="w-20 h-2 bg-orange-200 rounded-full" />}
                    </div>
                </div>
            ))}
        </div>
        <div className="flex gap-4 mb-20">
            {["#FF6B5A", "#F59E0B", "#FFF8F0", "#8B5E3C", "#2D2D2D"].map(c => (
                <div key={c} className="flex-1 aspect-square rounded-2xl border border-black/5 shadow-soft" style={{ backgroundColor: c }} />
            ))}
        </div>
        <div className="border-t border-border pt-8 flex items-center justify-between opacity-40">
            <div className="flex items-center gap-2">
                <img src="/favicon.ico" alt="Inspo" className="w-4 h-4 grayscale" />
                <span className="text-[10px] font-black uppercase tracking-widest">Shared via Inspo AI</span>
            </div>
            <div className="text-[10px] font-bold">Curated by Sarah Chen</div>
        </div>
    </div>
);

// 7. BrandScannerHeroMockup: Full radial intelligence node graph
export const BrandScannerHeroMockup = () => (
    <div className="bg-white rounded-[40px] border border-border shadow-inspo-lg p-16 max-w-[1000px] w-full min-h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F5F5F7_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-96 h-12 bg-white rounded-full border border-border shadow-inspo flex items-center gap-4 px-6 relative z-20">
            <Globe className="text-[#008CFF]" size={20} />
            <span className="text-sm font-medium text-black/60">www.competitor.com</span>
            <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#41F461] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#41F461]">Scanning...</span>
            </div>
        </div>

        <div className="mt-20 flex items-center justify-center w-full h-full min-h-[400px]">
            <div className="relative">
                {/* Central Site Node */}
                <div className="w-48 h-48 rounded-[32px] bg-white border-4 border-[#008CFF] shadow-2xl relative z-10 flex items-center justify-center p-1 overflow-hidden">
                    <div className="w-full h-full bg-slate-900 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-4 left-4 right-4 h-2 bg-white/20 rounded-full" />
                        <div className="absolute bottom-4 left-4 right-4 h-6 bg-[#41F461] rounded-full" />
                    </div>
                    <div className="absolute inset-0 bg-[#008CFF]/5 animate-ping rounded-[32px] -z-10" />
                </div>

                {/* Satellite Nodes */}
                {[
                    { label: "Colors", icon: <CreditCard size={18} />, pos: "top-[-50px] left-[-160px]" },
                    { label: "Fonts", icon: <span className="text-sm">Aa</span>, pos: "top-[-100px] left-[50%] -translate-x-1/2" },
                    { label: "Tech", icon: <Cpu size={18} />, pos: "top-[-50px] right-[-160px]" },
                    { label: "Pricing", icon: <CreditCard size={18} />, pos: "bottom-[-50px] left-[-160px]" },
                    { label: "SEO", icon: <BarChart3 size={18} />, pos: "bottom-[-100px] left-[50%] -translate-x-1/2" },
                    { label: "Assets", icon: <Copy size={18} />, pos: "bottom-[-50px] right-[-160px]" }
                ].map((node, i) => (
                    <div key={i} className={`absolute ${node.pos} group relative z-20`}>
                        <div className="w-16 h-16 rounded-full bg-white border border-border shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative z-10">
                            {node.icon}
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translateX-1/2 bg-black text-white px-2 py-0.5 rounded text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{node.label}</div>
                        {/* Connecting Line (simulated with CSS instead of SVG for simplicity in scaffolding) */}
                        <div className="absolute top-1/2 left-1/2 w-40 h-px bg-border -z-10 origin-left" style={{ transform: `rotate(${i * 60}deg)` }} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// 8. ColorExtractionMockup: Detailed color card
export const ColorExtractionMockup = () => (
    <div className="bg-white rounded-[24px] border border-border shadow-inspo p-8 max-w-[500px] w-full">
        <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-black text-[#0A1A2F]">Color Palette</h4>
            <div className="bg-slate-50 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#0A1A2F]/40 border border-black/5">Detected Oct 2025</div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {[
                { label: "Hero background", hex: "#312E81", name: "Deep Indigo" },
                { label: "CTA buttons", hex: "#7C3AED", name: "Vivid Purple" },
                { label: "Accent highlights", hex: "#EC4899", name: "Hot Pink" },
                { label: "Links and hover states", hex: "#06B6D4", name: "Electric Teal" }
            ].map(color => (
                <div key={color.hex} className="flex items-center gap-4">
                    <div className="w-16 h-12 rounded-xl border border-black/5 shadow-soft shrink-0" style={{ backgroundColor: color.hex }} />
                    <div className="flex flex-col">
                        <div className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-0.5">{color.label}</div>
                        <div className="text-sm font-bold text-black">{color.name}</div>
                        <div className="text-[11px] font-mono text-black/60">{color.hex}</div>
                    </div>
                </div>
            ))}
        </div>
        <button className="w-full mt-10 p-4 rounded-2xl inspo-gradient-bg text-white text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 active:scale-95 transition-transform" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400 }}>Save to Moodboard</button>
    </div>
);

// 9. CreatorStudioHeroMockup: Chat + Live Preview split panel
export const CreatorStudioHeroMockup = () => (
    <div className="bg-[#111111] rounded-[40px] border border-white/5 shadow-2xl flex max-w-[1100px] w-full h-[600px] overflow-hidden">
        {/* Left Panel: Chat */}
        <div className="w-[35%] border-r border-white/5 flex flex-col p-6">
            <div className="flex-1 space-y-6 pt-10">
                <div className="flex justify-end pr-4">
                    <div className="max-w-[85%] bg-white rounded-2xl rounded-tr-none p-4 text-xs font-bold text-black shadow-xl">
                        Design a pricing page with 3 tiers, dark theme, gradient accents, and a highlighted Pro plan.
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="max-w-[90%] bg-white/5 rounded-2xl rounded-tl-none p-4 text-[11px] leading-relaxed text-white/60 border border-white/5">
                        Here's your pricing page. I used a deep navy gradient with purple accents and highlighted the Pro tier with a glowing border.
                    </div>
                </div>
            </div>
            <div className="mt-auto h-12 bg-white/5 rounded-full border border-white/10 flex items-center px-4 gap-3">
                <div className="w-full h-4 bg-white/5 rounded-full" />
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-bold">↑</div>
            </div>
        </div>

        {/* Right Panel: Live Preview */}
        <div className="flex-1 flex flex-col bg-white">
            <div className="h-14 border-b border-border flex items-center justify-between px-6">
                <div className="flex gap-4">
                    {["Desktop", "Tablet", "Mobile"].map(d => (
                        <div key={d} className={`text-[10px] font-black uppercase tracking-widest cursor-pointer ${d === 'Desktop' ? 'text-[#008CFF] border-b-2 border-[#008CFF] pb-1' : 'text-black/40'}`}>
                            {d}
                        </div>
                    ))}
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-black/40"><Copy size={14} /></div>
                    <div className="px-4 h-8 rounded-lg bg-black text-white text-[10px] flex items-center uppercase" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400 }}>EXPORT</div>
                </div>
            </div>
            <div className="flex-1 bg-slate-50 p-8 flex items-center justify-center">
                <div className="w-full max-w-lg aspect-video bg-[#0A0A0A] rounded-2xl shadow-2xl relative overflow-hidden flex items-center justify-center gap-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent" />
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`w-24 h-36 rounded-xl bg-white/5 border border-white/10 relative ${i === 2 ? 'scale-110 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] z-10' : ''}`}>
                            <div className="p-3">
                                <div className={`w-8 h-1 rounded-full mb-1 ${i === 2 ? 'bg-purple-500' : 'bg-white/20'}`} />
                                <div className="w-4 h-3 rounded-full bg-white/10 mb-6" />
                                <div className="space-y-1">
                                    {[1, 2, 3].map(n => <div key={n} className="h-0.5 bg-white/5 w-full" />)}
                                </div>
                            </div>
                            <div className="absolute bottom-3 left-3 right-3 h-5 bg-white/10 rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// 10. ResponsivePreviewMockup: Tablet frame preview
export const ResponsivePreviewMockup = () => (
    <div className="bg-[#111111] p-12 rounded-[48px] border border-white/10 shadow-inspo-lg max-w-[800px] w-full">
        <div className="flex justify-center mb-10">
            <div className="flex gap-8">
                {["Desktop", "Tablet", "Mobile"].map(d => (
                    <div key={d} className={`text-[11px] font-black uppercase tracking-widest cursor-pointer ${d === 'Tablet' ? 'text-[#41F461] border-b-2 border-[#41F461] pb-1' : 'text-white/40'}`}>
                        {d}
                    </div>
                ))}
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-[500px] h-[650px] bg-white rounded-[40px] border-[12px] border-black shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl" />
                <div className="p-8 h-full bg-[#0A0A0A] flex flex-col gap-6">
                    <div className="w-20 h-2 bg-white/10 rounded-full" />
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`w-full h-32 rounded-2xl bg-white/5 border border-white/10 relative ${i === 2 ? 'border-purple-500 bg-purple-500/5' : ''}`}>
                            <div className="p-6">
                                <div className="w-12 h-1.5 bg-white/20 rounded-full mb-2" />
                                <div className="w-8 h-3 bg-white/10 mb-8" />
                                <div className="flex gap-2 items-center">
                                    <div className="w-3 h-3 rounded-full bg-white/10" />
                                    <div className="w-20 h-1 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const X = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);
