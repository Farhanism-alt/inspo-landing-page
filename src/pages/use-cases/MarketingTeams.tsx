import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { CampaignBriefMockup, CollaborativeMockup, DesignAuditMockup, MarketingSplitComparison, CampaignSharedMoodboard } from "@/components/UseCaseVisuals";
import BlurReveal from "@/components/BlurReveal";

const MarketingTeams = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="Campaign Moodboard Tool for Marketing Teams | Inspo AI"
                description="Create visual briefs for campaigns in minutes. Align creative direction before design starts. Audit marketing assets for brand compliance before launch. Reduce revision rounds."
                keywords="campaign moodboard tool, marketing visual brief, creative direction alignment, campaign asset management, marketing design tool, brand compliance for marketing, visual campaign planning, marketing mood board creator, creative brief builder, marketing team collaboration tool"
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40">
                <div className="container-narrow flex flex-col items-center text-center">
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        "Make it pop" is not <br />
                        <span className="inspo-gradient-text">a creative brief.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        You know the vibe you want for the campaign. But when you send that Slack message, everyone imagines something different. The fix is showing instead of telling.
                    </motion.p>
                    <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white text-base px-10 py-4 rounded-pill transition-all mb-20 shadow-lg" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}>
                        GET INSPIRED
                    </a>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-full flex justify-center"
                    >
                        <CampaignBriefMockup />
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">Creative misalignment costs more than you think</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed mb-16">
                            <p>Three rounds of revisions on a campaign asset means wasted time and frustration. Most of the time the problem is that the brief was words instead of visuals.</p>
                            <p>Then there is the brand consistency issue. Social graphics and email headers get produced at speed. By end of quarter, half the assets have drifted from brand standards.</p>
                        </div>
                        <div className="flex justify-center">
                            <MarketingSplitComparison />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Fixes It */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">Visual briefs, stakeholder alignment, and pre-launch brand checks</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center text-center max-w-4xl mx-auto">
                        <div className="col-span-full space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Build a visual brief in 15 minutes</h3>
                            <p className="text-lg text-[#4A5568] mb-12">Instead of writing paragraphs describing what "modern and clean" means, build a moodboard. Search for campaign references, save the ones that match your vision, add the color palette and fonts you want.</p>
                            <div className="flex justify-center w-full">
                                <CampaignSharedMoodboard />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                            <CollaborativeMockup />
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Get alignment before design starts</h3>
                            <p className="text-lg text-[#4A5568]">Share the moodboard via public link with everyone who has input. Get alignment on the visual direction before a single pixel is designed. One link replaces three feedback rounds.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Brand check before launch</h3>
                            <p className="text-lg text-[#4A5568]">Run every campaign asset through the AI Design Audit before it goes live. Upload the brand guidelines, upload the asset, get a score. Catch the off-brand email header before 50,000 subscribers see it.</p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <DesignAuditMockup score={95} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-4 text-center">
                <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-8">Show the vision instead of describing it</h2>
                <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white text-lg px-12 py-5 rounded-pill shadow-xl inline-block" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}>
                    GET INSPIRED
                </a>
            </section>
        </UseCaseLayout>
    );
};

export default MarketingTeams;
