import { motion } from "framer-motion";
import { Search, CheckCircle, AlertTriangle, Share2, Link as LinkIcon, MessageSquare } from "lucide-react";

// Performance optimized imports
// General UI assets
import fintechLogin from "@/assets/visuals/fintech-login.png";
import onboardingIllus from "@/assets/visuals/onboarding-illus.png";
import darkDashboard from "@/assets/visuals/dark-dashboard.png";
import signupForm from "@/assets/visuals/signup-form.png";
import walletBalance from "@/assets/visuals/wallet-balance.png";
import progressDots from "@/assets/visuals/progress-dots.png";
import sneakerProduct from "@/assets/visuals/sneaker-product.png";
import checkoutFlow from "@/assets/visuals/checkout-flow.png";
import orderConfirm from "@/assets/visuals/order-confirm.png";
import saasHero from "@/assets/visuals/saas-hero.png";
import pricingTable from "@/assets/visuals/pricing-table.png";
import testimonialSectionImg from "@/assets/visuals/testimonial-section.png";
import footerDesignImg from "@/assets/visuals/footer-design.png";
import techBannerImg from "@/assets/visuals/tech-banner.png";

// Marketing / Brand Team specific assets
import brandInstaCompliant from "@/assets/visuals/brand-insta-compliant.png";
import brandInstaDrift from "@/assets/visuals/brand-insta-drift.png";
import brandLinkedinDrift from "@/assets/visuals/brand-linkedin-drift.png";
import brandScannerCentral from "@/assets/visuals/brand-scanner-central.png";

import marketCyberNeon from "@/assets/visuals/market-cyber-neon.png";
import marketSoftOrganic from "@/assets/visuals/market-soft-organic.png";
import marketBrutalist from "@/assets/visuals/market-brutalist.png";
import marketSaasHero from "@/assets/visuals/market-saas-hero.png";
import marketCohesiveFeatures from "@/assets/visuals/market-cohesive-features.png";
import marketCohesivePricing from "@/assets/visuals/market-cohesive-pricing.png";
import marketCohesiveCTA from "@/assets/visuals/market-cohesive-cta.png";

import campaignStory from "@/assets/visuals/campaign-story.png";
import campaignLanding from "@/assets/visuals/campaign-landing.png";
import campaignEmail from "@/assets/visuals/campaign-email.png";
import campaignBillboard from "@/assets/visuals/campaign-billboard.png";
import campaignPush from "@/assets/visuals/campaign-push.png";

import agencyFintechHero from "@/assets/visuals/agency-fintech-hero.png";
import agencyMobileBanking from "@/assets/visuals/agency-mobile-banking.png";
import agencyCorporateAbout from "@/assets/visuals/agency-corporate-about.png";
import agencyPricingCompare from "@/assets/visuals/agency-pricing-compare.png";

const MockupImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
    <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover rounded-lg ${className}`}
        onError={(e) => {
            // Fallback for missing images during generation retry
            e.currentTarget.src = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=60&w=800";
        }}
    />
);

// 1. SearchMockup: Fintech specific masonry grid
export const SearchMockup = () => (
    <div className="bg-white rounded-[24px] border border-border shadow-inspo p-6 max-w-[500px] w-full">
        <div className="bg-[#F5F5F7] rounded-full px-4 py-2.5 flex items-center gap-3 mb-6 border border-black/5">
            <Search size={16} className="text-[#0A1A2F]/40" />
            <span className="text-sm font-medium text-[#0A1A2F]">fintech mobile app inspiration</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
            {[
                { src: fintechLogin, alt: "Fintech Login" },
                { src: onboardingIllus, alt: "Onboarding Illustration" },
                { src: darkDashboard, alt: "Dark Dashboard" },
                { src: signupForm, alt: "Signup Form" },
                { src: walletBalance, alt: "Wallet Balance" },
                { src: progressDots, alt: "Progress Dots" }
            ].map((img, i) => (
                <div key={i} className="aspect-[3/4] rounded-xl bg-[#F5F5F7] border border-black/5 overflow-hidden">
                    <MockupImage src={img.src} alt={img.alt} className="hover:scale-110 transition-transform duration-500" />
                </div>
            ))}
        </div>
    </div>
);

// 2. AISuggestionsMockup: E-commerce specific results
export const AISuggestionsMockup = () => (
    <div className="bg-white rounded-[24px] border border-border shadow-inspo overflow-hidden max-w-[600px] w-full flex">
        <div className="w-2/3 border-r border-border p-5">
            <div className="bg-[#F5F5F7] rounded-xl p-3 mb-4 text-[13px] font-medium text-[#0A1A2F]/80 italic">
                "Clean e-commerce checkout with rounded corners and green accents"
            </div>
            <div className="flex flex-col gap-3">
                {[
                    { src: sneakerProduct, alt: "Sneaker Product Page" },
                    { src: checkoutFlow, alt: "Checkout Flow" },
                    { src: orderConfirm, alt: "Order Confirmation" }
                ].map((img, i) => (
                    <div key={i} className="h-32 rounded-xl bg-[#F5F5F7] border border-black/5 overflow-hidden shadow-sm">
                        <MockupImage src={img.src} alt={img.alt} />
                    </div>
                ))}
            </div>
        </div>
        <div className="w-1/3 p-4 bg-[#FAFAFB] flex flex-col gap-3">
            <h4 className="text-[11px] font-bold text-[#0A1A2F]/40 uppercase tracking-wider mb-2">AI Suggestions</h4>
            <div className="flex flex-col gap-2">
                {["e-commerce product detail", "minimal shopping cart", "delivery tracking status"].map((text, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border border-black/5 text-[10px] font-semibold text-[#0A1A2F]/70 shadow-sm leading-tight hover:border-[#008CFF] transition-colors cursor-default">
                        {text}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// 3. MoodboardPreviewMockup: Web section references
export const MoodboardPreviewMockup = () => (
    <div className="bg-white rounded-[24px] border border-border shadow-inspo p-6 max-w-[500px] w-full flex flex-col gap-6">
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#0A1A2F]">Q3 Campaign Direction</h3>
            <div className="flex items-center gap-1.5 opacity-60">
                <LinkIcon size={12} />
                <span className="text-[10px] font-bold uppercase tracking-wider">inspoai.live/share/q3-vibe</span>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {[
                { src: saasHero, alt: "SaaS Hero" },
                { src: pricingTable, alt: "Pricing Table" },
                { src: testimonialSectionImg, alt: "Testimonial Section" },
                { src: footerDesignImg, alt: "Footer Design" }
            ].map((img, i) => (
                <div key={i} className="aspect-video rounded-xl bg-[#F5F5F7] border border-black/5 overflow-hidden shadow-sm">
                    <MockupImage src={img.src} alt={img.alt} />
                </div>
            ))}
        </div>
    </div>
);

// 4. DesignAuditMockup: Banner audit with specific red annotations
export const DesignAuditMockup = ({ score = 91 }: { score?: number }) => (
    <div className="bg-white rounded-[24px] border border-border shadow-inspo overflow-hidden max-w-[650px] w-full flex h-[350px]">
        <div className="w-[60%] border-r border-border bg-[#F5F5F7] p-4 relative">
            <div className="w-full h-full rounded-xl bg-white shadow-lg overflow-hidden relative">
                <MockupImage src={techBannerImg} alt="Banner Design" />

                {/* Annotations */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Color deviation on CTA */}
                    <div className="absolute bottom-[20%] right-[30%] group">
                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.2)] animate-pulse" />
                        <div className="absolute top-[-10px] right-[-100px] whitespace-nowrap bg-red-500 text-white text-[9px] px-2 py-1 rounded font-bold">⚠️ Color Deviation</div>
                        <div className="absolute top-2 right-0 w-[80px] h-[1.5px] bg-red-500 origin-right -rotate-15" />
                    </div>

                    {/* Font weight issue on Headline */}
                    <div className="absolute top-[35%] left-[40%] group">
                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.2)] animate-pulse" />
                        <div className="absolute bottom-[-10px] right-[-100px] whitespace-nowrap bg-red-500 text-white text-[9px] px-2 py-1 rounded font-bold">⚠️ Font Weight</div>
                        <div className="absolute top-2 right-0 w-[60px] h-[1.5px] bg-red-500 origin-right rotate-45" />
                    </div>

                    {/* Logo spacing */}
                    <div className="absolute top-[10%] left-[8%] group">
                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.2)] animate-pulse" />
                        <div className="absolute top-[30px] left-0 whitespace-nowrap bg-red-500 text-white text-[9px] px-2 py-1 rounded font-bold">⚠️ Spacing violation</div>
                        <div className="absolute bottom-0 left-2 w-[1.5px] h-[30px] bg-red-500" />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[40%] p-6 bg-[#FAFAFB] flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
                <div className="relative mb-4">
                    <svg width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#E8E8ED" strokeWidth="8" />
                        <motion.circle
                            cx="50" cy="50" r="45" fill="none" stroke="url(#auditGrad)" strokeWidth="8" strokeLinecap="round"
                            strokeDasharray={`${(score / 100) * 2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <defs><linearGradient id="auditGrad" x1="0" y1="0" x2="100" y2="0"><stop stopColor="#008CFF" /><stop offset="1" stopColor="#41F661" /></linearGradient></defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-black text-[#0A1A2F] italic tracking-tighter">{score}</span>
                    </div>
                </div>
                <div className="bg-[#FF4B4B]/10 text-[#FF4B4B] text-[10px] font-heavy px-4 py-1.5 rounded-full uppercase tracking-[0.1em] border border-[#FF4B4B]/10">Action Required</div>
            </div>

            <div className="w-full flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#0A1A2F]/60">
                    <span>Branding DNA Match</span>
                    <span className="text-[#008CFF]">76%</span>
                </div>
                <div className="w-full h-1.5 bg-[#E8E8ED] rounded-full overflow-hidden">
                    <motion.div className="h-full bg-[#008CFF]" initial={{ width: 0 }} animate={{ width: "76%" }} transition={{ duration: 1, delay: 0.5 }} />
                </div>
                <button className="w-full mt-4 bg-black text-white text-[11px] py-2.5 rounded-lg hover:bg-[#008CFF] transition-all uppercase" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400 }}>Fix Violations</button>
            </div>
        </div>
    </div>
);

