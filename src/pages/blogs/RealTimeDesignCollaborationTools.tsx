import DotBackground from "@/components/DotBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const RealTimeDesignCollaborationTools = () => {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Real-Time Design Collaboration Tools: How Teams Build Moodboards Together in 2026",
        "author": {
            "@type": "Person",
            "name": "Mohamed Farhan"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Inspo AI"
        },
        "description": "A practical guide to real-time design collaboration tools in 2026. How design teams align on creative direction using shared moodboards, live editing, and public sharing.",
        "keywords": ["real-time design collaboration tools", "design team collaboration", "collaborative moodboard tool", "design workflow tools", "creative collaboration platform"]
    };

    return (
        <>
            <SEO
                title="Real-Time Design Collaboration Tools: How Teams Build Moodboards Together in 2026 | Inspo AI Blog"
                description="Real-time design collaboration tools let teams build moodboards, align on creative direction, and share with clients from one workspace. Compare the best options in 2026."
                keywords="real-time design collaboration tools, design team collaboration, collaborative moodboard tool, design workflow tools, creative collaboration platform"
                schemaMarkup={schemaMarkup}
            />
            <DotBackground />
            <div className="min-h-screen flex flex-col pt-20" style={{ fontFamily: 'NeueHaas, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                <Navbar />

                <main className="flex-1 py-16 md:py-24 max-w-4xl mx-auto w-full px-4 sm:px-6 legal-content">
                    <header className="mb-12">
                        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">Design Workflows • 7 min read</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] mb-6 text-foreground leading-tight">
                            The Moodboard Was Wrong. Nobody Told Me Until Round 3.
                        </h1>
                        <div className="flex items-center gap-4 text-muted-foreground mb-10">
                            <p className="font-medium">By Mohamed Farhan, Co-Founder of Inspo AI</p>
                            <span>•</span>
                            <p>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>

                        <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden border border-border bg-muted/30 mb-8 shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                                alt="Design team collaborating together on laptops in a modern workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </header>

                    <article className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                        <h2 className="text-3xl font-semibold text-foreground mb-6">What are real-time design collaboration tools?</h2>
                        <p className="mb-4">
                            <strong>Real-time design collaboration tools</strong> let multiple team members work on the same creative assets simultaneously. Instead of passing files back and forth through email or Slack, everyone edits at the same time and sees changes instantly.
                        </p>
                        <p className="mb-8">
                            For design research and moodboarding, this means teams can search for inspiration, curate references, add color palettes and typography, and align on visual direction together, all from one shared workspace. Inspo AI offers <Link to="/features/live-collaboration" className="text-primary hover:underline">real-time moodboard collaboration</Link> with public sharing links for stakeholders who do not need an account.
                        </p>

                        <h2 className="text-3xl font-semibold text-foreground mb-6 mt-12">The Slack thread that costs 3 revision rounds</h2>
                        <p className="mb-4">Here is a conversation that happens on every creative team at least once a month.</p>
                        <p className="mb-4 p-6 bg-muted/30 border border-border rounded-xl">
                            Designer sends a moodboard. Art director replies: "Love the direction. Maybe warmer tones?" Designer updates it. Sends the new version. The client replies to the <em>old</em> version: "This feels too cold." The designer says "I already updated it, check the new link." The client cannot find the new link. The project manager screenshots the wrong version and puts it in the brief. The developer builds from the screenshot.
                        </p>
                        <p className="mb-4">
                            Round 1 of the actual design comes back. Everyone says it looks nothing like what they imagined. Because everyone was imagining something different. The moodboard was a screenshot dump in Google Docs. Nobody was looking at the same version. And the visual direction was described in Slack messages, not shown in a shared visual workspace.
                        </p>
                        <p className="mb-4">
                            Three revision rounds later, the deadline is tomorrow, and the final design is a compromise nobody loves.
                        </p>
                        <p className="mb-8 font-medium text-foreground text-xl">
                            This is not a design problem. It is a collaboration problem. The designer's skills were never the issue. The issue was that the team never truly aligned on the creative direction before pixel work started. And the tools they used to "collaborate" were email, Slack, and static documents that went stale the moment someone hit send.
                        </p>

                        <div className="my-10 w-full rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop"
                                alt="Team members pointing at screens trying to align on creative direction"
                                className="w-full h-auto object-cover max-h-[500px]"
                                loading="lazy"
                            />
                            <p className="text-sm text-center text-muted-foreground mt-3 mb-2 px-4">Static documents and endless Slack threads lead directly to design misalignment.</p>
                        </div>

                        <h2 className="text-3xl font-semibold text-foreground mb-6 mt-12">Why design research needs real-time collaboration</h2>
                        <p className="mb-4">
                            Design collaboration tools have existed for years. <Link to="/compare/inspo-ai-vs-miro" className="text-primary hover:underline">Figma changed how teams design together. Miro changed how teams brainstorm together.</Link> But there is a gap in the workflow that neither of them fully covers: <strong>the research and direction phase that happens before design work begins.</strong>
                        </p>
                        <p className="mb-4">
                            This is the phase where someone searches for inspiration. Finds references. Curates them into a moodboard. Picks colors. Picks fonts. Gets alignment from the art director, the client, or the marketing lead. <em>Only after this phase is complete</em> should the designer open Figma and start laying out pixels.
                        </p>
                        <p className="mb-4">
                            The problem is that most teams do this phase with the wrong tools. They use Pinterest boards that mix personal pins with project references. They use Google Docs with pasted screenshots that have no color palette or typography context. They use Slack threads where moodboard feedback gets buried under project updates and lunch plans.
                        </p>
                        <p className="mb-8 font-medium">
                            None of these are real-time. None of them are designed for visual curation. And none of them give stakeholders a clean, professional view of the creative direction.
                        </p>

                        <h2 className="text-3xl font-semibold text-foreground mb-6 mt-12">What real-time design collaboration actually looks like</h2>
                        <p className="mb-6">Real-time collaboration for design research means three things happening at the same time.</p>

                        <div className="space-y-8 pl-4 border-l-4 border-primary/40 mb-10">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">1. Multiple people searching, curating, and prompting simultaneously</h3>
                                <p>One team member searches for hero section references. Another explores typography options. A third drops in an AI prompt to instantly generate a custom lifestyle image from scratch. All of their findings go into the same moodboard. No merging. No "which version is latest." One moodboard, always current, with every team member's contributions appearing in real time.</p>
                                <p className="mt-2 text-sm text-muted-foreground">At Inspo AI, this works through Socket.IO. When one person adds an image (whether searched or AI-generated) to a moodboard, every other collaborator sees it appear instantly. When someone removes a reference or rearranges the layout, the change syncs across all connected sessions. No save button. No refresh. Just live editing.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">2. Color and typography alongside images</h3>
                                <p>A <Link to="/features/moodboard-builder" className="text-primary hover:underline">moodboard</Link> that only contains images is half a moodboard. The visual direction also includes the color palette and the font pairings. When a team aligns on "this is the vibe," they need to agree on specific hex codes and specific typefaces, not just the general mood.</p>
                                <p className="mt-2 text-sm text-muted-foreground">Inspo AI moodboards have three sections: images, color palettes, and font pairs. The design references show the visual language. The color swatches show the exact palette (navy #0F1B3D, gold #C9A84C, cream #FAF7F2). The font pairs show the typography direction (Cabinet Grotesk for headlines, Instrument Serif for body). When a stakeholder views this moodboard, they see a complete creative direction, not just a pile of screenshots.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">3. Sharing without requiring accounts</h3>
                                <p>The biggest friction in creative collaboration is access. You send a moodboard link. The client does not have an account. They need to sign up. They forget their password. They ask you to just email the screenshots. Suddenly your carefully curated moodboard is a set of JPEG attachments with no context.</p>
                                <p className="mt-2 text-sm text-muted-foreground">Every moodboard in Inspo AI generates <Link to="/solutions/creative-collaboration" className="text-primary hover:underline">public sharing links</Link>. Click it and you see the full moodboard with images, colors, and fonts. No login. No sign-up form. No app install. Send the link in an email, drop it in a Slack thread, or paste it in a project brief. Anyone with the link sees the same thing. This removes the number one excuse for misalignment: "I did not see the latest version."</p>
                            </div>
                        </div>

                        <div className="my-10 w-full rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1400&auto=format&fit=crop"
                                alt="Modern collaborative moodboard interface showing real-time multi-user cursor tracking"
                                className="w-full h-auto object-cover max-h-[500px]"
                                loading="lazy"
                            />
                            <p className="text-sm text-center text-muted-foreground mt-3 mb-2 px-4">Creating a single source of truth for visual direction, complete with colors and typography.</p>
                        </div>

                        <h2 className="text-3xl font-semibold text-foreground mb-6 mt-12">How it fits into a real team workflow</h2>
                        <p className="mb-4">Here is how a 4-person creative team uses real-time collaboration on a real project.</p>

                        <div className="space-y-6 mb-8 bg-muted/20 p-6 rounded-2xl border border-border/50">
                            <p><strong>Monday morning.</strong> The brief comes in: redesign the landing page for a B2B fintech client. The project lead creates a moodboard in Inspo AI called "FinServ Rebrand Direction."</p>
                            <p>The senior designer searches for "fintech landing page dark mode minimal" and saves the best results to the moodboard. At the same time, the junior designer searches for "financial services color palette navy gold" and adds color swatches. The art director joins the same moodboard and starts removing references that do not fit the client's brand personality. All three see each other's changes in real time.</p>
                            <p>By Monday afternoon, the moodboard has 8 curated design references, a locked-in color palette of 5 colors, and 2 font pair options. The project lead shares the public link with the client.</p>
                            <p><strong>Tuesday morning.</strong> The client views the moodboard on their phone during a commute. No app download needed. They reply: "Love direction 1. Can we try warmer gold instead of bright gold?" The designer updates the color swatch from #C9A84C to #B8860B. The client refreshes the link and sees the change.</p>
                            <p><strong>Tuesday afternoon.</strong> The designer opens Figma and starts designing. The direction is clear. The colors are defined. The fonts are chosen. Everyone agreed before the first pixel was placed.</p>
                        </div>

                        <p className="mb-8 font-medium text-foreground text-xl border-l-4 border-primary pl-4 py-2">
                            That is what real-time design collaboration looks like. Alignment happens before design, not after three rounds of revisions.
                        </p>

                        <h2 className="text-3xl font-semibold text-foreground mb-6 mt-12">Comparing real-time design collaboration tools in 2026</h2>
                        <p className="mb-4">Not every design tool offers real-time collaboration for the research and moodboarding phase. Here is how the most common tools compare.</p>

                        <div className="overflow-x-auto mb-8 relative rounded-xl border border-border">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-muted text-foreground uppercase">
                                    <tr>
                                        <th className="px-4 py-3 border-b border-border">Tool</th>
                                        <th className="px-4 py-3 border-b border-border text-center">Real-time editing</th>
                                        <th className="px-4 py-3 border-b border-border text-center">Moodboard with colors and fonts</th>
                                        <th className="px-4 py-3 border-b border-border text-center">Public sharing (no login)</th>
                                        <th className="px-4 py-3 border-b border-border text-center">AI Search & Generation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-primary/5 font-medium text-foreground">
                                        <td className="px-4 py-4 border-b border-border font-bold">Inspo AI</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-green-600 dark:text-green-400 font-bold">Yes (Socket.IO)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-green-600 dark:text-green-400 font-bold">Yes (images + palettes + font pairs)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-green-600 dark:text-green-400 font-bold">Yes (public link)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-green-600 dark:text-green-400 font-bold">Yes (Search & Gen)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-4 border-b border-border font-medium">Figma / FigJam</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-yellow-600 dark:text-yellow-500">Partial (manual setup)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (view-only links)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr className="bg-muted/30">
                                        <td className="px-4 py-4 border-b border-border font-medium">Miro</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-yellow-600 dark:text-yellow-500">Partial (template-based)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (view-only links)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-4 border-b border-border font-medium">Canva</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (team workspaces)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-yellow-600 dark:text-yellow-500">Partial (brand kit, manual)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (public link, watermarked on free)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-yellow-600 dark:text-yellow-500">Partial (Gen only)</td>
                                    </tr>
                                    <tr className="bg-muted/30">
                                        <td className="px-4 py-4 border-b border-border font-medium">Milanote</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (board collaboration)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-green-600 dark:text-green-400">Yes (images, colors, text)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (public boards)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-4 border-b border-border font-medium">Notion</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-yellow-600 dark:text-yellow-500">Partial (galleries, databases)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (public pages)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr className="bg-muted/30">
                                        <td className="px-4 py-4 border-b border-border font-medium">Pinterest</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No (individual boards)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No (images only)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-yellow-600 dark:text-yellow-500">Partial (board links)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-4 border-b border-border font-medium">Dribbble</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No (portfolio only)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (project links)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr className="bg-muted/30">
                                        <td className="px-4 py-4 border-b border-border font-medium">Behance</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No (project presentation)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (project links)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-4 border-b border-border font-medium">Mural</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-yellow-600 dark:text-yellow-500">Partial (template-based)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (visitor access)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr className="bg-muted/30">
                                        <td className="px-4 py-4 border-b border-border font-medium">InVision</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (Freehand)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-yellow-600 dark:text-yellow-500">Partial (mood boards feature)</td>
                                        <td className="px-4 py-4 border-b border-border text-center">Yes (share links)</td>
                                        <td className="px-4 py-4 border-b border-border text-center text-red-500">No</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-4 font-medium">Adobe Express</td>
                                        <td className="px-4 py-4 text-center">Yes (team projects)</td>
                                        <td className="px-4 py-4 text-center text-yellow-600 dark:text-yellow-500">Partial (brand assets)</td>
                                        <td className="px-4 py-4 text-center">Yes (public link)</td>
                                        <td className="px-4 py-4 text-center text-yellow-600 dark:text-yellow-500">Partial (Gen only)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mb-4">
                            Figma and Miro are powerful collaboration tools, but they are designed for design execution and brainstorming, not for design research and inspiration curation. Building a moodboard in Figma means manually placing screenshots on a canvas. There are no integrated search, no auto-extracted color palettes, and no font pair sections.
                        </p>
                        <p className="mb-8">
                            Inspo AI is the only tool that combines <Link to="/features/ai-design-search" className="text-primary hover:underline">AI-powered design search</Link> with real-time collaborative moodboards that include color palettes and font pairs, plus public sharing links for stakeholders.
                        </p>

                        <h2 className="text-3xl font-semibold text-foreground mb-6 mt-12">The hidden cost of async design alignment</h2>
                        <p className="mb-4">
                            Most teams do not measure how much time they lose to creative misalignment. But the math is simple.
                        </p>
                        <p className="mb-4">
                            One revision round on a landing page design takes 1 to 2 days. That includes the designer making changes, uploading the new version, stakeholders reviewing, and feedback being consolidated. If misalignment causes 2 extra revision rounds (which is average when the research phase was done async), that is 2 to 4 days of lost time per project.
                        </p>
                        <p className="mb-4">
                            A mid-level designer billing at $100 per hour loses 16 to 32 hours per project to avoidable revisions. Multiply that across 4 projects per month and you have $6,400 to $12,800 in wasted capacity monthly. For an agency billing at $150 per hour, those numbers are $9,600 to $19,200.
                        </p>
                        <p className="mb-4 text-foreground font-medium">
                            The fix is not a better designer. It is a better alignment process. Real-time design collaboration tools that get everyone looking at the same visual direction before work begins are the single highest-ROI investment a creative team can make.
                        </p>
                        <p className="mb-12">
                            The <Link to="/pricing" className="text-primary hover:underline">Inspo AI Team plan</Link> costs $39 per month for 3 seats. That is less than half an hour of a senior designer's time. If it prevents even one extra revision round per month, the ROI is 100x.
                        </p>

                        <hr className="my-12 border-border" />

                        <div className="bg-muted/30 rounded-3xl p-8 md:p-10 border border-border mb-12" id="faq">
                            <h2 className="text-3xl font-semibold text-foreground mb-8">Frequently Asked Questions</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">What are real-time design collaboration tools?</h3>
                                    <p>Real-time design collaboration tools let multiple team members work on the same creative assets simultaneously. Changes appear instantly for all collaborators. For design research, this means teams can build moodboards together with shared references, color palettes, and font pairs, and share the result with stakeholders through public links.</p>
                                </div>

                                <div className="border-t border-border pt-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2">What is the best real-time collaboration tool for moodboards?</h3>
                                    <p>Inspo AI is the best tool for real-time moodboard collaboration in 2026. It combines AI-powered design search with live collaborative editing, integrated color palettes and font pairs, and public sharing links. Unlike Figma or Miro, it is purpose-built for the design research and direction phase, not design execution.</p>
                                </div>

                                <div className="border-t border-border pt-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2">Can clients view moodboards without creating an account?</h3>
                                    <p>On Inspo AI, yes. Every moodboard generates a public link that anyone can view without signing up. Clients and stakeholders see the full moodboard including images, color palettes, and font pairs. This removes the friction of requiring external collaborators to create accounts.</p>
                                </div>

                                <div className="border-t border-border pt-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2">How does real-time collaboration reduce design revisions?</h3>
                                    <p>When the entire team, including the client, aligns on visual direction before design work begins, the first design draft is already close to the approved direction. This typically reduces revision rounds from 3 to 4 down to 1 to 2, saving 2 to 4 days per project and thousands of dollars in designer time.</p>
                                </div>

                                <div className="border-t border-border pt-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2">Do I need a paid plan for real-time collaboration on Inspo AI?</h3>
                                    <p>No. Real-time collaboration is included in the free plan. The free plan includes 15 searches per day, 1 moodboard, and live collaboration. The Team plan at $39 per month adds 3 seats, 300 searches per day, unlimited moodboards, 20 share links, and 50 <Link to="/features/ai-design-audit" className="text-primary hover:underline">design audits</Link>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center bg-card shadow-sm border border-border rounded-3xl p-10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(65,244,97,0.05)] to-[rgba(0,140,255,0.05)] opacity-50 pointer-events-none"></div>
                            <h3 className="text-3xl font-display font-medium text-foreground mb-4 relative z-10" style={{ fontFamily: '"Relationship of Melodrame", cursive' }}>
                                Stop sending static moodboards that go stale.
                            </h3>
                            <p className="text-xl text-muted-foreground mb-8 relative z-10">
                                Build them together, live.
                            </p>
                            <a href="https://app.inspoai.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-4 text-base font-medium transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring relative z-10 shimmer-btn">
                                Try Inspo AI Free
                            </a>
                        </div>
                    </article>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default RealTimeDesignCollaborationTools;
