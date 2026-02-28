import { motion } from "framer-motion";
import {
    Palette,
    Image as ImageIcon,
    Type,
    Code,
    Wrench,
    Contrast,
    Hash,
    PaintBucket,
    Droplet,
    TypeOutline,
    FileText,
    FileImage
} from "lucide-react";
import BlurReveal from "@/components/BlurReveal";
import ToolCard from "@/components/ToolCard";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DotBackground from "@/components/DotBackground";

const CATEGORIES = [
    {
        id: "color",
        title: "Color Tools",
        icon: Palette,
        tools: [
            {
                title: "Color Palette Generator",
                description: "Generate beautiful color palettes instantly. Lock your favorites and explore matching hues.",
                href: "/free-tools/color-palette-generator",
                icon: Palette,
                tag: "Generator"
            },
            {
                title: "Color Contrast Checker",
                description: "Ensure your text is readable. Test foreground and background colors against WCAG standards.",
                href: "/free-tools/color-contrast-checker",
                icon: Contrast,
                tag: "Utility"
            },
            {
                title: "HEX to RGB Converter",
                description: "Convert color formats between HEX, RGB, HSL, and CMYK with a single click.",
                href: "/free-tools/hex-to-rgb-converter",
                icon: Hash,
                tag: "Converter"
            }
        ]
    },
    {
        id: "typography",
        title: "Typography Tools",
        icon: Type,
        tools: [
            {
                title: "PX to REM Converter",
                description: "Quickly convert pixels to REM or EM units for scalable, accessible web typography.",
                href: "/free-tools/px-to-rem-converter",
                icon: TypeOutline,
                tag: "Calculator"
            },
            {
                title: "Lorem Ipsum Generator",
                description: "Generate custom placeholder text in a flash. Choose paragraphs, words, or sentences.",
                href: "/free-tools/lorem-ipsum-generator",
                icon: FileText,
                tag: "Generator"
            }
        ]
    },
    {
        id: "image",
        title: "Image Tools",
        icon: ImageIcon,
        tools: [
            {
                title: "SVG to PNG Converter",
                description: "Convert vector graphics (SVG) to raster images (PNG) completely offline in your browser.",
                href: "/free-tools/svg-to-png-converter",
                icon: FileImage,
                tag: "Converter"
            },
            {
                title: "Image Compressor",
                description: "Reduce image file sizes instantly without uploading to a server. 100% private.",
                href: "/free-tools/image-compressor",
                icon: ImageIcon,
                tag: "Utility"
            }
        ]
    },
    {
        id: "css",
        title: "CSS Generators",
        icon: Code,
        tools: [
            {
                title: "CSS Gradient Generator",
                description: "Create complex linear, radial, and conic gradients with a visual editor.",
                href: "/free-tools/css-gradient-generator",
                icon: PaintBucket,
                tag: "Generator"
            },
            {
                title: "Box Shadow Generator",
                description: "Visually design CSS box shadows with multiple layers, blur, and spread controls.",
                href: "/free-tools/box-shadow-generator",
                icon: Wrench,
                tag: "Generator"
            },
            {
                title: "Glassmorphism Generator",
                description: "Create frosted glass CSS effects with background blur and transparency.",
                href: "/free-tools/glassmorphism-generator",
                icon: Droplet,
                tag: "Generator"
            }
        ]
    }
];

const FreeToolsHub = () => {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://inspo.ai/free-tools/#webpage",
                "url": "https://inspo.ai/free-tools",
                "name": "Free Design Tools for Creatives | Inspo AI",
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://inspo.ai/#website",
                    "url": "https://inspo.ai",
                    "name": "Inspo AI"
                },
                "about": {
                    "@type": "Thing",
                    "name": "Free Design Tools"
                },
                "description": "A collection of 100% free, client-side design tools. Color generators, SVG converters, CSS utilities, and typography calculators built for designers and developers."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why are these tools completely free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We built these tools to give back to the design and developer community. They run entirely in your browser using client-side technologies, meaning we don't have server costs to process your files or generate code. That allows us to keep them 100% free, forever."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to sign up to use the tools?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. There are no paywalls, no email captures, and no account creation required. You can jump straight in and start using any tool immediately."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will I see disruptive ads?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely not. We despise cluttered interfaces packed with banner ads as much as you do. Our tools feature a clean, minimalist design focused entirely on the utility you need."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are my files and data secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, completely. Because all tools are executed client-side, your images, SVGs, and text are never uploaded to our servers. Everything happens privately on your own device."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEO
                title="Free Design Tools for Creatives | Inspo AI"
                description="A collection of 100% free, client-side design tools. Color generators, SVG converters, CSS utilities, and typography calculators built for designers and developers."
                keywords="free design tools, color palette generator, svg to png converter, css box shadow generator, lorem ipsum generator, px to rem calculator"
                schemaMarkup={schemaMarkup}
            />
            <DotBackground />
            <div className="min-h-screen relative z-10 flex flex-col">
                <Navbar />

                <main className="flex-1 pt-32 pb-24">
                    <div className="container-narrow px-6 md:px-16 lg:px-24 mx-auto">

                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block py-1 px-3 rounded-full bg-inspo-blue/10 text-inspo-blue text-sm font-semibold tracking-wide uppercase mb-6"
                            >
                                Always Free. Always Private.
                            </motion.span>

                            <BlurReveal as="h1" className="font-display text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] text-foreground mb-6 tracking-tight">
                                Design Tools <br />
                                <span className="inspo-gradient-text">for the Modern Workflow</span>
                            </BlurReveal>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
                            >
                                A curated collection of utilities built to speed up your design process.
                                No signup required. Everything runs locally in your browser for total privacy.
                            </motion.p>
                        </div>

                        {/* Tool Categories Grid */}
                        <div className="space-y-24">
                            {CATEGORIES.map((category, catIndex) => (
                                <section key={category.id} className="scroll-mt-32" id={category.id}>
                                    <div className="flex items-center gap-3 mb-8 border-b border-border/40 pb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                                            <category.icon size={24} className="text-primary" />
                                        </div>
                                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                                            {category.title}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {category.tools.map((tool, index) => (
                                            <ToolCard
                                                key={tool.href}
                                                {...tool}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* SEO Content Block / FAQs for High Traffic Conversion */}
                        <section className="mt-32 border-t border-border/40 pt-20 max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                                    Premium Design Tools. <br className="hidden sm:block" />
                                    <span className="text-muted-foreground">Zero Cost. Zero Hassle.</span>
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
                                    <h3 className="text-xl font-bold text-foreground mb-3">Why are these tools 100% free?</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        At Inspo AI, we believe foundational design utilities should be universally accessible. We built these high-quality, precise tools to help designers and developers work faster without hitting paywalls. There are no sneaky premium tiers for basic utility tasks.
                                    </p>
                                </div>
                                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
                                    <h3 className="text-xl font-bold text-foreground mb-3">Do I need to sign up or create an account?</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Absolutely not. We hate forced signups just as much as you do. You can use every single generator, converter, and calculator on this page instantly without providing an email address or creating a login credential.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                                        <h3 className="text-lg font-bold text-foreground mb-2">No Disruptive Ads</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Your design flow requires focus. We will never clutter these pages with banner ads, popups, or deceptive download buttons. Enjoy a clean, minimalist UI.
                                        </p>
                                    </div>
                                    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                                        <h3 className="text-lg font-bold text-foreground mb-2">Privacy-First Execution</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            When you convert an image or generate code, the processing happens completely locally in your browser. We do not upload your sensitive files to our servers.
                                        </p>
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

export default FreeToolsHub;
