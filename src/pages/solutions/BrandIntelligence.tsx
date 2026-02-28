import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { BrandAuditHeroMockup, AuditProcessMockup } from "@/components/SolutionVisuals";
import BlurReveal from "@/components/BlurReveal";
import { CheckCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

const BrandIntelligence = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="Brand Intelligence Platform | AI Brand Audit & Competitor Scanner | Inspo AI"
                description="Audit designs for brand compliance with AI scoring. Scan competitor websites to extract colors, fonts, tech stack, and brand DNA in 60 seconds. Build brand intelligence workflows."
                keywords="brand intelligence platform, brand audit tool, brand compliance checker, brand DNA scanner, brand consistency tool, design QA automation, competitor brand analysis, brand guideline enforcement, visual identity audit, brand monitoring tool"
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How accurate is the AI design audit?", "acceptedAnswer": { "@type": "Answer", "text": "The audit is highly accurate for technical specs like color hex codes, font families, and spacing. For subjective elements, it provides 'suggestions' based on your guidelines while giving you a definitive overall brand compliance score." } },
                        { "@type": "Question", "name": "Can I upload my own brand guidelines?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can upload your brand book as a PDF or image, or enter your guidelines manually into the platform. Once saved, every design you audit will be checked against these specific rules." } },
                        { "@type": "Question", "name": "Does the Brand Scanner work on password-protected sites?", "acceptedAnswer": { "@type": "Answer", "text": "Currently, the Brand Scanner can only analyze publicly accessible URLs. For password-protected or staging environments, we recommend uploading screenshots to the AI Design Audit tool instead." } }
                    ]
                }}
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40 overflow-hidden">
                <div className="container-narrow flex flex-col items-center text-center">
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        Brand consistency <br />
                        <span className="inspo-gradient-text">measured, not guessed.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        Brand intelligence means knowing exactly where your brand stands and where your competitors are heading. Inspo AI gives you two tools for this: an AI design audit and a brand scanner.
                    </motion.p>
                    <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white text-base px-10 py-4 rounded-pill transition-all mb-20 shadow-lg" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}>
                        GET INSPIRED
                    </a>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: "spring", damping: 20 }}
                        className="w-full flex justify-center"
                    >
                        <BrandAuditHeroMockup />
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">Two blind spots every brand team has</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed">
                            <p>The first blind spot is <span className="text-black font-bold">internal</span>. Designs go out slightly off-brand—the wrong blue, an unapproved font weight, inconsistent spacing—and nobody catches it until it is too late.</p>
                            <p>The second blind spot is <span className="text-black font-bold">external</span>. Competitors redesign, update palettes, shift messaging. You find out weeks later by accident. There is no systematic way to track how competitor brands evolve.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">Automated audits and competitive scanning</h2>
                    </div>

                    {/* Design Audit */}
                    <div className="space-y-12">
                        <div className="max-w-2xl mx-auto text-center space-y-4">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Internal: AI Design Audit</h3>
                            <p className="text-[#4A5568] text-lg">Upload guidelines and any asset. In 30 seconds the AI returns a score out of 100 with visual annotations showing every deviation. No opinions. Just facts.</p>
                        </div>
                        <div className="flex justify-center">
                            <AuditProcessMockup />
                        </div>
                    </div>

                    {/* Brand Scanner */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 bg-[#F5F5F7] rounded-[40px] p-12 relative overflow-hidden h-[400px] flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 w-full">
                                {["Colors", "Typography", "Tech Stack", "SEO"].map(f => (
                                    <div key={f} className="p-6 bg-white rounded-2xl shadow-sm flex flex-col gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-[#008CFF]/10 flex items-center justify-center">
                                            <div className="w-3 h-3 border-2 border-[#008CFF] rounded-sm" />
                                        </div>
                                        <div className="text-xs font-black uppercase tracking-widest">{f}</div>
                                        <div className="w-full h-1 bg-slate-100 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">External: Brand Scanner</h3>
                            <p className="text-[#4A5568] text-lg leading-relaxed">Enter any URL. The scanner extracts the complete brand DNA in 60 seconds: hex values, typography, tech stack, pricing, SEO metadata, and every visual asset on the site.</p>
                            <ul className="space-y-4">
                                {["Build a timeline of competitor evolution", "Spot positioning shifts early", "Save assets directly to moodboards"].map(li => (
                                    <li key={li} className="flex gap-3 items-center text-sm font-bold">
                                        <div className="w-5 h-5 rounded-full bg-[#41F461]/20 flex items-center justify-center text-[#41F461]"><CheckCircle size={14} /></div>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1A2F] text-white">
                <div className="container-narrow">
                    <h2 className="font-display text-4xl font-bold mb-16 px-4">From reactive to proactive</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            "Upload your brand guidelines to Inspo AI once.",
                            "Before any asset ships, run it through the AI audit.",
                            "Monthly, scan your top 3 to 5 competitors with Brand Scanner.",
                            "Save competitor colors, fonts, and assets to moodboards.",
                            "Share audit results and competitive insights with the team.",
                            "Over time, build a library of competitive intelligence."
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col gap-4 border-l border-white/10 pl-8">
                                <div className="text-4xl font-black text-white/10 italic">0{i + 1}</div>
                                <p className="text-white/80 font-medium leading-relaxed">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <FAQSection
                customItems={[
                    { q: "How accurate is the AI design audit?", a: "The audit is highly accurate for technical specs like color hex codes, font families, and spacing. For subjective elements, it provides 'suggestions' based on your guidelines while giving you a definitive overall brand compliance score." },
                    { q: "Can I upload my own brand guidelines?", a: "Yes. You can upload your brand book as a PDF or image, or enter your guidelines manually into the platform. Once saved, every design you audit will be checked against these specific rules." },
                    { q: "Does the Brand Scanner work on password-protected sites?", a: "Currently, the Brand Scanner can only analyze publicly accessible URLs. For password-protected or staging environments, we recommend uploading screenshots to the AI Design Audit tool instead." }
                ]}
            />
        </UseCaseLayout>
    );
};

export default BrandIntelligence;
