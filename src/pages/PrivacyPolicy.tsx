import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <main className="flex-1 py-16 md:py-24 max-w-4xl mx-auto w-full px-4 sm:px-6">
                <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-[-0.03em] mb-8 text-foreground">
                    Privacy Policy
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <p className="mb-6">
                        <strong>Last Updated:</strong> February 20, 2026
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. Introduction</h2>
                    <p className="mb-6">
                        Welcome to Inspo AI. We are committed to protecting your personal information and your right to privacy.
                        If you have any questions or concerns about our policy, or our practices with regards to your personal
                        information, please contact us at <a href="mailto:contact@inspoai.io" className="text-primary hover:underline">contact@inspoai.io</a>.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. Information We Collect</h2>
                    <p className="mb-6">
                        We collect personal information that you voluntarily provide to us when you register on the website,
                        express an interest in obtaining information about us or our products and services, when you participate
                        in activities on the website or otherwise when you contact us.
                    </p>

                    {/* Add more privacy policy sections here as needed */}
                    <p className="mb-6 italic mt-12 text-sm">
                        [This is a structural placeholder for the full Privacy Policy content. Replace with finalized legal copy.]
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
