import UseCaseLayout from "@/components/UseCaseLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { CreatorStudioHeroMockup, ResponsivePreviewMockup } from "@/components/SolutionVisuals";
import BlurReveal from "@/components/BlurReveal";
import FAQSection from "@/components/FAQSection";

const AIDesignGeneration = () => {
    return (
        <UseCaseLayout>
            <SEO
                title="AI Design Generator | Text to Web Design in Seconds | Inspo AI"
                description="Describe a web design in plain English and AI generates live HTML and CSS. Preview on desktop, tablet, and mobile. Copy the code. Iterate through chat. No coding required."
                keywords="AI design generator, text to website, AI web design tool, AI UI generator, prompt to design, AI landing page builder, AI website generator, text to HTML CSS, automated web design, AI mockup generator"
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "Can I export the code as a React component?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can toggle between raw HTML/CSS and React (Tailwind) code. You can then copy-paste this directly into your IDE and it will work with zero configuration." } },
                        { "@type": "Question", "name": "Does Creator Studio support custom fonts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can specify any Google Font in your prompt, and the AI will automatically include the necessary import statements in the generated code." } },
                        { "@type": "Question", "name": "Is the generated design SEO friendly?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. The AI uses semantic HTML tags (h1, h2, main, section) and includes meta tag suggestions to ensure your generated designs are accessible and optimized for search engines." } }
                    ]
                }}
            />

            {/* Hero Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/40 overflow-hidden">
                <div className="container-narrow flex flex-col items-center text-center">
                    <div className="mb-6 px-4 py-1.5 rounded-full bg-[#41F461]/10 border border-[#41F461]/30 text-[10px] font-black uppercase tracking-widest text-[#41F461]">Creator Studio Beta</div>
                    <BlurReveal as="h1" className="font-display text-[54px] sm:text-[72px] text-[#0A1A2F] leading-[1.1] tracking-tight mb-8">
                        Type a prompt. <br />
                        <span className="inspo-gradient-text">Get a design.</span>
                    </BlurReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A5568] max-w-2xl mb-12"
                    >
                        Creator Studio turns your words into working web designs. Describe what you want in a chat message. The AI generates live HTML and CSS in real time.
                    </motion.p>
                    <a href="https://app.inspoai.io" className="bg-black hover:inspo-gradient-bg shimmer-btn text-white font-semibold text-base px-10 py-4 rounded-pill transition-all mb-20 shadow-lg">
                        Try Creator Studio
                    </a>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full flex justify-center"
                    >
                        <CreatorStudioHeroMockup />
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F] mb-10">Going from idea to visual takes too long</h2>
                        <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed">
                            <p>Mocking for a stakeholder meeting typically means 45 minutes in Figma or a day's turnaround from a designer. Sketching on paper? Nobody takes it seriously. There is no fast way to go from idea to visual realization.</p>
                            <p>This is painful for early exploration. You want to see 3 directions before committing. Traditionally, that's 3x the effort. With Inspo AI, it's <span className="font-bold text-black italic">3x the speed</span>.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container-narrow space-y-32">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-bold text-[#0A1A2F]">Design through conversation</h2>
                    </div>

                    {/* Step 1 & 2 */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">See it rendered live</h3>
                                <p className="text-[#4A5568] text-lg leading-relaxed">The AI generates working HTML and CSS that renders in real time in the preview panel. Watch your design appear as the code is generated. No build process. No refreshes.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-display text-3xl font-bold text-[#0A1A2F]">Iterate through chat</h3>
                                <p className="text-[#4A5568] text-lg leading-relaxed">Not quite right? Just tell the AI what to change. "Make the headline bigger" or "Change the gradient to blue-green." Each message builds on the design.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <ResponsivePreviewMockup />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "HTML/CSS Export", desc: "Copy clean code with one click." },
                            { title: "Responsive Frames", desc: "Desktop, tablet, and mobile previews." },
                            { title: "Component Library", desc: "From bento grids to pricing cards." },
                            { title: "Design Systems", desc: "Specify fonts, colors, and border radius." }
                        ].map(f => (
                            <div key={f.title} className="p-8 bg-white border border-border rounded-3xl shadow-soft">
                                <h4 className="text-base font-black mb-3">{f.title}</h4>
                                <p className="text-xs text-[#4A5568] leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <FAQSection
                customItems={[
                    { q: "Can I export the code as a React component?", a: "Yes. You can toggle between raw HTML/CSS and React (Tailwind) code. You can then copy-paste this directly into your IDE and it will work with zero configuration." },
                    { q: "Does Creator Studio support custom fonts?", a: "Yes. You can specify any Google Font in your prompt, and the AI will automatically include the necessary import statements in the generated code." },
                    { q: "Is the generated design SEO friendly?", a: "Absolutely. The AI uses semantic HTML tags (h1, h2, main, section) and includes meta tag suggestions to ensure your generated designs are accessible and optimized for search engines." }
                ]}
            />
        </UseCaseLayout>
    );
};

export default AIDesignGeneration;
