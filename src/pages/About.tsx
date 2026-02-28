import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col pt-20" style={{ fontFamily: 'NeueHaas, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <SEO
                title="About Inspo AI | Our Mission to Simplify Design Research"
                description="Learn about Inspo AI — the AI-powered design workspace built for designers, agencies, and brand teams. Our mission is to make design research faster, collaboration easier, and brand consistency measurable."
                keywords="about Inspo AI, Inspo AI team, AI design tool company, design research platform, design workspace for teams, Inspo AI mission"
            />
            <Navbar />
            <main className="flex-1 py-16 md:py-24 max-w-4xl mx-auto w-full px-4 sm:px-6 legal-content">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-4 text-foreground">
                    InspoAI — The Hackathon Origin Story
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mt-12">

                    <h2 className="text-2xl font-semibold text-foreground mb-4">What Is InspoAI?</h2>
                    <p className="mb-8">
                        InspoAI is an AI-powered design inspiration and search platform built for creatives. It lets designers, brand strategists, and creative agencies search across platforms like Behance, Dribbble, and Pinterest in one place — with smart filtering for typography, color schemes, and design language — all powered by AI.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mb-4">How It Started</h2>
                    <p className="mb-4">
                        InspoAI didn't begin as a startup. It began as a solution to a problem every designer knows too well — spending hours jumping between platforms just to find the right inspiration.
                    </p>
                    <p className="mb-4">
                        The idea was born inside Paperflite, during an internal hackathon. A small cross-functional team of designers and developers came together, built fast, and presented a product that impressed enough to win 2nd place — validating that the problem was real and the solution was worth pursuing.
                    </p>
                    <p className="mb-12">
                        What started as a hackathon project became the foundation of something bigger.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mb-6">The Team Behind It</h2>

                    <div className="space-y-8 mb-12">
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Mohamed Farhan — Design Lead & Co-Founder</h3>
                            <p className="mt-2">
                                Farhan led the vision and design direction for InspoAI. As a Senior Designer at Paperflite with deep experience in AI-curious product thinking and building in public, he brought the product's look, feel, and purpose together. InspoAI is an extension of everything he believes design tools should be.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground mb-4">The Hackathon Moment</h2>
                    <blockquote className="border-l-4 border-primary pl-4 py-2 italic bg-muted/30 rounded-r-lg mb-6 text-foreground">
                        "Our project focused on helping designers search for inspiration and build moodboards more efficiently, with AI integrated — a small step toward solving a real creative challenge."
                        <footer className="text-sm text-muted-foreground mt-2 font-medium not-italic">— Thiru Sharma, reflecting on the hackathon</footer>
                    </blockquote>
                    <p className="mb-12">
                        The team competed internally at Paperflite, presented their work, and walked away with 2nd prize. More importantly, they walked away with proof that InspoAI was solving a genuine pain point for the creative industry.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mb-4">From Hackathon to Product</h2>
                    <p className="mb-8">
                        The 2nd place finish wasn't the end — it was the beginning. What the team built under pressure in a hackathon became the proof of concept that InspoAI needed. The core idea has since evolved into a full platform with multi-source visual search, moodboard creation, AI design feedback, and smart filtering tools.
                    </p>

                    <div className="mt-16 text-center">
                        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">One Line to Remember</p>
                        <p className="text-2xl font-display font-medium text-foreground mt-2">
                            Built by designers. Powered by AI. Born in a hackathon.
                        </p>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
