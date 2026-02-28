import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col pt-20" style={{ fontFamily: 'NeueHaas, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <SEO
                title="Privacy Policy | Inspo AI"
                description="Read the Inspo AI Privacy Policy. Learn how we collect, use, and protect your personal data when you use our AI design workspace, moodboard builder, and brand tools."
                keywords="Inspo AI privacy policy, data protection, user privacy, design tool privacy"
            />
            <Navbar />
            <main className="flex-1 py-16 md:py-24 max-w-4xl mx-auto w-full px-4 sm:px-6 legal-content">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-8 text-foreground">
                    PRIVACY POLICY
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <p className="mb-2">
                        <strong>Last Updated:</strong> February 20, 2026
                    </p>
                    <p className="mb-8">
                        <strong>Website:</strong> inspoai.io
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-6">
                        Welcome to Inspo AI. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit inspoai.io and use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Service.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
                    <p className="font-medium text-foreground mb-2">Information You Provide Directly:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Account registration details (name, email address, password)</li>
                        <li>Payment and billing information (processed securely through third-party payment providers)</li>
                        <li>Prompts, inputs, and content you submit to the Service</li>
                        <li>Communications you send to us, including support requests</li>
                    </ul>

                    <p className="font-medium text-foreground mb-2 mt-6">Information Collected Automatically:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                        <li>Log data (IP address, browser type, pages visited, time and date of visits)</li>
                        <li>Device information (operating system, device identifiers)</li>
                        <li>Usage data (features used, interactions with the Service, session duration)</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                        <li>Provide, operate, and maintain the Service</li>
                        <li>Process transactions and manage your account</li>
                        <li>Improve, personalize, and expand the Service</li>
                        <li>Understand and analyze how you use the Service</li>
                        <li>Develop new features and functionality</li>
                        <li>Communicate with you about updates, security alerts, and support</li>
                        <li>Detect and prevent fraud, abuse, and security incidents</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
                    <p className="mb-4">
                        Inspo AI uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. We use:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li><strong>Essential cookies</strong> — necessary for the Service to function</li>
                        <li><strong>Analytics cookies</strong> — to understand how users interact with the Service</li>
                        <li><strong>Preference cookies</strong> — to remember your settings and preferences</li>
                    </ul>
                    <p className="mb-6">
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the Service may not function properly if cookies are disabled.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. How We Share Your Information</h2>
                    <p className="mb-4">
                        We do not sell your personal information. We may share your information with:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                        <li><strong>Service providers</strong> — third parties who assist in operating the Service (e.g., hosting, analytics, payment processing), bound by confidentiality obligations</li>
                        <li><strong>Legal authorities</strong> — when required by law, court order, or governmental authority</li>
                        <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, in which case we will notify you</li>
                        <li><strong>With your consent</strong> — for any other purpose with your explicit consent</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. AI Prompts and Generated Content</h2>
                    <p className="mb-6">
                        Prompts and inputs you submit may be processed by AI models to generate responses. We may use aggregated and anonymized interaction data to improve our AI systems. We do not use your personal prompts to train third-party AI models without your consent. Please avoid submitting sensitive personal information in your prompts.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Data Retention</h2>
                    <p className="mb-6">
                        We retain your personal information for as long as your account is active or as needed to provide the Service. You may request deletion of your account and associated data at any time by contacting us at <a href="mailto:contact@inspoai.io" className="text-primary hover:underline">contact@inspoai.io</a>. We will respond to deletion requests within 30 days, subject to any legal retention obligations.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Data Security</h2>
                    <p className="mb-6">
                        We implement industry-standard technical and organizational security measures to protect your information, including encryption, access controls, and secure servers. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Your Rights</h2>
                    <p className="mb-4">
                        Depending on your location, you may have the following rights regarding your personal data:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li><strong>Access</strong> — request a copy of the data we hold about you</li>
                        <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
                        <li><strong>Deletion</strong> — request deletion of your personal data</li>
                        <li><strong>Portability</strong> — request transfer of your data in a machine-readable format</li>
                        <li><strong>Objection</strong> — object to certain types of data processing</li>
                        <li><strong>Withdraw Consent</strong> — where processing is based on consent, withdraw it at any time</li>
                    </ul>
                    <p className="mb-6">
                        To exercise any of these rights, please contact us at <a href="mailto:contact@inspoai.io" className="text-primary hover:underline">contact@inspoai.io</a>.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Children's Privacy</h2>
                    <p className="mb-6">
                        The Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected data from a child under 13, we will take steps to delete that information promptly. If you believe we may have collected data from a child, please contact us immediately.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. Third-Party Services</h2>
                    <p className="mb-6">
                        Our Service may contain links to or integrations with third-party platforms. This Privacy Policy does not apply to those services. We encourage you to review the privacy policies of any third-party platforms you use in connection with our Service.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. International Data Transfers</h2>
                    <p className="mb-6">
                        Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy wherever it is processed.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">13. Changes to This Policy</h2>
                    <p className="mb-6">
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last Updated" date at the top of this page and, where appropriate, by sending you a notification. Your continued use of the Service after changes are posted constitutes acceptance of the updated policy.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">14. Contact Us</h2>
                    <p className="mb-2">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <ul className="list-none mb-6">
                        <li><strong>Email:</strong> <a href="mailto:contact@inspoai.io" className="text-primary hover:underline">contact@inspoai.io</a></li>
                        <li><strong>Website:</strong> <a href="https://inspoai.io" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">inspoai.io</a></li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
