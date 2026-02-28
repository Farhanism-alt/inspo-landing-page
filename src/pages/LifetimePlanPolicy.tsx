import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const LifetimePlanPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col pt-20" style={{ fontFamily: 'NeueHaas, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <SEO
                title="Lifetime Plan Policy | $199 One-Time Deal | Inspo AI"
                description="Understand the Inspo AI Lifetime Plan — a $199 one-time payment for unlimited access to all features including AI search, moodboards, design audits, brand scanning, and Creator Studio."
                keywords="Inspo AI lifetime plan, lifetime deal design tool, one-time payment design workspace, Inspo AI pricing, lifetime SaaS deal, unlimited design tool access"
            />
            <Navbar />
            <main className="flex-1 py-16 md:py-24 max-w-4xl mx-auto w-full px-4 sm:px-6 legal-content">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-8 text-foreground uppercase">
                    INSPO AI LIFETIME PLAN POLICY
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <p className="mb-2">
                        <strong>Last Updated:</strong> February 2026
                    </p>
                    <p className="mb-8">
                        <strong>Website:</strong> inspoai.io
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">01 — What's Included</h2>
                    <p className="mb-4">Everything you need. Nothing held back.</p>
                    <p className="mb-4">Your Lifetime plan unlocks the full power of Inspo AI from day one. Here is exactly what you get.</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Unlimited design searches across all categories, industries, and styles. No daily caps. No throttling.</li>
                        <li>Unlimited moodboards. Create, save, organize, and share as many as you need. No limits on items per board.</li>
                        <li>Live collaboration on all moodboards. Invite your team, clients, or collaborators to edit in real time.</li>
                        <li>Unlimited AI Design Audits. Upload your brand guidelines and audit as many designs as you want.</li>
                        <li>Unlimited Brand Scanner usage. Scan any website for colors, fonts, tech stack, pricing, and SEO data.</li>
                        <li>Priority support. Your requests are handled before free and monthly plan users.</li>
                        <li>Early access to every new feature. You will always be among the first to try what we build next.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">02 — Creator Studio</h2>
                    <p className="mb-4">Creator Studio Beta (Coming Mid 2026)</p>
                    <p className="mb-4">Creator Studio is our AI-powered design generation tool. Type a prompt and get production-ready HTML/CSS designs with live preview across desktop, tablet, and mobile frames.</p>
                    <p className="mb-4 text-foreground font-medium italic">Creator Studio is currently in development and will launch as a separate paid feature in mid-2026. It is not included in your Lifetime plan by default.</p>
                    <div className="bg-muted/30 p-6 rounded-2xl mb-6">
                        <p className="mb-2">As a Lifetime plan member, you will receive 20,000 Creator Studio credits at launch. These credits are a one-time bonus for early supporters.</p>
                        <p className="mb-0">Once your credits are used, additional usage will require a separate Creator Studio subscription. Pricing details will be shared before launch.</p>
                    </div>
                    <p className="mb-6">Creator Studio will also be available as a standalone add-on for all plan tiers when it launches.</p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">03 — Unlimited Search Policy</h2>
                    <p className="mb-4">Unlimited means unlimited. With one condition.</p>
                    <p className="mb-4">We are giving you truly unlimited searches at a one-time price. This is a significant investment on our end in API costs and infrastructure. We trust you to use it fairly.</p>
                    <p className="mb-4">Unlimited search is intended for personal and professional design work. It is not intended for automated scraping, bulk data extraction, reselling search results, or any form of programmatic access that bypasses normal product usage.</p>
                    <p className="mb-6">We ask that you use Inspo AI the way it was designed to be used: as a creative tool for real design work. If you do that, you will never hit a limit.</p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">04 — Early Access to New Features</h2>
                    <p className="mb-4">First in line. Always.</p>
                    <p className="mb-4">Your Lifetime plan gives you early access to every new feature we ship. You will be invited to try new tools, updates, and experiments before they reach the general user base.</p>
                    <p className="mb-6">However, early access does not mean free access. New features released after your purchase date (including but not limited to Creator Studio, API access, Chrome extensions, mobile apps, and enterprise tools) may require separate paid plans or add-on subscriptions. Your Lifetime plan permanently covers all features available at the time of your purchase.</p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">05 — Refund Policy</h2>
                    <p className="mb-4">24-hour refund window. No questions asked.</p>
                    <p className="mb-4">If Inspo AI is not what you expected, you can request a full refund within 24 hours of your purchase. No questions asked. No forms to fill. Just email us and we will process it immediately.</p>
                    <div className="bg-muted/30 p-6 rounded-2xl mb-6 text-foreground font-medium">
                        How to request a refund: Send an email to mohamedsiraj237@gmail.com within 24 hours of purchase with your account email and payment receipt. Refunds are processed within 3 to 5 business days.
                    </div>
                    <p className="mb-6">After the 24-hour window, all sales are final. The Lifetime plan is a one-time purchase and is non-refundable beyond this period.</p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">06 — Fair Use and Termination</h2>
                    <p className="mb-4">Play fair. Stay forever.</p>
                    <p className="mb-4">We built the Lifetime plan for designers and creative professionals who want long-term access to a powerful tool. We are committed to keeping it running and improving it. In return, we ask that you respect the platform and its community.</p>
                    <div className="bg-destructive/5 border border-destructive/10 p-6 rounded-2xl mb-6">
                        <p className="font-semibold text-destructive mb-2 uppercase tracking-wider text-xs">Termination Policy</p>
                        <p className="mb-0 text-muted-foreground text-sm">Inspo AI reserves the right to terminate your Lifetime plan without refund if we determine, at our sole discretion, that your account is being used in ways that violate these terms. This includes but is not limited to: automated scraping or bot-driven usage, reselling or redistributing access to third parties, bulk downloading of design assets for redistribution, any activity that degrades platform performance for other users, or creating multiple accounts to circumvent usage policies.</p>
                    </div>
                    <p className="mb-6">If your account is terminated for misuse, no refund will be issued regardless of when the original purchase was made. We will attempt to notify you before any termination unless the violation is severe or ongoing.</p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">07 — What Lifetime Does Not Include</h2>
                    <p className="mb-4">Full transparency on what is separate.</p>
                    <p className="mb-4">To avoid any confusion, here is what is not covered by your one-time Lifetime payment.</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Creator Studio (beyond your 20,000 bonus credits). This will be a separately priced feature.</li>
                        <li>Future premium features with dedicated infrastructure costs (API access, enterprise tools, mobile apps).</li>
                        <li>Dedicated enterprise support, SLAs, or custom integrations.</li>
                    </ul>
                    <p className="mb-8">Everything else, including unlimited search, unlimited moodboards, live collaboration, AI Design Audit, Brand Scanner, priority support, and early access, is yours permanently.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LifetimePlanPolicy;
