import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DotBackground from "@/components/DotBackground";

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the best Mobbin alternative in 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Inspo AI is the best Mobbin alternative for designers who need more than a screenshot library. It combines AI-powered design search with collaborative moodboards, brand compliance auditing, competitor website scanning, and AI design generation in one workspace. Free plan available."
            }
        },
        {
            "@type": "Question",
            "name": "Is Inspo AI free?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Inspo AI has a free forever plan with 15 searches per day, 1 moodboard, 1 design audit, 1 brand scan, and live collaboration. Paid plans start at $12 per month."
            }
        },
        {
            "@type": "Question",
            "name": "What can Inspo AI do that Mobbin cannot?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Inspo AI offers AI natural language search, moodboard builder with color palettes and font pairs, AI design audit scoring, competitor website brand scanning, AI design generation via Creator Studio, and real-time collaboration. Mobbin is limited to a curated screenshot library with filters."
            }
        }
    ]
};

const mobbinFeaturesList = [
    "AI Design Search",
    "Moodboard Builder",
    "AI Design Audit",
    "Brand Scanner",
    "Creator Studio",
];

const mobbinFeatureContent = {
    "AI Design Search": {
        title: <>Search the way you <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>think</span>, not the way databases work</>,
        description: (
            <>
                <p className="mb-4">With Mobbin, you pick a category, pick a screen type, and browse what comes up. With Inspo AI, you type "minimalist fintech dashboard with dark mode and green accents" and the AI returns designs that match that specific combination.</p>
                <p>The filters stack: industry plus style plus font plus color, all at once. After every search, the AI suggests related directions you would not have explored on your own.</p>
            </>
        ),
        bg: "/ai-search.webp",
        mobileBg: "/mobile-ai-design-search.png",
    },
    "Moodboard Builder": {
        title: <>Build a moodboard, not a <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>bookmark folder</span></>,
        description: (
            <>
                <p className="mb-4">Mobbin lets you save screenshots to collections. That is bookmarking. Inspo AI lets you build actual moodboards with three sections: design reference images, extracted color palettes with hex values, and curated font pairs.</p>
                <p>Share any moodboard via a public link. Clients and stakeholders view it without creating an account. Export the whole thing when you need it offline.</p>
            </>
        ),
        bg: "/moodboard.webp",
        mobileBg: "/mobile-moodboard-builder.png",
    },
    "AI Design Audit": {
        title: <>Check your design <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>before</span> the review meeting catches it</>,
        description: (
            <>
                <p className="mb-4">Upload brand guidelines. Upload a design. Get a compliance score out of 100 in 30 seconds. Visual annotations show exactly where colors, fonts, or spacing deviate from the guidelines.</p>
                <p>Mobbin has no brand auditing capability at all.</p>
            </>
        ),
        bg: "/ai-audit.webp",
        mobileBg: "/mobile-ai-design-audit.png",
    },
    "Brand Scanner": {
        title: <>Know everything about any competitor in <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>60 seconds</span></>,
        description: (
            <>
                <p className="mb-4">Enter any website URL. Inspo AI extracts the complete brand DNA: color palette with hex values, typography with families and weights, technology stack, pricing structure, SEO metadata, logos, and every visual asset.</p>
                <p>All visualized as an interactive node graph you can click into and explore. Save any extracted data directly to a moodboard. Mobbin does not scan websites.</p>
            </>
        ),
        bg: "/brand-scanner.webp",
        mobileBg: "/mobile-brand-scanner.png",
    },
    "Creator Studio": {
        title: <>Describe a design. <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>See it built live.</span></>,
        description: (
            <>
                <p className="mb-4">Type a prompt like "Design a pricing page with 3 tiers, dark theme, and a highlighted Pro plan." The AI generates working HTML and CSS that renders in real time.</p>
                <p>Preview on desktop, tablet, and mobile. Iterate through conversation. Copy the code when done. Mobbin cannot generate anything.</p>
            </>
        ),
        bg: "/creator-studio.jpg",
        mobileBg: "/mobile-creator-studio.png",
    },
};

