import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const team = [
  {
    name: "David Osei-Bonsu",
    title: "Founder & CEO",
    image:
      "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/5f6ba67a6_generated_image.png",
    bio: "15 years leading enterprise transformation across Africa and the Middle East. Former McKinsey consultant turned technology entrepreneur. David founded Advantage with the conviction that every business — regardless of size or sector — deserves access to world-class digital infrastructure.",
    expertise: ["Strategy", "Enterprise Clients", "Fundraising"],
  },
  {
    name: "Amara Mensah",
    title: "Chief Operating Officer",
    image:
      "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/69444f92d_generated_image.png",
    bio: "Operations architect with a track record of scaling service businesses from 10 to 200+ people. Amara oversees all client delivery, ensuring every engagement runs on time, on budget, and above expectation. Her background spans hospitality operations, FinTech project management, and agency leadership.",
    expertise: ["Delivery Excellence", "Team Scaling", "Client Relations"],
  },
  {
    name: "Rajan Pillai",
    title: "Chief Technology Officer",
    image:
      "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/0e2970d18_generated_image.png",
    bio: "Full-stack architect with deep expertise in cloud-native systems, AI integration, and enterprise ERP. Rajan has led engineering teams at companies backed by Sequoia and Andreessen Horowitz. At Advantage, he sets the technical standard for every platform we ship.",
    expertise: ["Cloud Architecture", "AI/ML Systems", "ERP Engineering"],
  },
  {
    name: "Layla Al-Farsi",
    title: "Creative Director",
    image:
      "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/f69b6d955_generated_image.png",
    bio: "Award-winning brand strategist who has defined the visual identities of luxury hospitality brands, GCC retail groups, and global media companies. Layla leads our branding practice with a philosophy rooted in restraint, precision, and cultural intelligence.",
    expertise: ["Brand Strategy", "Visual Identity", "Luxury Markets"],
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                The People
              </div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Meet the
                <br />
                Team<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-sm mt-6 lg:mt-0 leading-relaxed font-light">
              Behind every Advantage engagement is a senior team with the
              experience to make bold decisions and the integrity to stand
              behind them.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.12}>
              <motion.div
                className="group relative bg-card border border-border/30 rounded-sm overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Photo */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-inter text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary mt-0.5 mb-3">
                    {member.title}
                  </div>
                  <p className="font-inter text-xs text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 bg-muted/60 text-muted-foreground rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
