import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <main className="flex-1 py-16 md:py-24 max-w-4xl mx-auto w-full px-4 sm:px-6">
                <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-[-0.03em] mb-8 text-foreground">
                    Terms of Service
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <p className="mb-6">
                        <strong>Last Updated:</strong> February 20, 2026
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-6">
                        By accessing and using Inspo AI, you accept and agree to be bound by the terms and provision of this agreement.
                        In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable
                        to such services. For any questions, you can contact us at <a href="mailto:contact@inspoai.io" className="text-primary hover:underline">contact@inspoai.io</a>.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. Provision of Services</h2>
                    <p className="mb-6">
                        You agree and acknowledge that Inspo AI is entitled to modify, improve or discontinue any of its services at its sole discretion
                        and without notice to you even if it may result in you being prevented from accessing any information contained in it.
                    </p>

                    {/* Add more ToS sections here as needed */}
                    <p className="mb-6 italic mt-12 text-sm">
                        [This is a structural placeholder for the full Terms of Service content. Replace with finalized legal copy.]
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