const MobbinAlternative = () => {
    const [activeFeature, setActiveFeature] = useState(mobbinFeaturesList[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkMobile = () => setIsMobile(window.innerWidth < 1024);
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }
    }, []);

    const activeContent = mobbinFeatureContent[activeFeature as keyof typeof mobbinFeatureContent];

    return (
        <>
            <SEO
                title="Best Mobbin Alternative in 2026 | Inspo AI vs Mobbin Feature Comparison"
                description="Looking for a Mobbin alternative? Inspo AI offers AI-powered search, collaborative moodboards, brand audits, competitor scanning, and AI design generation. Side-by-side feature and pricing comparison."
                keywords="mobbin alternative, inspo ai vs mobbin, better than mobbin, mobbin competitor, UI design library alternative, app screenshot library alternative, mobbin free alternative, design research tool comparison, mobbin pricing alternative, best design inspiration tool 2026"
                schemaMarkup={schemaMarkup}
            />
            <DotBackground />
            <div className="min-h-screen relative z-10 flex flex-col">
                <Navbar />

                <main className="flex-grow pt-64 pb-32">
                    <div className="container-narrow px-[16px] sm:px-[24px] lg:px-[32px] mx-auto space-y-64">

                        {/* 1. Hero Section */}
                        <section className="text-center space-y-8 max-w-4xl mx-auto">
                            <div className="mb-4 text-[#10B981] font-medium tracking-widest uppercase text-sm" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                                DESIGN RESEARCH REIMAGINED
                            </div>
                            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#001A2C] mb-6" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>
                                The Mobbin alternative that does <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>six</span> things, not one.
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>
                                Mobbin is a screenshot library. You browse, you filter, you look at screens. That is it. Inspo AI starts where Mobbin stops. Search with AI that understands design context. Save results to moodboards with color palettes and font pairs. Audit any design against brand guidelines. Scan any competitor website for its complete brand DNA. Generate new designs through AI chat. All from one workspace.
                            </p>

                            <div className="flex flex-col items-center gap-3">
                                <a
                                    href="https://app.inspoai.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#001A2C] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-colors shadow-lg inline-block"
                                    style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}
                                >
                                    Try It Free
                                </a>
                                <span className="text-gray-500 text-sm block mt-4" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>Free forever plan. No credit card required.</span>
                            </div>

                        </section>

                        {/* 2. Opening Definition */}
                        <section className="max-w-3xl mx-auto text-center space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-5xl font-medium text-[#001A2C]" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>
                                What is the best Mobbin alternative in <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>2026?</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>
                                Inspo AI is the best Mobbin alternative for designers who need more than a screenshot library. It combines AI-powered natural language design search, collaborative moodboards with color palettes and font pairs, automated brand compliance auditing, competitor website brand scanning, and AI design generation in one workspace. Over 180 designers have switched from fragmented tools to Inspo AI during its beta phase. Free plan available with 15 searches per day.
                            </p>
                        </section>

                        {/* 4. Feature Comparison Table */}
                        <section className="max-w-5xl mx-auto space-y-16 pt-32 scroll-mt-32">
                            <h2 className="text-4xl md:text-5xl font-medium text-[#001A2C] text-center" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>
                                Inspo AI vs Mobbin:<br /><span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>Full feature comparison</span>
                            </h2>
                            <div className="overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-xl" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50/50">
                                            <th className="p-6 font-medium text-gray-500 w-1/3" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Feature</th>
                                            <th className="p-6 font-medium text-[#001A2C] w-1/3 text-center border-l border-gray-200" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Inspo AI</th>
                                            <th className="p-6 font-medium text-gray-600 w-1/3 text-center border-l border-gray-200" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Mobbin</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[15px]">
                                        {[
                                            { f: "Search type", i: "AI natural language", m: "Keyword & category filters" },
                                            { f: "Filter by industry", i: "Yes", m: "Limited categories" },
                                            { f: "Filter by design style", i: "Yes", m: "No" },
                                            { f: "Filter by font / color", i: "Yes", m: "No" },
                                            { f: "AI recommendations / Surprise Me", i: "Yes", m: "No" },
                                            { f: "Moodboard builder (images, colors, fonts)", i: "Yes", m: "Bookmarks only" },
                                            { f: "Public moodboard sharing", i: "Yes", m: "No" },
                                            { f: "Real-time collaboration", i: "Yes", m: "No" },
                                            { f: "AI Design Audit (score/100)", i: "Yes", m: "No", highlight: true },
                                            { f: "Brand Scanner (website DNA)", i: "Yes", m: "No", highlight: true },
                                            { f: "AI Design Generator (Creator Studio)", i: "Yes", m: "No", highlight: true },
                                            { f: "Responsive preview", i: "Yes (Desktop, Tablet, Mobile)", m: "App screenshots only" },
                                            { f: "Export moodboards / Search history", i: "Yes", m: "Limited / No" },
                                            { f: "Web design & Mobile app references", i: "Yes (Both)", m: "Mobile focused" },
                                            { f: "Free plan", i: "15 searches/day, 1 moodboard, 1 audit", m: "Limited free, then $12.99" },
                                            { f: "Lifetime deal", i: "$199 one-time (unlimited)", m: "Not available" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${row.highlight ? 'bg-[#41F461]/5' : (idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]')}`}>
                                                <td className={`p-4 pl-6 text-gray-700 ${row.highlight ? 'border-l-4 border-l-[#41F461]' : ''}`}>{row.f}</td>
                                                <td className="p-4 text-center border-l border-gray-200 text-gray-900 flex items-center justify-center gap-2">
                                                    <span className="text-[#41F461] font-bold">✓</span> {row.i}
                                                </td>
                                                <td className="p-4 text-center border-l border-gray-200 text-gray-500">{row.m}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 5. The 5 Features Mobbin Does Not Have (Toggle Layout) */}
                        <section className="max-w-[1400px] mx-auto pt-64 border-t border-gray-200 scroll-mt-32">
                            <div className="text-center mb-16 px-4">
                                <h2 className="text-4xl md:text-5xl font-medium text-[#001A2C] mb-12" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>
                                    What Inspo AI does that Mobbin <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>cannot</span>
                                </h2>

                                {/* Feature Toggle Tabs */}
                                <div className="relative inline-flex items-center bg-[#F1F3F5] rounded-full p-1 shadow-sm overflow-hidden md:overflow-visible overflow-x-auto no-scrollbar max-w-full">
                                    {mobbinFeaturesList.map((feature) => {
                                        const isActive = activeFeature === feature;
                                        return (
                                            <button
                                                key={feature}
                                                onClick={() => setActiveFeature(feature)}
                                                className={`relative z-10 px-6 py-3.5 text-sm font-medium transition-colors duration-300 whitespace-nowrap rounded-full ${isActive ? "text-white" : "text-[#7D8994] hover:text-[#1A1A1A]"
                                                    }`}
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activePodMobbin"
                                                        className="absolute inset-0 bg-[#001A2C] rounded-full -z-10 shadow-[0_4px_12px_rgba(0,26,44,0.25)]"
                                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                                {feature}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="px-4">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeFeature}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="mt-8 min-h-[520px] rounded-[48px] overflow-hidden grid lg:grid-cols-2 shadow-2xl relative"
                                    >
                                        {/* Background Image with Lazy Loading Support */}
                                        <img
                                            src={isMobile ? activeContent.mobileBg : activeContent.bg}
                                            alt="Feature preview"
                                            loading="lazy"
                                            decoding="async"
                                            className="absolute inset-0 w-full h-full object-cover z-0"
                                            style={{
                                                objectPosition: isMobile ? "bottom center" : "center"
                                            }}
                                        />
                                        {/* Grain effect overlay */}
                                        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                                            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

                                        <div className="flex flex-col items-center lg:items-start lg:justify-center p-7 md:p-14 lg:p-18 relative z-10 text-center lg:text-left bg-black/20 lg:bg-transparent min-h-[400px]">
                                            <motion.h3
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="text-[32px] md:text-[42px] lg:text-[46px] text-white leading-[1.1] mb-5 lg:mb-7 font-medium"
                                                style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}
                                            >
                                                {activeContent.title}
                                            </motion.h3>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="text-white/90 text-[16px] md:text-[18px] leading-relaxed max-w-[450px]"
                                                style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}
                                            >
                                                {activeContent.description}
                                            </motion.div>
                                        </div>

                                        <div className="relative min-h-[300px] lg:min-h-full">
                                            {/* Empty space for the background visual to be seen */}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </section>

                        {/* 6. Pricing Comparison */}
                        <section className="max-w-[1400px] mx-auto space-y-16 pt-32 border-t border-gray-200 scroll-mt-32">
                            <h2 className="text-4xl md:text-5xl font-medium text-[#001A2C] text-center" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Inspo AI pricing vs <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>Mobbin pricing</span></h2>
                            <div className="overflow-x-auto rounded-[32px] border border-gray-200 bg-white shadow-xl">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50/50">
                                            <th className="p-6 font-medium text-gray-500 w-1/5" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}></th>
                                            <th className="p-6 font-medium text-[#001A2C] text-center border-l border-gray-200" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Inspo AI Free</th>
                                            <th className="p-6 font-medium text-[#001A2C] text-center border-l border-gray-200" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Inspo AI Solo</th>
                                            <th className="p-6 font-medium text-[#001A2C] text-center border-l border-gray-200" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Inspo AI Team</th>
                                            <th className="p-6 font-medium text-[#10B981] text-center border-l border-gray-200 bg-[#10B981]/5" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Inspo AI Lifetime</th>
                                            <th className="p-6 font-medium text-gray-600 text-center border-l border-gray-200" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Mobbin Free</th>
                                            <th className="p-6 font-medium text-gray-600 text-center border-l border-gray-200" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Mobbin Pro</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[15px]" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>
                                        {[
                                            { f: "Price", i1: "$0 forever", i2: "$12/month", i3: "$39/month", i4: "$199 one-time", m1: "$0 (limited)", m2: "$12.99/month" },
                                            { f: "Searches", i1: "15/day", i2: "100/day", i3: "300/day", i4: "Unlimited", m1: "Limited browsing", m2: "Unlimited browsing" },
                                            { f: "Moodboards", i1: "1", i2: "10", i3: "Unlimited", i4: "Unlimited", m1: "N/A", m2: "N/A" },
                                            { f: "Design audits", i1: "1", i2: "5", i3: "50", i4: "Unlimited", m1: "N/A", m2: "N/A" },
                                            { f: "Brand scans", i1: "1", i2: "5", i3: "50", i4: "Unlimited", m1: "N/A", m2: "N/A" },
                                            { f: "Team members", i1: "N/A", i2: "N/A", i3: "1 + 2 members", i4: "N/A", m1: "N/A", m2: "N/A" },
                                            { f: "Creator Studio", i1: "N/A", i2: "N/A", i3: "Yes (Beta)", i4: "Yes", m1: "N/A", m2: "N/A" },
                                            { f: "Lifetime option", i1: "N/A", i2: "N/A", i3: "N/A", i4: "$199 once, no recurring", m1: "N/A", m2: "Not available" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                                                <td className="p-4 pl-6 text-gray-700">{row.f}</td>
                                                <td className="p-4 text-center border-l border-gray-200 text-gray-900">{row.i1}</td>
                                                <td className="p-4 text-center border-l border-gray-200 text-gray-900">{row.i2}</td>
                                                <td className="p-4 text-center border-l border-gray-200 text-gray-900">{row.i3}</td>
                                                <td className="p-4 text-center border-l border-[#10B981]/30 text-[#10B981] bg-[#10B981]/5 font-medium">{row.i4}</td>
                                                <td className="p-4 text-center border-l border-gray-200 text-gray-500">{row.m1}</td>
                                                <td className="p-4 text-center border-l border-gray-200 text-gray-500">{row.m2}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>
                                The <strong className="text-gray-900 font-medium">$199 lifetime deal</strong> is worth highlighting. Mobbin charges $12.99 every month with no lifetime option. After 16 months of Mobbin Pro, you have spent more than the Inspo AI lifetime price, and Inspo AI gives you 5 additional tools that Mobbin does not offer at any price.
                            </p>
                        </section>

                        {/* 7. Who Should Stay */}
                        <section className="max-w-4xl mx-auto space-y-16 py-[120px] border-t border-b border-gray-200 scroll-mt-32">
                            <h2 className="text-4xl md:text-5xl font-medium text-[#001A2C] text-center mb-[28px]" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>When Mobbin is still <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>the right choice</span></h2>
                            <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8 md:p-14 space-y-5 text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>
                                <p>
                                    Mobbin is the better choice if you only need a curated library of iOS and Android app screenshots with no other tools. If your workflow is strictly "browse mobile app screens, save to a collection, reference during design," Mobbin does that well. It has a large database of mobile app flows and a clean browsing experience.
                                </p>
                                <p className="text-gray-900 font-medium">
                                    Choose Inspo AI if you need any of the following: AI-powered search with natural language, moodboards with color palettes and font pairs, brand compliance auditing, competitor website analysis, AI design generation, real-time collaboration, or a lifetime pricing option.
                                </p>
                            </div>
                        </section>


                        {/* 9. FAQ Section */}
                        <section className="max-w-3xl mx-auto space-y-16 pt-32 border-t border-gray-200 scroll-mt-32" itemScope itemType="https://schema.org/FAQPage">
                            <h2 className="text-4xl md:text-5xl font-medium text-[#001A2C] text-center mb-16" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>Frequently Asked <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>Questions</span></h2>
                            <div className="space-y-16">
                                {[
                                    { q: "What is the best Mobbin alternative in 2026?", a: "Inspo AI is the best Mobbin alternative for designers who need more than a screenshot library. It offers AI-powered natural language search, collaborative moodboards with color palettes and font pairs, AI design auditing, competitor website brand scanning, and AI design generation. The free plan includes 15 searches per day with no credit card required." },
                                    { q: "Is Inspo AI free?", a: "Yes. Inspo AI has a free forever plan that includes 15 searches per day, 1 moodboard (up to 20 images), 1 design audit, 1 brand scan, 5 saved search history items, and live collaboration. Paid plans start at $12 per month for Solo and $39 per month for Team. A lifetime plan is available for $199 one-time." },
                                    { q: "What can Inspo AI do that Mobbin cannot?", a: "Inspo AI offers five capabilities Mobbin does not have: moodboard building with colors and fonts, AI design compliance auditing with a score out of 100, competitor website brand scanning that extracts colors, fonts, tech stack, pricing, and SEO data, AI design generation through Creator Studio, and real-time moodboard collaboration. Mobbin is limited to browsing and bookmarking app screenshots." },
                                    { q: "Does Inspo AI have mobile app references like Mobbin?", a: "Yes. Inspo AI search results include mobile app designs alongside web designs, landing pages, dashboards, and other design references. The AI search covers a broader range of design types than Mobbin's mobile-focused library." },
                                    { q: "Can I share Inspo AI moodboards with clients?", a: "Yes. Every moodboard generates a public link that anyone can view without creating an account. Clients and stakeholders see the full moodboard with images, color palettes, and font pairs. Mobbin collections cannot be shared publicly." },
                                    { q: "Does Inspo AI offer a lifetime deal?", a: "Yes. Inspo AI offers a $199 one-time lifetime plan that includes unlimited searches, all features unlocked, Creator Studio access, priority support, and early access to new features. There are no recurring charges. Mobbin does not offer a lifetime pricing option." },
                                    { q: "How does Inspo AI search compare to Mobbin search?", a: "Inspo AI uses AI natural language processing that understands design context. You can type \"bold SaaS hero with 3D illustration and dark gradient\" and get matching results. Filters stack by industry, style, font, and color simultaneously. Mobbin uses traditional category and screen-type filters without natural language understanding or multi-dimensional filtering." }
                                ].map((faq, i) => (
                                    <div key={i} className="space-y-3" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                        <h3 className="text-xl font-medium text-[#001A2C]" itemProp="name" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>{faq.q}</h3>
                                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                            <p className="text-lg text-gray-600 leading-relaxed" itemProp="text" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 10. Final CTA */}
                        <section className="max-w-4xl mx-auto pt-48 text-center space-y-16 relative overflow-hidden scroll-mt-32">
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#001A2C] mb-6 relative z-10" style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}>
                                Design research that does <span style={{ fontFamily: "'Relationship of Melodrame', cursive", fontWeight: "normal" }}>more</span> than browse.
                            </h2>
                            <p className="text-xl text-gray-600 relative z-10 max-w-2xl mx-auto" style={{ fontFamily: "'Neue Haas Grotesk Roman', sans-serif" }}>
                                Mobbin shows you screenshots. Inspo AI gives you a complete design research workspace: search, save, collaborate, audit, scan, and generate. All from one tool. Start free.
                            </p>

                            <div className="flex justify-center gap-4 mt-8 relative z-10">
                                <a
                                    href="https://app.inspoai.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#001A2C] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-colors shadow-lg inline-block"
                                    style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}
                                >
                                    Try It Free
                                </a>
                                <Link
                                    to="/pricing"
                                    className="bg-white border border-gray-200 text-[#001A2C] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors inline-block shadow-sm"
                                    style={{ fontFamily: "'Neue Haas Grotesk Medium', sans-serif" }}
                                >
                                    See Pricing
                                </Link>
                            </div>

                            <div className="flex justify-center items-center gap-6 mt-6 pb-24 text-sm text-gray-500 relative z-10">
                                <span className="flex items-center gap-2"><span className="text-[#10B981]">✓</span> Free forever plan</span>
                                <span className="flex items-center gap-2"><span className="text-[#10B981]">✓</span> No credit card</span>
                                <span className="flex items-center gap-2"><span className="text-[#10B981]">✓</span> 180+ designers in beta</span>
                            </div>

                            {/* Background Browser Frame Visual */}
                            <div className="absolute inset-x-0 bottom-0 top-1/2 -z-0 opacity-40 mt-20 blur-sm pointer-events-none px-4 md:px-12">
                                <div className="w-full h-full rounded-t-[32px] border border-gray-200 bg-white shadow-2xl overflow-hidden flex flex-col">
                                    {/* Browser Header */}
                                    <div className="h-12 border-b border-gray-100 bg-gray-50 flex items-center px-6 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                                        <div className="mx-auto w-1/3 h-6 rounded bg-white border border-gray-200" />
                                    </div>
                                    {/* Temporary Placeholder */}
                                    <div className="flex-1 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-12">
                                        <div className="text-gray-400 text-xl tracking-widest uppercase">[FINAL CTA BROWSER VISUAL]</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MobbinAlternative;
