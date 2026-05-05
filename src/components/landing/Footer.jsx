import ScrollReveal from "./ScrollReveal";

const LOGO_WHITE =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/5fd0c5688_advantage-white.png";
const FOOTER_IMAGE =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/a1e5ed57a_generated_image.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30">
      <div className="relative h-32 lg:h-48 overflow-hidden">
        <img
          src={FOOTER_IMAGE}
          alt="Digital horizon"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 -mt-16 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="lg:col-span-1">
              <img
                src={LOGO_WHITE}
                alt="Advantage"
                className="h-8 w-auto mb-4"
              />
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                AI-powered business solutions for companies that refuse to
                settle for average — across every industry that matters.
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Solutions
              </div>
              <div className="space-y-3">
                {[
                  "Strategic Branding",
                  "Enterprise ERP",
                  "SaaS Platforms",
                  "AI Marketing",
                ].map((item) => (
                  <a
                    key={item}
                    href="#services"
                    className="block font-inter text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Industries
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "Hospitality",
                    value: "hospitality",
                  },
                  {
                    title: "FinTech",
                    value: "fintech",
                  },
                  {
                    title: "Interior Design",
                    value: "interior-design",
                  },
                  {
                    title: "Media & Broadcasting",
                    value: "media",
                  },
                  {
                    title: "Retail & E-Commerce",
                    value: "retail",
                  },
                ].map((item) => (
                  <a
                    key={item}
                    href={`/industry/${item.value}`}
                    className="block font-inter text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Company
              </div>
              <div className="space-y-3">
                {[
                  "Our Work",
                  "Case Studies",
                  "Process",
                  "FAQ",
                  "info@advantageng.com",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block font-inter text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            © 2026 Advantage. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {[
              {
                title: "Privacy",
                value: "privacy",
              },
              {
                title: "Terms",
                value: "terms",
              },
            ].map((item) => (
              <a
                key={item.value}
                href={`/${item.value}`}
                className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
