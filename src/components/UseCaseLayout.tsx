import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import DotBackground from "./DotBackground";
import { ReactNode } from "react";

interface UseCaseLayoutProps {
    children: ReactNode;
}

const UseCaseLayout = ({ children }: UseCaseLayoutProps) => {
    return (
        <>
            <DotBackground />
            <div className="min-h-screen relative z-10">
                <Navbar />
                <main className="pt-16">
                    {children}
                    <FAQSection />
                    <FinalCTA />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default UseCaseLayout;
