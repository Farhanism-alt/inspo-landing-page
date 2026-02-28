import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { SearchMockup, AISuggestionsMockup, MoodboardPreviewMockup, DesignAuditMockup, StepWorkflowIcon } from "@/components/UseCaseVisuals";
import BlurReveal from "@/components/BlurReveal";

const UIUXDesigners = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="Design Inspiration Tool for UI/UX Designers | Inspo AI"
                description="Find UI design inspiration by style, color, and industry. Build client moodboards in minutes. Audit designs for brand compliance. The all-in-one research workspace for UI/UX designers."
                keywords="design inspiration tool for UI designers, UI UX design references, design research tool, UI pattern library, Figma inspiration tool, app design examples, web design references, UI component inspiration, design system references, user interface design ideas"
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40">
                <div className="container-narrow flex flex-col items-center text-center">
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        Stop tab-hopping. <br />
                        <span className="inspo-gradient-text">Start designing.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        You open Pinterest. Then Dribbble. Then Behance. Then Awwwards. Then Mobbin. Two hours later you have 47 tabs open. Inspo AI puts all your design research in one place so you can get back to the work that matters.
                    </motion.p>
                    <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white text-base px-10 py-4 rounded-pill transition-all mb-20 shadow-lg" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}>
                        GET INSPIRED
                    </a>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <SearchMockup />
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">The research phase eats your day</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed">
                            <p>Every new project starts the same way. You need references. You search five platforms with slightly different keywords. You screenshot things manually. By the time you have enough references, you have spent half the day on research instead of design.</p>
                            <p>Then the moodboard. You arrange screenshots in a Google Doc. It looks okay but not great. The client says "I like the direction" but you know the presentation could be stronger.</p>
                            <p>Then the review. You find out in the review meeting when someone says "that blue looks off."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Fixes It */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">One workspace for research, moodboards, and brand checks</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                            <AISuggestionsMockup />
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Search once, find everything</h3>
                            <p className="text-lg text-[#4A5568]">Type what you need in plain English. "Clean e-commerce checkout with rounded corners and green accents." Inspo AI returns relevant results instantly. Filter by industry, style, font, or color.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Moodboards that impress clients</h3>
                            <p className="text-lg text-[#4A5568]">Click any result to save it to a moodboard. Add color palettes and font pairs alongside your image references. Share with clients via a clean public link. No more messy docs.</p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <MoodboardPreviewMockup />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                            <DesignAuditMockup />
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Brand audit before the review meeting</h3>
                            <p className="text-lg text-[#4A5568]">Upload the client brand guidelines. Upload your design. Get a score out of 100 in seconds. Visual annotations point to the exact spots where colors, fonts, or spacing are off.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white rounded-[40px] m-4 sm:m-8 lg:m-12">
                <div className="container-narrow">
                    <h2 className="font-display text-4xl font-bold mb-16 text-center">From search to delivery in 6 steps</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            "Search for 'e-commerce checkout redesign minimal' to gather references",
                            "Save the best results to a new moodboard",
                            "Add color palettes and font pairs that match the direction",
                            "Share the moodboard link with the client for alignment",
                            "After designing, run a brand audit against the guidelines",
                            "Fix flagged issues and deliver with confidence"
                        ].map((step, i) => (
                            <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <StepWorkflowIcon step={i + 1} />
                                <p className="text-sm font-medium leading-relaxed opacity-80">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA override or local one */}
            <section className="py-32 px-4 text-center">
                <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-8">Find your next design reference in seconds</h2>
                <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white text-lg px-12 py-5 rounded-pill shadow-xl inline-block" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}>
                    GET INSPIRED
                </a>
            </section>
        </UseCaseLayout>
    );
};

export default UIUXDesigners;
