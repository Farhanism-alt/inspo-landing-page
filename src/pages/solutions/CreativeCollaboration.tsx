import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { CollaborationHeroMockup, PublicMoodboardMockup } from "@/components/SolutionVisuals";
import BlurReveal from "@/components/BlurReveal";
import FAQSection from "@/components/FAQSection";

const CreativeCollaboration = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="Creative Collaboration Tool | Real-Time Moodboards for Design Teams | Inspo AI"
                description="Build moodboards together in real time. Share creative direction with clients via public links. Align design teams visually before any pixel is designed. Export as PDF."
                keywords="creative collaboration tool, real-time moodboard builder, design team collaboration, shared moodboard platform, client presentation tool, visual brief creator, design direction alignment, collaborative design workspace, moodboard sharing tool, creative project management"
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "Is there a limit on moodboard collaborators?", "acceptedAnswer": { "@type": "Answer", "text": "The Free plan allows up to 2 collaborators per moodboard. Paid plans allow for unlimited collaborators, making them ideal for larger agencies and marketing departments." } },
                        { "@type": "Question", "name": "Do clients need an account to view public links?", "acceptedAnswer": { "@type": "Answer", "text": "No. Anyone with the link can view your moodboard. They can also leave reactions directly on specific elements without needing to sign up or log in." } },
                        { "@type": "Question", "name": "Can I export moodboards as PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can export any moodboard as a high-resolution PDF or a multi-page presentation deck, perfect for formal client meetings and brand guideline handoffs." } }
                    ]
                }}
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40 overflow-hidden">
                <div className="container-narrow flex flex-col items-center text-center">
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        Same moodboard. <br />
                        <span className="inspo-gradient-text">Same time. Zero confusion.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        Creative teams waste hours on alignment. Inspo AI fixes this by giving everyone a shared visual workspace. Build moodboards together in real time. Share with stakeholders through a single link.
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
                        <CollaborationHeroMockup />
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">Alignment problems are not design problems</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed">
                            <p>When a campaign takes 4 revision rounds, the issue is rarely skill—it is that <span className="text-black font-extrabold italic">nobody agreed on the direction</span> before work started. Someone wanted "modern," another wanted "bold," and the client wanted something else entirely.</p>
                            <p>Then starts the revision loop. Share, wait, feedback, update. Each round takes days. By round 3, everyone compromises instead of collaborating. And versions? There are always five "final" versions floating around Slack.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">Visual alignment from day one</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Build together in real time</h3>
                                <p className="text-[#4A5568] text-lg leading-relaxed">Multiple team members work on the same moodboard simultaneously. One person searches hero references, another adds colors, another curates typography. Changes sync instantly for everyone.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">End the version problem</h3>
                                <p className="text-[#4A5568] text-lg leading-relaxed">There is only one version. It is the live moodboard. Everyone sees the same thing at the same time. No more "which version are you looking at?"</p>
                            </div>
                        </div>
                        <div className="aspect-square bg-[#F5F5F7] rounded-[32px] p-12 flex flex-col gap-8 justify-center items-center">
                            <div className="w-full h-2 shadow-sm bg-border rounded-full relative overflow-hidden">
                                <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[#008CFF] w-1/3" />
                            </div>
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4, 5].map(n => <div key={n} className="w-12 h-12 rounded-full border-4 border-[#F5F5F7] bg-white animate-pulse" />)}
                            </div>
                            <div className="text-sm font-bold opacity-30">Real-time collaboration sync</div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <PublicMoodboardMockup />
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Share with one link</h3>
                            <p className="text-[#4A5568] text-lg leading-relaxed">Every moodboard generates a public link. Send it to clients, stakeholders, or executives. They see a polished presentation without needing an account or app install.</p>
                            <div className="p-6 bg-[#41F461]/5 border-l-4 border-[#41F461] rounded-r-2xl">
                                <p className="text-sm font-bold text-black/80 italic">"The simplest way to get client sign-off I've used in 10 years."</p>
                                <div className="mt-2 text-[10px] font-black uppercase tracking-widest text-black/40">— Creative Director, Neo Agency</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <FAQSection
                customItems={[
                    { q: "Is there a limit on moodboard collaborators?", a: "The Free plan allows up to 2 collaborators per moodboard. Paid plans allow for unlimited collaborators, making them ideal for larger agencies and marketing departments." },
                    { q: "Do clients need an account to view public links?", a: "No. Anyone with the link can view your moodboard. They can also leave reactions directly on specific elements without needing to sign up or log in." },
                    { q: "Can I export moodboards as PDFs?", a: "Yes. You can export any moodboard as a high-resolution PDF or a multi-page presentation deck, perfect for formal client meetings and brand guideline handoffs." }
                ]}
            />
        </UseCaseLayout>
    );
};

export default CreativeCollaboration;
