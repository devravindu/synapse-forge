import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "B2B SaaS Platform",
    excerpt: "End-to-end product site and app shell that increased qualified demo requests by 42%.",
    image: "/project-placeholder.svg",
    category: "SaaS Product",
    outcome: "Conversion +42%",
    link: "#",
  },
  {
    title: "Commerce Experience",
    excerpt: "Modern storefront architecture focused on speed, checkout reliability, and retention flows.",
    image: "/project-placeholder.svg",
    category: "E-commerce",
    outcome: "AOV +18%",
    link: "#",
  },
  {
    title: "Operations Dashboard",
    excerpt: "Role-based dashboard with actionable analytics that reduced manual reporting overhead.",
    image: "/project-placeholder.svg",
    category: "Data Platform",
    outcome: "Ops time -35%",
    link: "#",
  },
  {
    title: "Fintech Landing Suite",
    excerpt: "Premium acquisition pages and onboarding flows optimized for trust and clarity.",
    image: "/project-placeholder.svg",
    category: "Financial Services",
    outcome: "Lead quality +27%",
    link: "#",
  },
  {
    title: "Service Marketplace",
    excerpt: "Search and booking interface redesign with clearer information hierarchy and mobile UX.",
    image: "/project-placeholder.svg",
    category: "Marketplace",
    outcome: "Bookings +24%",
    link: "#",
  },
  {
    title: "Agency Rebrand Website",
    excerpt: "Complete visual refresh and CMS rebuild for faster publishing and stronger positioning.",
    image: "/project-placeholder.svg",
    category: "Brand & Web",
    outcome: "Bounce rate -31%",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-shell">
      <div className="section-container space-y-14">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-cyan">
            Selected Projects
          </span>
          <h2 className="section-heading">Work that demonstrates measurable outcomes</h2>
          <p className="section-subheading mx-auto">
            A curated view of recent Devravi Solutions engagements across SaaS, commerce, and operations-focused platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group premium-surface premium-card-hover overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/20 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-[#0b1526]/85 px-2.5 py-1 text-[11px] font-medium text-text-secondary">
                  {project.category}
                </div>
                <div className="absolute bottom-4 left-4 inline-flex items-center rounded-full border border-cyan-200/25 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-semibold text-accent-cyan">
                  {project.outcome}
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-text-primary">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{project.excerpt}</p>
                </div>

                <Button asChild variant="outline" className="w-full justify-between">
                  <a href={project.link}>
                    View case study
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg" className="min-w-[220px]">
            Explore full portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
