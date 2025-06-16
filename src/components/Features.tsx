
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layout, LayoutGrid, Users, Briefcase, LayoutDashboard, BriefcaseBusiness } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Custom Web Development",
      description: "Tailored websites and web applications built with modern technologies and best practices.",
      expandedDescription: "We craft custom solutions using React, Next.js, and cutting-edge frameworks. From simple landing pages to complex web applications, we build scalable, performant, and maintainable code that grows with your business needs.",
      icon: (
        <Layout size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions.",
      expandedDescription: "Our design process focuses on user experience and conversion optimization. We create wireframes, prototypes, and pixel-perfect designs that not only look great but also provide seamless user journeys and maximize business outcomes.",
      icon: (
        <LayoutGrid size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "E-commerce Solutions",
      description: "Powerful online stores that drive sales and provide exceptional shopping experiences.",
      expandedDescription: "Build robust e-commerce platforms with secure payment processing, inventory management, and customer analytics. We integrate with popular platforms and create custom solutions that scale with your business growth.",
      icon: (
        <LayoutDashboard size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Team Collaboration",
      description: "Seamless collaboration tools and project management for your development needs.",
      expandedDescription: "Stay connected with your project through our collaborative approach. Real-time updates, milestone tracking, and transparent communication ensure you're always in the loop throughout the development process.",
      icon: (
        <Users size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Business Strategy",
      description: "Strategic consulting to align your digital presence with business objectives.",
      expandedDescription: "We don't just build websites - we create digital strategies. Our team helps you identify opportunities, optimize conversion funnels, and implement analytics to measure success and drive continuous improvement.",
      icon: (
        <BriefcaseBusiness size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Ongoing Support",
      description: "Comprehensive maintenance and support services to keep your site running smoothly.",
      expandedDescription: "Launch is just the beginning. We provide ongoing maintenance, security updates, performance monitoring, and feature enhancements. Our support ensures your digital assets remain secure, fast, and up-to-date.",
      icon: (
        <Briefcase size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Everything your business needs to succeed online
          </h2>
          <p className="text-cosmic-muted text-lg">
            Comprehensive web development services to transform your digital presence and drive business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
