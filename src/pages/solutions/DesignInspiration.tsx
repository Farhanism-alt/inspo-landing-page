import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { InspoSearchMockup, FilterBarDetailMockup } from "@/components/SolutionVisuals";
import BlurReveal from "@/components/BlurReveal";
import FAQSection from "@/components/FAQSection";

const DesignInspiration = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="AI Design Inspiration Tool | Search and Discover References | Inspo AI"
                description="Search for design inspiration using natural language and AI filters. Find UI references by industry, style, color, and font in seconds. The best Dribbble and Pinterest alternative for designers."
                keywords="AI design inspiration tool, design reference search, UI inspiration library, Dribbble alternative, Pinterest alternative for designers, design research platform, visual reference finder, creative inspiration search engine, design mood research, UI UX design search"
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How often is the library updated?", "acceptedAnswer": { "@type": "Answer", "text": "Our AI-curated library is updated daily with award-winning designs from across the web. We focus on quality over quantity, ensuring every reference meets a high standard of design excellence." } },
                        { "@type": "Question", "name": "Can I search for specific web components?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can search specifically for 'pricing tables', 'bento grids', 'hero sections', 'navigation bars', and more. The AI understands component context and returns the best specimens for each." } },
                        { "@type": "Question", "name": "Does Inspo AI include mobile app inspiration?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can filter your search by platform (Web, Mobile, Tablet) or style. We have a vast library of high-fidelity mobile UI references from top-tier apps." } }
                    ]
                }}
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40 overflow-hidden">
                <div className="container-narrow flex flex-col items-center text-center">
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        Find the right reference on the <br />
                        <span className="inspo-gradient-text">first search, not the fifteenth.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        You already know what you want. You just need to find it. Inspo AI uses natural language search to understand design context. Type what you are looking for, filter by the details that matter, and get results that match your project.
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
                        <InspoSearchMockup />
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">The inspiration phase should take minutes, not hours</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed">
                            <p>Every designer has the same routine. Open Pinterest. Search something vague. Scroll past recipes, outfit ideas, and wedding decor. Switch to Dribbble. Scroll past illustration work when you need UI references.</p>
                            <p>Two hours later you have 47 tabs open, a handful of screenshots in a random folder, and the uncomfortable feeling that the perfect reference is out there somewhere but you did not find it.</p>
                            <p className="font-bold text-[#0A1A2F]">The problem is not a lack of inspiration. There is too much of it, scattered across too many platforms, none of which understand what you actually need.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">Search like a designer, not like a search engine</h2>
                    </div>

                    {/* Feature 1 & 2 */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h3 className="font-display text-2xl font-bold text-[#0A1A2F]">Natural language that understands design</h3>
                                <p className="text-[#4A5568] leading-relaxed">Type "minimalist fintech dashboard with dark mode and green accents" and the AI returns designs that match that specific combination. Not keyword matches. Contextual results.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-display text-2xl font-bold text-[#0A1A2F]">Filters that stack</h3>
                                <p className="text-[#4A5568] leading-relaxed">Select "Fintech" as the industry. Add "Minimalist" as the style. Pick the exact green from the color picker. Choose "Inter" as the font filter. Every filter narrows the results to exactly what your project needs.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <FilterBarDetailMockup />
                        </div>
                    </div>

                    {/* Feature 3 & 4 */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 bg-[#F5F5F7] rounded-[32px] p-12 flex flex-col gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map(n => (
                                    <div key={n} className="aspect-video bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center text-[10px] font-black uppercase tracking-tighter text-black/20">Recommendation {n}</div>
                                ))}
                            </div>
                            <div className="mt-4 p-4 rounded-2xl bg-white border border-[#41F461]/30 flex items-center justify-between">
                                <span className="text-xs font-bold">Having creative block?</span>
                                <button className="px-4 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest">Surprise Me</button>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-12">
                            <div className="space-y-4">
                                <h3 className="font-display text-2xl font-bold text-[#0A1A2F]">AI recommendations that expand your thinking</h3>
                                <p className="text-[#4A5568] leading-relaxed">After every search, the AI suggests related directions. Searched for "minimal SaaS landing page"? It might suggest "editorial SaaS" or "SaaS hero with 3D product mockup."</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-display text-2xl font-bold text-[#0A1A2F]">Surprise Me for creative blocks</h3>
                                <p className="text-[#4A5568] leading-relaxed">When you are stuck in a loop searching the same patterns, hit Surprise Me. Inspo AI serves random curated inspiration from across its database.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Uses This */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
                <div className="container-narrow">
                    <h2 className="font-display text-4xl font-bold mb-16 text-center">Built for anyone who starts projects with research</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { title: "UI/UX Designers", desc: "Layout patterns & interactions" },
                            { title: "Brand Designers", desc: "Visual identities & typography" },
                            { title: "Marketing Teams", desc: "Campaign visual direction" },
                            { title: "Agencies", desc: "Industry research & pitches" },
                            { title: "Product Managers", desc: "Benchmarking competitors" }
                        ].map((user, i) => (
                            <div key={i} className="p-6 rounded-[24px] bg-white/5 border border-white/10 flex flex-col gap-4">
                                <div className="text-sm font-black text-[#41F461] uppercase tracking-widest">0{i + 1}</div>
                                <h4 className="text-lg font-bold">{user.title}</h4>
                                <p className="text-sm text-white/60">{user.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <FAQSection
                customItems={[
                    { q: "How often is the library updated?", a: "Our AI-curated library is updated daily with award-winning designs from across the web. We focus on quality over quantity, ensuring every reference meets a high standard of design excellence." },
                    { q: "Can I search for specific web components?", a: "Yes. You can search specifically for 'pricing tables', 'bento grids', 'hero sections', 'navigation bars', and more. The AI understands component context and returns the best specimens for each." },
                    { q: "Does Inspo AI include mobile app inspiration?", a: "Absolutely. You can filter your search by platform (Web, Mobile, Tablet) or style. We have a vast library of high-fidelity mobile UI references from top-tier apps." }
                ]}
            />
        </UseCaseLayout>
    );
};

export default DesignInspiration;