// 5. BrandDriftMockup: Comparison cards with checkmarks/X
export const BrandDriftMockup = () => (
    <div className="bg-white/40 backdrop-blur-sm rounded-[32px] p-8 flex flex-col items-center gap-6 max-w-[600px] w-full">
        <div className="flex gap-4 w-full">
            {[
                { type: "pass", label: "Correct logo spacing", img: saasHero },
                { type: "warn", label: "Off-brand blue tint", img: sneakerProduct },
                { type: "fail", label: "Unapproved font-weight", img: techBannerImg }
            ].map((item, i) => (
                <div key={i} className="flex-1 bg-white rounded-2xl border border-black/5 p-4 shadow-sm relative group hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-[3/4] rounded-lg bg-[#F5F5F7] mb-3 overflow-hidden">
                        <MockupImage src={item.img} alt={item.label} className={i !== 0 ? "grayscale opacity-50 blur-[1px]" : ""} />
                    </div>
                    <div className="flex items-center justify-center">
                        {item.type === "pass" && <div className="w-6 h-6 rounded-full bg-[#41F661] flex items-center justify-center text-white"><CheckCircle size={14} /></div>}
                        {item.type === "warn" && <div className="w-6 h-6 rounded-full bg-[#FFB800] flex items-center justify-center text-white"><AlertTriangle size={14} /></div>}
                        {item.type === "fail" && <div className="w-6 h-6 rounded-full bg-[#FF4B4B] flex items-center justify-center text-white"><span className="text-xs font-bold leading-none">✕</span></div>}
                    </div>
                </div>
            ))}
        </div>
        <div className="bg-[#FF4B4B]/10 text-[#FF4B4B] text-[11px] font-black px-8 py-2.5 rounded-full uppercase tracking-widest border border-red-500/10 shadow-sm">
            Critical Brand Drift Detected
        </div>
    </div>
);

