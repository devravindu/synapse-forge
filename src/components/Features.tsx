import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layout, LayoutGrid, Users, Briefcase, LayoutDashboard, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Custom Web Development",
      description: "Tailored web platforms built for scale, speed, and long-term maintainability.",
      expandedDescription:
        "From conversion-focused marketing sites to robust product platforms, Devravi Solutions delivers architecture that supports business growth and faster iteration.",
      icon: <Layout size={20} className="text-accent-cyan" />,
    },
    {
      title: "Product UI/UX Design",
      description: "Interface systems designed to improve usability, trust, and conversion flow.",
      expandedDescription:
        "Our design process aligns interface decisions with measurable outcomes, combining thoughtful interaction patterns with modern visual quality.",
      icon: <LayoutGrid size={20} className="text-accent-cyan" />,
    },
    {
      title: "E-commerce Systems",
      description: "High-performance storefronts with reliable checkout and extensible operations.",
      expandedDescription:
        "We implement robust commerce experiences with optimized product discovery, secure payment integrations, and a scalable technical foundation.",
      icon: <LayoutDashboard size={20} className="text-accent-cyan" />,
    },
    {
      title: "Collaborative Delivery",
      description: "Clear execution workflows with transparent milestones and active communication.",
      expandedDescription:
        "You get predictable delivery cadence, visible progress, and a structured process that keeps stakeholders aligned from planning through launch.",
      icon: <Users size={20} className="text-accent-cyan" />,
    },
    {
      title: "Digital Strategy",
      description: "Technical and product decisions guided by business priorities and market context.",
      expandedDescription:
        "We translate growth goals into practical roadmaps, helping your team prioritize what drives adoption, conversion, and operational efficiency.",
      icon: <BriefcaseBusiness size={20} className="text-accent-cyan" />,
    },
    {
      title: "Long-term Support",
      description: "Proactive maintenance, optimization, and enhancement after launch.",
      expandedDescription:
        "Devravi Solutions remains your technical partner post-launch, with support for uptime, security hardening, performance, and iterative feature delivery.",
      icon: <Briefcase size={20} className="text-accent-cyan" />,
    },
  ];

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <section id="features" className="section-shell overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />
      </div>

      <div className="section-container relative z-10 space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-cyan">
            Core Capabilities
          </span>
          <h2 className="section-heading">
            Digital services engineered for performance and growth
          </h2>
          <p className="section-subheading mx-auto">
            Devravi Solutions combines product design, engineering, and strategic guidance to help teams launch faster and scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature.title} className="premium-glass premium-card-hover rounded-2xl">
              <Collapsible
                open={openFeature === index}
                onOpenChange={() => toggleFeature(index)}
                className="h-full"
              >
                <CollapsibleTrigger className="group w-full p-6 text-left">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200/20 bg-blue-400/10">
                      {feature.icon}
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-text-tertiary transition-transform duration-300 ${
                        openFeature === index ? 'rotate-180 text-accent-cyan' : ''
                      }`}
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </CollapsibleTrigger>

                <CollapsibleContent className="px-6 pb-6">
                  <div className="divider-fade mb-4" />
                  <p className="text-sm leading-relaxed text-text-muted">{feature.expandedDescription}</p>
                  <div className="mt-5">
                    <Button asChild variant="ghost" size="sm" className="px-0 text-accent-cyan hover:bg-transparent hover:text-accent-cyan/85">
                      <a href="#contact-us">Learn more</a>
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
