import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { BrandDriftMockup, DesignAuditMockup, BrandScannerMockup, BrandTeamsHeroCards } from "@/components/UseCaseVisuals";
import BlurReveal from "@/components/BlurReveal";

const BrandTeams = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="Brand Compliance Audit Tool for Brand Teams | Inspo AI"
                description="Audit every design for brand compliance in seconds with AI scoring. Scan competitor websites for brand DNA. Keep your visual identity consistent across every touchpoint."
                keywords="brand compliance audit tool, brand consistency checker, design QA for brand teams, brand guideline enforcement tool, visual identity management, brand drift detection, design compliance scoring, brand asset auditing, brand governance tool, competitor brand tracking"
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40">
                <div className="container-narrow flex flex-col items-center text-center">
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        Your brand is drifting. <br />
                        <span className="inspo-gradient-text">You just don't know it yet.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        Every quarter, a few designs go out with the wrong shade of blue. A social graphic uses an unapproved font. Individually these are small. Together they erode the brand you spent months building.
                    </motion.p>
                    <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white text-base px-10 py-4 rounded-pill transition-all mb-20 shadow-lg" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}>
                        GET INSPIRED
                    </a>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full flex justify-center pb-12"
                    >
                        <BrandTeamsHeroCards />
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">Brand guidelines exist. Nobody follows them perfectly.</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed">
                            <p>You created a 60-page brand guide. The design team says they follow it. But every time you look closely, something is slightly off. The review process is manual and subjective.</p>
                            <p>Over time, the small deviations compound and your brand starts looking inconsistent across touchpoints.</p>
                            <p>Meanwhile, your competitors are redesigning their websites. By the time you find out, you have missed the window to analyze their strategy and respond.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Fixes It */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">Automated brand checks and competitive visibility</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                            <DesignAuditMockup score={78} />
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Instant design audits</h3>
                            <p className="text-lg text-[#4A5568]">Upload your brand guidelines once. Then upload any design at any time. The AI returns a compliance score out of 100 with visual annotations showing exactly where the design deviates. No opinions. A concrete score and specific fixes in 30 seconds.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Competitor brand scanning</h3>
                            <p className="text-lg text-[#4A5568]">Enter any competitor URL into Brand Scanner. In 60 seconds, see their full brand DNA: color palette, typography, tech stack, and pricing structure. All visualized as an interactive node graph.</p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <BrandScannerMockup />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center text-center max-w-4xl mx-auto">
                        <div className="col-span-full space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Shared visual direction</h3>
                            <p className="text-lg text-[#4A5568]">Build moodboards that define the approved creative direction. Share them with every designer, agency, and contractor who touches the brand. One link. One source of truth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-4 text-center">
                <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-8">Keep your brand tight and your competitors visible</h2>
                <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white text-lg px-12 py-5 rounded-pill shadow-xl inline-block" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}>
                    GET INSPIRED
                </a>
            </section>
        </UseCaseLayout>
    );
};

export default BrandTeams;
