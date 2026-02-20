const footerCols = [
{
  title: "Product",
  links: ["AI Design Search", "Moodboard Builder", "AI Design Audit", "Brand Scanner", "Creator Studio", "Live Collaboration"]
},
{
  title: "Use Cases",
  links: ["For UI/UX Designers", "For Brand Teams", "For Marketing Teams", "For Agencies"]
},
{
  title: "Solutions",
  links: ["Design Inspiration", "Brand Intelligence", "Creative Collaboration", "Competitive Analysis", "AI Design Generation"]
},
{
  title: "Company",
  links: ["About", "Blog", "Changelog", "Contact", "Privacy Policy", "Terms of Service"]
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
              <li key={link}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                      {link}
                    </a>
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
            <a key={s} className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-200" href="https://x.com/inspo_ai_">
                {s}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;