import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { BrandScannerHeroMockup, ColorExtractionMockup } from "@/components/SolutionVisuals";
import BlurReveal from "@/components/BlurReveal";
import FAQSection from "@/components/FAQSection";

const CompetitiveAnalysis = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="Competitor Website Analysis Tool | Brand DNA Scanner | Inspo AI"
                description="Scan any competitor website and extract colors, fonts, tech stack, pricing, and SEO data in 60 seconds. Visualized as an interactive node graph. Track competitor brand evolution."
                keywords="competitor website analysis tool, competitor brand scanner, website teardown tool, brand comparison tool, competitive intelligence for designers, website color extractor, font detector tool, tech stack analyzer, competitive brand monitoring, digital brand analysis"
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What industries does the scanner work best for?", "acceptedAnswer": { "@type": "Answer", "text": "The Brand Scanner is designed for digital-first industries like SaaS, Fintech, E-commerce, and Agency sites. It works best on modern web architectures that follow standard HTML/CSS conventions." } },
                        { "@type": "Question", "name": "Can I see historical versions of competitor sites?", "acceptedAnswer": { "@type": "Answer", "text": "The Pro plan includes a 'Brand History' feature that takes monthly snapshots of your tracked URLs, allowing you to see how their colors, pricing, and messaging evolve over time." } },
                        { "@type": "Question", "name": "Is the tech stack detection always accurate?", "acceptedAnswer": { "@type": "Answer", "text": "We detect 95% of common frontend frameworks, CMS platforms, and marketing tools. Some obfuscated or highly custom stacks may return partial results, but we are constantly updating our detection engine." } }
                    ]
                }}
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40 overflow-hidden">
                <div className="container-narrow flex flex-col items-center text-center">
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        One URL. <br />
                        <span className="inspo-gradient-text">Everything about their brand.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        Enter a competitor website URL into Inspo AI. In 60 seconds, see their complete brand DNA: exact color palette, typography, tech stack, pricing, and SEO strategy.
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
                        <BrandScannerHeroMockup />
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">Manual competitive analysis is slow and incomplete</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed">
                            <p>The traditional way: Inspect element to find fonts, use color pickers for hex codes, scroll pages for pricing, check source code for tech stacks. It takes <span className="font-bold text-black italic">2 to 4 hours per competitor</span>.</p>
                            <p>Most teams do it once and never update it. Results are always incomplete—you get colors but miss font weights, find pricing but miss the SEO strategy. And by next quarter, everything has changed anyway.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">Complete brand DNA in 60 seconds</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Automatic extraction</h3>
                                <p className="text-[#4A5568] text-lg leading-relaxed">The AI extracts 10 categories simultaneously: color palettes, typography, tech stacks, pricing structures, SEO metadata, logos, and every visual asset on the site.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Interactive node graph</h3>
                                <p className="text-[#4A5568] text-lg leading-relaxed">Click any node to expand details. See how colors relate to typography, how the tech stack supports pricing, and how SEO strategy aligns with visual identity.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <ColorExtractionMockup />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Enter any publicly accessible URL.",
                            "Watch AI crawl and extract 10+ data points.",
                            "Explore results as a radial node graph.",
                            "Save specific elements to your moodboards.",
                            "Compare current scans with historical data.",
                            "Export reports for team strategy sessions."
                        ].map((step, i) => (
                            <div key={i} className="p-8 bg-[#F5F5F7] rounded-3xl border border-black/5">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-xs mb-6 shadow-soft">{i + 1}</div>
                                <p className="font-bold leading-tight">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-4 text-center">
                <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-12">Beyond just looking at websites</h2>
                <div className="container-narrow grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "Agencies scanning before pitches.",
                        "Brand teams monitoring evolution.",
                        "PMs benchmarking pricing & features.",
                        "Founders researching industry stacks."
                    ].map(u => (
                        <div key={u} className="p-6 bg-white border border-border rounded-2xl font-bold text-sm">{u}</div>
                    ))}
                </div>
            </section>
            {/* FAQ Section */}
            <FAQSection
                customItems={[
                    { q: "What industries does the scanner work best for?", a: "The Brand Scanner is designed for digital-first industries like SaaS, Fintech, E-commerce, and Agency sites. It works best on modern web architectures that follow standard HTML/CSS conventions." },
                    { q: "Can I see historical versions of competitor sites?", a: "The Pro plan includes a 'Brand History' feature that takes monthly snapshots of your tracked URLs, allowing you to see how their colors, pricing, and messaging evolve over time." },
                    { q: "Is the tech stack detection always accurate?", a: "We detect 95% of common frontend frameworks, CMS platforms, and marketing tools. Some obfuscated or highly custom stacks may return partial results, but we are constantly updating our detection engine." }
                ]}
            />
        </UseCaseLayout>
    );
};

export default CompetitiveAnalysis;
