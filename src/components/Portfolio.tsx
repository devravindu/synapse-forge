import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    title: "Project Alpha",
    excerpt: "A cutting-edge web application developed for a leading tech startup.",
    image: "/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Project Beta",
    excerpt: "An e-commerce platform that boosted client sales by 150%.",
    image: "/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Project Gamma",
    excerpt: "A sleek and modern marketing website for a creative agency.",
    image: "/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Project Delta",
    excerpt: "A complex data visualization tool for a financial services company.",
    image: "/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Project Epsilon",
    excerpt: "A community portal for a non-profit organization.",
    image: "/project-placeholder.svg",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full py-20 px-6 md:px-12 bg-bg-primary">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-text-primary">
            Our Recent Work
          </h2>
          <p className="text-text-muted text-lg">
            Discover a selection of projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border border-white/10 bg-bg-secondary aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium tracking-tighter text-text-primary translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{project.title}</h3>
                <p className="text-sm text-text-muted mt-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 delay-75">{project.excerpt}</p>
                <div className="mt-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 delay-100">
                  <Button variant="outline" className="w-full border-white/20 text-text-primary hover:bg-accent-primary hover:border-accent-primary">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Button variant="outline" className="border-white/20 text-text-primary hover:bg-accent-primary hover:border-accent-primary text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
                Explore More Projects
            </Button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
