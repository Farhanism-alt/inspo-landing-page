import { useState } from "react";
import FeatureToggle, { features } from "./FeatureToggle";
import { motion, AnimatePresence } from "framer-motion";

const featureContent = {
    "AI Design Search": {
        title: "AI Design Search",
        description: "Search millions of designs using natural language. Filter by industry, style, color, and font. Get AI-powered recommendations. Hit Surprise Me for unexpected inspiration.",
        visual: null,
        bg: "/ai-search.webp",
        mobileBg: "/mobile-ai-design-search.png",
    },
    "Moodboard Builder": {
        title: "Moodboard Builder",
        description: "Save any design to a moodboard. Organize by images, color palettes, and font pairs. Share with clients via public link. Export for presentations.",
        visual: null,
        bg: "/moodboard.webp",
        mobileBg: "/mobile-moodboard-builder.png",
    },
    "AI Design Audit": {
        title: "AI Design Audit",
        description: "Audit any design against brand guidelines. Check accessibility, color contrast, and brand alignment automatically.",
        visual: null,
        bg: "/ai-audit.webp",
        mobileBg: "/mobile-ai-design-audit.png",
    },
    "Brand Scanner": {
        title: "Brand Scanner",
        description: "Enter any website URL and extract its complete brand DNA. Colors, fonts, tech stack, pricing, SEO metadata, and more.",
        visual: null,
        bg: "/brand-scanner.webp",
        mobileBg: "/mobile-brand-scanner.png",
    },
    "Creator Studio": {
        title: "Creator Studio",
        description: "Generate new designs with AI chat. Design hero sections, landing pages, and components from text prompts.",
        visual: null,
        bg: "/creator-studio.jpg",
        mobileBg: "/mobile-creator-studio.png",
    },
    "Live Collaboration": {
        title: "Live Collaboration",
        description: "Collaborate in real-time with your team. Share feedback, make edits, and build designs together in one workspace.",
        visual: null,
        bg: "/live-collab.jpg",
        mobileBg: "/mobile-live-collaboration.png",
    },
};

const FeatureSection = () => {
    const [activeFeature, setActiveFeature] = useState(features[0]);
    const [isMobile, setIsMobile] = useState(false);

    // Initial check and resize listener for responsive backgrounds
    useState(() => {
        if (typeof window !== 'undefined') {
            const checkMobile = () => setIsMobile(window.innerWidth < 1024);
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }
    });

    const content = featureContent[activeFeature as keyof typeof featureContent];

    return (
        <section id="features" className="py-24 lg:py-32 bg-white overflow-hidden" aria-labelledby="features-heading">
            <div className="container px-6 md:px-16 lg:px-24 mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        id="features-heading"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-[42px] md:text-[64px] leading-[0.9] text-[#001A2C] mb-12"
                    >
                        Everything you need to design smarter
                    </motion.h2>

                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FeatureToggle
                            activeFeature={activeFeature}
                            onFeatureChange={setActiveFeature}
                        />
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFeature}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mt-16 min-h-[520px] rounded-[48px] overflow-hidden grid lg:grid-cols-2 shadow-2xl relative"
                    >
                        {/* Background Image with Lazy Loading Support */}
                        <img
                            src={isMobile ? content.mobileBg : content.bg}
                            alt={content.title}
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

                        <div className="flex flex-col items-center lg:items-start lg:justify-center p-8 md:p-20 relative z-10 text-center lg:text-left">
                            <motion.h3
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-[34px] md:text-[50px] text-white leading-[0.9] mb-6 lg:mb-8"
                                style={{ fontFamily: "'Relationship of Melodrame', cursive" }}
                            >
                                {content.title}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-white/80 text-[16px] md:text-[19px] leading-relaxed max-w-[418px]"
                            >
                                {content.description}
                            </motion.p>
                        </div>

                        <div className="relative min-h-[300px] lg:min-h-full">
                            {content.visual}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FeatureSection;
