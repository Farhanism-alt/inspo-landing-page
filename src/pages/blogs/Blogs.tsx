import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import DotBackground from "@/components/DotBackground";
import { ArrowRight } from "lucide-react";
import brandScannerImg from "@/assets/visuals/brand_scanner.png";

// Mock data for demonstration and easy future scaling
const blogs = [
    {
        id: "ai-design-inspiration-tool",
        title: "I Spent 3 Hours Searching for One Hero Section Reference. So I Built an AI Design Inspiration Tool.",
        excerpt: "Finding design inspiration in 2026 is broken. 5 platforms, 47 tabs, 2 hours wasted. Here is how AI search, moodboards, and brand intelligence fix it.",
        category: "Design & AI",
        date: "Today",
        author: {
            name: "Mohamed Farhan",
            role: "Co-Founder, Inspo AI",
            initials: "MF"
        },
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop", // High-quality design/workspace image
        featured: true,
        slug: "/blogs/ai-design-inspiration-tool"
    },
    {
        id: "competitor-brand-scanner-tool",
        title: "The Brand Scanner: Extract Competitor Web Design & SEO Data in 60 Seconds",
        excerpt: "Enter any URL to instantly extract a competitor’s complete brand DNA. Pull color hex codes, typography, tech stack, and SEO metadata.",
        category: "Marketing & Intelligence",
        date: "Today",
        author: {
            name: "Mohamed Farhan",
            role: "Co-Founder, Inspo AI",
            initials: "MF"
        },
        image: brandScannerImg,
        featured: false,
        slug: "/blogs/competitor-brand-scanner-tool"
    },
    {
        id: "real-time-design-collaboration-tools",
        title: "Real-Time Design Collaboration Tools: How Teams Build Moodboards Together in 2026",
        excerpt: "A practical guide to real-time design collaboration tools. How design teams align on creative direction using shared moodboards and live editing.",
        category: "Design Workflows",
        date: "Today",
        author: {
            name: "Mohamed Farhan",
            role: "Co-Founder, Inspo AI",
            initials: "MF"
        },
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        featured: false,
        slug: "/blogs/real-time-design-collaboration-tools"
    },
    // Future blogs can be added here easily
];

const Blogs = () => {
    return (
        <div className="min-h-screen flex flex-col pt-20" style={{ fontFamily: 'NeueHaas, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <SEO
                title="Inspo AI Blog | Design Inspiration, AI Workflows & Product Updates"
                description="Explore the Inspo AI blog for expert insights on AI-driven design workflows, UI/UX trends, prompt engineering for designers, and the latest platform updates."
                keywords="Inspo AI blog, AI design inspiration, UI/UX design trends, design workflow optimization, AI tools for designers, Mobbin alternative news"
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "name": "Inspo AI Blog",
                    "description": "Ideas, insights, and stories about design, AI, and building the future of creative workflows.",
                    "url": "https://inspoai.io/blogs",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Inspo AI",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://inspoai.io/assets/LogoInspo.svg"
                        }
                    }
                }}
            />
            <DotBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-1 py-16 md:py-24 max-w-6xl mx-auto w-full px-4 sm:px-6">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">Resources & Stories</p>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] mb-6 text-foreground">
                            The <span className="inspo-gradient-text">Inspo</span> Blog
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Ideas, insights, and stories about modern design, artificial intelligence, and building better creative workflows.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {blogs.map((blog) => (
                            <Link
                                key={blog.id}
                                to={blog.slug}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col bg-card rounded-[24px] border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="relative w-full aspect-[16/10] overflow-hidden">
                                    <div className="absolute inset-0 bg-background/10 mix-blend-overlay z-10"></div>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Glassmorphism Category Badge overlay */}
                                    <div className="absolute top-4 left-4 z-20 bg-background/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">{blog.category}</span>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                                        <span>{blog.date}</span>
                                        <span>•</span>
                                        <span>8 min read</span>
                                    </div>

                                    <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight text-xl md:text-2xl leading-tight line-clamp-3">
                                        {blog.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-5 border-t border-border/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#41F461] to-[#008CFF] flex items-center justify-center text-white font-bold text-xs shadow-sm ring-2 ring-background">
                                                {blog.author.initials}
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-foreground leading-tight">{blog.author.name}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{blog.author.role}</p>
                                            </div>
                                        </div>

                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                            <ArrowRight size={14} className="transition-transform group-hover:-rotate-45" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {/* More blogs can be added here in the future as standard grid items */}
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Blogs;
