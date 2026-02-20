import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "AI Design Search", href: "#" },
      { label: "Moodboard Builder", href: "#" },
      { label: "AI Design Audit", href: "#" },
      { label: "Brand Scanner", href: "#" },
      { label: "Creator Studio", href: "#" },
      { label: "Live Collaboration", href: "#" }
    ]
  },
  {
    title: "Use Cases",
    links: [
      { label: "For UI/UX Designers", href: "/use-cases/ui-ux-designers" },
      { label: "For Brand Teams", href: "/use-cases/brand-teams" },
      { label: "For Marketing Teams", href: "/use-cases/marketing-teams" },
      { label: "For Agencies", href: "/use-cases/agencies" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Design Inspiration", href: "/solutions/design-inspiration" },
      { label: "Brand Intelligence", href: "/solutions/brand-intelligence" },
      { label: "Creative Collaboration", href: "/solutions/creative-collaboration" },
      { label: "Competitive Analysis", href: "/solutions/competitive-analysis" },
      { label: "AI Design Generation", href: "/solutions/ai-design-generation" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "mailto:contact@inspoai.io" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" }
    ]
  }];


import LogoInspo from "@/assets/LogoInspo.svg";

import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <img src={LogoInspo} alt="Inspo AI" className="h-7" />
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              AI-powered design inspiration and brand intelligence.
            </p>
          </div>
          {footerCols.map((col) =>
            <div key={col.title}>
              <h4 className="font-semibold text-foreground text-sm mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) =>
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                        {link.label}
                      </a>
                    )}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-border mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          <p className="text-muted-foreground text-xs text-center md:text-left md:w-1/3">
            Copyright 2026 Inspo AI. All rights reserved.
          </p>

          <p className="text-muted-foreground text-sm font-medium text-center md:w-1/3">
            Made from Greater Chennai, for the world ❤️🇮🇳
          </p>

          <div className="flex gap-4 md:w-1/3 justify-center md:justify-end">
            <a
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 bg-muted/30 border border-border/50 rounded-full hover:bg-muted/80"
              href="https://x.com/inspo_ai_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={16} fill="currentColor" />
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 bg-muted/30 border border-border/50 rounded-full hover:bg-muted/80"
              href="https://www.linkedin.com/company/inspo-ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;