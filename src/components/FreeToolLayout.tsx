import Navbar from "./Navbar";
import Footer from "./Footer";
import DotBackground from "./DotBackground";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface FreeToolLayoutProps {
    children: ReactNode;
    toolName: string;
    relatedTools?: { name: string; href: string }[];
}

const FreeToolLayout = ({ children, toolName, relatedTools }: FreeToolLayoutProps) => {
    return (
        <>
            <DotBackground />
            <div className="min-h-screen relative z-10">
                <Navbar />
                <main className="pt-28 pb-20">
                    <div className="container-narrow px-4 sm:px-6">
                        {/* Breadcrumb */}
                        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                            <Link to="/free-tools" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                                <ArrowLeft size={14} />
                                Free Tools
                            </Link>
                            <span>/</span>
                            <span className="text-foreground font-medium">{toolName}</span>
                        </nav>

                        {children}

                        {/* SEO Content Block */}
                        <section className="mt-16 bg-secondary/30 rounded-[32px] p-8 md:p-12 border border-border">
                            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-4">Why use our free design tools?</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm">✓</span>
                                        100% Free Forever
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">No hidden fees, no credit card required, and absolutely no premium lockouts. Everything works completely free, forever.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm">✓</span>
                                        Zero Ads. No Login.
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">We respect your focus. You won't see annoying banners or popups here. No account creation or email signup required to use the tools.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm">✓</span>
                                        Private & Secure
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Processing happens right in your browser. Your images, colors, and design data are never uploaded to our servers. Fast and completely private.</p>
                                </div>
                            </div>
                        </section>

                        {/* Related Tools */}
                        {relatedTools && relatedTools.length > 0 && (
                            <section className="mt-24 border-t border-border/40 pt-16">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-8 tracking-tight">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {relatedTools.map((tool) => (
                                        <Link
                                            key={tool.href}
                                            to={tool.href}
                                            className="bg-card rounded-2xl border border-border p-5 text-sm font-medium text-foreground hover:shadow-inspo-lg hover:-translate-y-0.5 transition-all duration-300 text-center"
                                        >
                                            {tool.name}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* CTA */}
                        <section className="mt-24 text-center">
                            <div className="bg-gradient-to-br from-[#0A1A2F] to-[#1a3a5c] rounded-[32px] p-12 md:p-16">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Need more design power?</h2>
                                <p className="text-white/60 text-base max-w-md mx-auto mb-8">
                                    Inspo AI gives you AI search, moodboards, brand audits, and competitor scanning — all in one workspace.
                                </p>
                                <a
                                    href="https://app.inspoai.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-[#0A1A2F] text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-medium"
                                    style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, textTransform: 'uppercase' }}
                                >
                                    Try Inspo AI Free
                                </a>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default FreeToolLayout;
