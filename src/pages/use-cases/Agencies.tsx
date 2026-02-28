import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { BrandScannerMockup, MoodboardPreviewMockup, AISuggestionsMockup, PitchPrepFinancialMoodboard } from "@/components/UseCaseVisuals";
import BlurReveal from "@/components/BlurReveal";

const Agencies = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="Competitive Brand Analysis Tool for Design Agencies | Inspo AI"
                description="Build pitch moodboards in 15 minutes. Scan competitor brands before client meetings. Speed up ideation with AI design search. Save 3+ hours per pitch."
                keywords="agency competitive brand analysis tool, pitch deck moodboard, agency design research, client pitch preparation, competitor scanning for agencies, design agency tools, creative agency workflow, agency brand intelligence, design pitch tool, agency ideation platform"
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40">
                <div className="container-narrow flex flex-col items-center text-center">
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        Walk into every pitch with <br />
                        <span className="inspo-gradient-text">an unfair advantage.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        Your competitor shows up with a generic deck. You show up with curated references, a complete scan of the client's competitors, and insights that show you did the homework.
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
                        <div className="bg-white rounded-[32px] p-8 border border-border shadow-inspo max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Pitch Prep Dashboard</div>
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="text-xs font-bold mb-3">Client: FinServ Rebrand</div>
                                    <div className="flex gap-2 mb-3">
                                        <div className="flex-1 aspect-video bg-slate-200 rounded-lg"></div>
                                        <div className="flex-1 aspect-video bg-slate-200 rounded-lg"></div>
                                    </div>
                                    <div className="flex gap-1.5 overflow-x-auto">
                                        {[1, 2, 3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-blue-500"></div>)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="p-3 rounded-xl border border-slate-100 bg-white shadow-sm flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-6 bg-slate-100 rounded"></div>
                                            <div className="text-[10px] font-bold">Competitor {i}</div>
                                        </div>
                                        <span className="text-[8px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">Pitch Ready</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">The pitch grind is expensive</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed">
                            <p>Every new client opportunity requires fresh research. Study their industry. Build a moodboard. Assemble a visual direction. By the time the pitch deck is ready, you have burned 4 to 6 hours on presales work.</p>
                            <p>Multiply that across 8 pitches a month and the unbillable time adds up fast. Then there is the alignment problem. The first round often reveals you were imagining completely different things.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Fixes It */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">Faster pitches, smarter research, better client alignment</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center mb-12">
                            <PitchPrepFinancialMoodboard />
                        </div>
                        <div className="space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Pitch-ready moodboards in 15 minutes</h3>
                            <p className="text-lg text-[#4A5568]">Search for industry-specific inspiration. Save the best references. Add color palettes and font pairs. Share a polished moodboard link in the pitch email.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                            <BrandScannerMockup />
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Competitive scans that impress</h3>
                            <p className="text-lg text-[#4A5568]">Before a client meeting, scan their competitors. Walk in with exact color palettes, font choices, tech stacks, and pricing intelligence. Present it as a node graph or save key insights to a moodboard.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">AI-powered ideation</h3>
                            <p className="text-lg text-[#4A5568]">Use AI search to explore directions you might not have considered. Break out of the usual patterns and show clients something unexpected.</p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <AISuggestionsMockup />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Numbers */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
                <div className="container-narrow text-center">
                    <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-12">The Numbers</h2>
                    <div className="max-w-2xl mx-auto p-12 bg-white rounded-[32px] border border-border shadow-sm">
                        <p className="text-xl text-[#4A5568] leading-relaxed">
                            An average agency pitches 6 to 10 new clients per month. If Inspo AI saves 3 hours per pitch, that is <span className="text-black font-bold">18 to 30 hours reclaimed monthly</span>. At a blended agency rate of $150 per hour, that is <span className="inspo-gradient-text font-extrabold">$2,700 to $4,500</span> in recovered capacity every month.
                        </p>
                        <div className="mt-8 text-sm font-bold text-[#0A1A2F]/40 uppercase tracking-widest">The Pro plan costs $29.</div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-4 text-center">
                <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-8">Win more pitches with less prep time</h2>
                <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white text-lg px-12 py-5 rounded-pill shadow-xl inline-block" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}>
                    GET INSPIRED
                </a>
            </section>
        </UseCaseLayout>
    );
};

export default Agencies;
