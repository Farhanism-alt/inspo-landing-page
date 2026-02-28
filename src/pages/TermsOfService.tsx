import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
    return (
        <div className="min-h-screen flex flex-col pt-20" style={{ fontFamily: 'NeueHaas, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <SEO
                title="Terms of Service | Inspo AI"
                description="Read the Inspo AI Terms of Service. Understand the rules and conditions for using our AI design workspace, moodboard builder, brand audit, and competitor scanning tools."
                keywords="Inspo AI terms of service, terms and conditions, user agreement, design tool terms"
            />
            <Navbar />
            <main className="flex-1 py-16 md:py-24 max-w-4xl mx-auto w-full px-4 sm:px-6 legal-content">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-8 text-foreground">
                    TERMS AND CONDITIONS
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <p className="mb-2">
                        <strong>Last Updated:</strong> February 20, 2026
                    </p>
                    <p className="mb-8">
                        <strong>Website:</strong> inspoai.io
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-6">
                        By accessing and using Inspo AI ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. For any questions, you can contact us at <a href="mailto:contact@inspoai.io" className="text-primary hover:underline">contact@inspoai.io</a>.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Provision of Services</h2>
                    <p className="mb-6">
                        You agree and acknowledge that Inspo AI is entitled to modify, improve, or discontinue any of its services at its sole discretion and without notice to you, even if it may result in you being prevented from accessing any information contained in it. Inspo AI shall not be liable to you or any third party should it exercise its right to modify or discontinue the Service.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. User Accounts</h2>
                    <p className="mb-6">
                        To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. Inspo AI reserves the right to terminate accounts at its discretion.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Acceptable Use</h2>
                    <p className="mb-4">
                        You agree to use Inspo AI only for lawful purposes. You must not use the Service to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Generate, distribute, or publish content that is illegal, harmful, defamatory, obscene, or violates the rights of others</li>
                        <li>Attempt to reverse engineer, copy, or replicate the underlying AI models or technology</li>
                        <li>Use automated scripts or bots to access the Service in a manner that exceeds reasonable personal use</li>
                        <li>Upload or submit content that infringes on any third-party intellectual property rights</li>
                        <li>Engage in any activity that disrupts or interferes with the Service or its servers</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Intellectual Property</h2>
                    <p className="mb-4">
                        All content, technology, and materials provided through Inspo AI — including but not limited to the AI models, interface design, logos, and branding — are the exclusive property of Inspo AI and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
                    </p>
                    <p className="mb-6">
                        Content you generate using the Service remains yours, subject to the license you grant us below and any applicable laws regarding AI-generated content.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. User-Generated Content</h2>
                    <p className="mb-4">
                        By submitting prompts, inputs, or any content to Inspo AI, you grant us a non-exclusive, worldwide, royalty-free license to use, process, and store that content solely for the purpose of providing and improving the Service. We do not claim ownership of your inputs or outputs.
                    </p>
                    <p className="mb-6">
                        You represent and warrant that you have all necessary rights to any content you submit and that your content does not violate any third-party rights or applicable law.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. AI-Generated Content Disclaimer</h2>
                    <p className="mb-6">
                        Inspo AI uses artificial intelligence to generate content. All AI-generated outputs are provided for inspiration and creative assistance purposes only. We make no warranties regarding the accuracy, originality, or fitness for any particular purpose of generated content. You are solely responsible for reviewing, verifying, and using any content produced by the Service.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Limitation of Liability</h2>
                    <p className="mb-6">
                        To the fullest extent permitted by law, Inspo AI, its directors, employees, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service, even if we have been advised of the possibility of such damages. Our total liability to you for any claims arising from the use of the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Disclaimer of Warranties</h2>
                    <p className="mb-6">
                        The Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Third-Party Links and Services</h2>
                    <p className="mb-6">
                        The Service may contain links to third-party websites or integrate with third-party tools. Inspo AI has no control over the content or practices of these third parties and accepts no responsibility for them. We encourage you to review the privacy policies of any third-party services you access.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. Termination</h2>
                    <p className="mb-6">
                        We reserve the right to suspend or terminate your access to the Service at any time and for any reason, including breach of these Terms. Upon termination, all provisions that by their nature should survive will continue to apply, including intellectual property provisions and disclaimers.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. Governing Law</h2>
                    <p className="mb-6">
                        These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in the applicable territory.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">13. Changes to Terms</h2>
                    <p className="mb-6">
                        We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">14. Contact Us</h2>
                    <p className="mb-6">
                        For any questions regarding these Terms, please contact us at: <a href="mailto:contact@inspoai.io" className="text-primary hover:underline">contact@inspoai.io</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
