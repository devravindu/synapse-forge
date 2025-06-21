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
    <section id="portfolio" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Our Recent Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover a selection of projects that showcase our expertise and creativity.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col overflow-hidden border-border hover:border-primary/50 transition-all duration-300 cosmic-gradient">
                    <CardHeader className="p-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="flex-grow p-6 space-y-3">
                      <CardTitle className="text-xl font-medium tracking-tighter text-foreground">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                        View Project
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center">
            <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
                Explore More Projects
            </Button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