// 6. BrandScannerMockup: Node graph for competitor brand DNA
export const BrandScannerMockup = () => (
    <div className="bg-white rounded-[24px] border border-border shadow-inspo p-8 max-w-[600px] w-full h-[320px] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <svg width="100%" height="100%" className="absolute inset-0">
                <motion.line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#E8E8ED" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />
                <motion.line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#E8E8ED" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 }} />
                <motion.line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#E8E8ED" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 }} />
                <motion.line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#E8E8ED" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
                <motion.line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#E8E8ED" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0 }} />
            </svg>

            {/* Central Node */}
            <div className="relative z-10 w-28 h-28 rounded-2xl bg-white border-2 border-[#008CFF] shadow-[0_0_30px_rgba(0,140,255,0.2)] flex items-center justify-center overflow-hidden">
                <MockupImage src={brandScannerCentral} alt="Competitor screenshot" />
            </div>

            {/* Sub-node 1: Team Photos */}
            <div className="absolute top-[10%] left-[18%] group">
                <div className="w-14 h-14 rounded-full bg-white border border-border shadow-xl p-0.5 overflow-hidden group-hover:scale-110 transition-transform">
                    <MockupImage src={agencyCorporateAbout} alt="Team node" className="rounded-full" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translateX-1/2 bg-white px-2 py-0.5 rounded-full border border-black/5 text-[8px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Team Photos</div>
            </div>

            {/* Sub-node 2: Typography */}
            <div className="absolute top-[10%] right-[18%] group">
                <div className="w-14 h-14 rounded-full bg-white border border-border shadow-xl flex items-center justify-center font-black text-lg text-[#0A1A2F]/40 group-hover:scale-110 transition-transform">
                    Aa
                </div>
                <div className="absolute -bottom-2 left-1/2 -translateX-1/2 bg-white px-2 py-0.5 rounded-full border border-black/5 text-[8px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Font DNA</div>
            </div>

            {/* Sub-node 3: Color Clusters */}
            <div className="absolute bottom-[10%] left-[18%] group">
                <div className="w-14 h-14 rounded-full bg-white border border-border shadow-xl flex items-center justify-center gap-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-4 h-4 rounded-full bg-[#1A2B5C]" />
                    <div className="w-4 h-4 rounded-full bg-[#41F661]" />
                    <div className="w-4 h-4 rounded-full bg-[#F5F5F7]" />
                </div>
                <div className="absolute -top-2 left-1/2 -translateX-1/2 bg-white px-2 py-0.5 rounded-full border border-black/5 text-[8px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Colors</div>
            </div>

            {/* Sub-node 4: Mobile App */}
            <div className="absolute bottom-[10%] right-[18%] group">
                <div className="w-14 h-14 rounded-full bg-white border border-border shadow-xl p-0.5 overflow-hidden group-hover:scale-110 transition-transform">
                    <MockupImage src={agencyMobileBanking} alt="Mobile node" className="rounded-full" />
                </div>
                <div className="absolute -top-2 left-1/2 -translateX-1/2 bg-white px-2 py-0.5 rounded-full border border-black/5 text-[8px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Mobile UI</div>
            </div>

            {/* Sub-node 5: Dashboard */}
            <div className="absolute top-[45%] right-[5%] group">
                <div className="w-12 h-12 rounded-full bg-white border border-border shadow-xl p-0.5 overflow-hidden group-hover:scale-110 transition-transform">
                    <MockupImage src={darkDashboard} alt="Dash node" className="rounded-full" />
                </div>
            </div>
        </div>
    </div>
);

// 7. CollaborativeMockup: Shared moodboard with comments
export const CollaborativeMockup = () => (
    <div className="bg-white rounded-[24px] border border-border shadow-inspo overflow-hidden max-w-[600px] w-full">
        <div className="bg-[#FAFAFB] border-b border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />)}
                </div>
                <span className="text-[11px] font-bold text-[#0A1A2F]/60 tracking-tight">Active Designers (4)</span>
            </div>
            <div className="bg-[#008CFF] text-white px-5 py-2 rounded-full text-[11px] uppercase tracking-widest transition-transform hover:scale-105" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400 }}>Invite</div>
        </div>
        <div className="p-6">
            <div className="grid grid-cols-4 gap-3 mb-8">
                {[sneakerProduct, saasHero, pricingTable, progressDots].map((src, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-[#F5F5F7] border border-black/5 overflow-hidden shadow-sm">
                        <MockupImage src={src} alt="Collaborative item" />
                    </div>
                ))}
            </div>
            <div className="space-y-4">
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-slate-300 shrink-0" />
                    <div className="bg-[#F5F5F7] rounded-2xl rounded-tl-none p-4 shadow-sm text-[12px] font-medium text-[#0A1A2F]/80 leading-relaxed">
                        The sneaker product page layout feels perfect for this brand. Should we use the green accents globally?
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// 8. CampaignBriefMockup: Slack vs Inspo AI comparison
export const CampaignBriefMockup = () => (
    <div className="w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A1A2F]/30 bg-black/5 px-4 py-1.5 rounded-full self-start">Historical Pain</div>
            <div className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#4A154B] flex items-center justify-center text-white font-black text-lg">S</div>
                    <div className="flex-1">
                        <div className="text-[12px] font-black text-[#0A1A2F] mb-1">Marketing #general</div>
                        <div className="text-[13px] text-[#0A1A2F] leading-relaxed opacity-70 italic">"Hey team, thinking of a 'modern tech' vibe for the new landing page. Like... clean but professional? Blue maybe? You know what I mean."</div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 opacity-20 grayscale scale-95 origin-bottom">
                    {[1, 2, 3].map(i => <div key={i} className="aspect-square bg-slate-200 rounded-xl" />)}
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#008CFF] bg-[#008CFF]/5 px-4 py-1.5 rounded-full self-start">The Vision</div>
            <div className="bg-white rounded-[40px] border-2 border-[#008CFF] p-1 shadow-[0_20px_60px_rgba(0,140,255,0.15)] overflow-hidden">
                <div className="bg-white p-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-[4/5] rounded-2xl bg-[#F5F5F7] overflow-hidden shadow-sm">
                            <MockupImage src={saasHero} alt="Vision 1" />
                        </div>
                        <div className="aspect-[4/5] rounded-2xl bg-[#F5F5F7] overflow-hidden shadow-sm">
                            <MockupImage src={pricingTable} alt="Vision 2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- NEW SPECIFIC COMPONENTS FOR BRAND, MARKETING, AGENCIES ---

// 9. BrandTeamsHeroCards: 3 asset cards showing brand deviation
export const BrandTeamsHeroCards = () => (
    <div className="flex gap-4 max-w-[800px] w-full items-end pb-4 overflow-x-auto no-scrollbar">
        {/* Card 1: Compliant */}
        <div className="min-w-[240px] flex-1 bg-white rounded-3xl border border-black/5 p-4 shadow-sm relative group">
            <div className="aspect-[9/16] rounded-2xl overflow-hidden mb-3">
                <MockupImage src={brandInstaCompliant} alt="Compliant Design" />
            </div>
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white border-4 border-white shadow-lg">
                <CheckCircle size={18} />
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-green-600/80">Brand Compliant</div>
        </div>

        {/* Card 2: Color Drift */}
        <div className="min-w-[240px] flex-1 bg-white rounded-3xl border border-black/5 p-4 shadow-sm relative group scale-95 opacity-80">
            <div className="aspect-[9/16] rounded-2xl overflow-hidden mb-3">
                <MockupImage src={brandInstaDrift} alt="Color Drift" />
            </div>
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white border-4 border-white shadow-lg">
                <AlertTriangle size={18} />
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-amber-600/80">Subtle Color Drift</div>
        </div>

        {/* Card 3: Font Drift */}
        <div className="min-w-[300px] flex-[1.5] bg-white rounded-3xl border border-black/5 p-4 shadow-sm relative group scale-90 opacity-60">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-3">
                <MockupImage src={brandLinkedinDrift} alt="Font Drift" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-red-500/20 backdrop-blur-sm flex items-center justify-center text-red-500 border-2 border-red-500/50">
                <span className="text-2xl font-black">✕</span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-red-600/80">Font Violation Detected</div>
        </div>
    </div>
);

// 10. MarketingSplitComparison: "What You Said" vs "What You Could Have Shown"
export const MarketingSplitComparison = () => (
    <div className="w-full grid lg:grid-cols-2 gap-12 items-stretch">
        {/* Left: Chaos / Subjective */}
        <div className="flex flex-col gap-6">
            <div className="bg-white rounded-[24px] border border-border shadow-inspo p-6 relative overflow-hidden group">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4A154B] flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">S</div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[13px] font-black text-black">Marketing Team</span>
                            <span className="text-[11px] font-bold text-black/30 tracking-tight">#general</span>
                        </div>
                        <div className="text-[13px] text-black/60 italic leading-snug">
                            "Hey team, thinking of a 'modern tech' vibe for the new landing page. Like... clean but professional? Blue maybe? You know what I mean."
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#FF4B4B] text-[9px] font-black text-white uppercase tracking-widest rounded-bl-xl">Chaos</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {[marketCyberNeon, marketSoftOrganic, marketBrutalist].map((src, i) => (
                    <div key={i} className="aspect-[3/4] rounded-2xl bg-[#F5F5F7] border border-black/5 overflow-hidden shadow-sm hover:-translate-y-2 transition-transform duration-500">
                        <MockupImage src={src} alt={`Interpretation ${i + 1}`} />
                    </div>
                ))}
            </div>
            <p className="text-[12px] font-medium text-black/50 leading-relaxed text-center px-8">3 wildly different brands. All "modern and clean" according to someone.</p>
        </div>

        {/* Right: Coherent / Verified */}
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#008CFF] bg-[#008CFF]/5 px-4 py-1.5 rounded-full">Visual Coherence</div>
                <div className="text-[13px] font-bold text-[#008CFF] italic">"Based on our Q3 Visual Brief"</div>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1">
                {[marketSaasHero, marketCohesiveFeatures, marketCohesivePricing, marketCohesiveCTA].map((src, i) => (
                    <div key={i} className="rounded-2xl bg-white border-2 border-[#008CFF]/10 overflow-hidden shadow-xl shadow-blue-500/5 relative group">
                        <MockupImage src={src} alt={`Reference ${i + 1}`} />
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#008CFF] flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                            <CheckCircle size={12} />
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-[12px] font-bold text-[#008CFF] leading-relaxed text-center px-8">One shared visual language. Zero ambiguity.</p>
        </div>
    </div>
);

// 11. Custom Moodboard Campaign Visuals
export const CampaignSharedMoodboard = () => (
    <div className="w-full p-8 bg-white/40 backdrop-blur-xl rounded-[40px] border border-white shadow-inspo">
        <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-black text-[#3C2415] tracking-tight">Summer Campaign '25</h3>
                <div className="flex gap-2">
                    {["#FF6B5A", "#F59E0B", "#FFF8F0", "#3C2415"].map(c => (
                        <div key={c} className="w-4 h-4 rounded-full border border-black/5" style={{ backgroundColor: c }} />
                    ))}
                </div>
            </div>
            <div className="bg-[#FF6B5A] text-white px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/20">Active Campaign</div>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {[
                { src: campaignStory, aspect: "aspect-[9/16]" },
                { src: campaignLanding, aspect: "aspect-video" },
                { src: campaignEmail, aspect: "aspect-[3/4]" },
                { src: campaignBillboard, aspect: "aspect-[16/9]" },
                { src: campaignPush, aspect: "aspect-[2/1]" }
            ].map((img, i) => (
                <div key={i} className={`break-inside-avoid rounded-[20px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-500 ${img.aspect}`}>
                    <MockupImage src={img.src} alt={`Campaign ${i + 1}`} />
                </div>
            ))}
        </div>
    </div>
);

// 12. PitchPrepFinancialMoodboard: Agency focused
export const PitchPrepFinancialMoodboard = () => (
    <div className="grid grid-cols-2 gap-4 max-w-[700px] w-full">
        {[
            { src: agencyFintechHero, title: "Deep Navy Strategy", tag: "Hero" },
            { src: agencyMobileBanking, title: "Gold Accents", tag: "App" },
            { src: agencyCorporateAbout, title: "Editorial Layout", tag: "About" },
            { src: agencyPricingCompare, title: "Glassmorphism", tag: "Pricing" }
        ].map((item, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden border border-border shadow-inspo bg-white">
                <div className="aspect-video">
                    <MockupImage src={item.src} alt={item.title} />
                </div>
                <div className="p-4 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">{item.tag}</span>
                        <span className="text-[12px] font-bold text-black">{item.title}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#008CFF] group-hover:text-white transition-colors">
                        <Share2 size={14} />
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export const StepWorkflowIcon = ({ step }: { step: number }) => (
    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shadow-lg">
        {step}
    </div>
);
