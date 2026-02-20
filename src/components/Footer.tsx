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
      { label: "About", href: "#" },
      { label: "Contact", href: "mailto:contact@inspoai.io" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" }
    ]
  }];


import LogoInspo from "@/assets/LogoInspo.svg";

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
                      <Link to={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                        {link.label}
                      </a>
                    )}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="border-t border-border mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">Copyright 2026 Inspo AI. All rights reserved.</p>
          <div className="flex gap-5">
            {["Twitter", "LinkedIn", "Instagram"].map((s) =>
              <a
                key={s}
                className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-200"
                href={s === "LinkedIn" ? "https://www.linkedin.com/company/inspo-ai/" : "https://x.com/inspo_ai_"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;