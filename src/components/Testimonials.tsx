
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "DevRavi Solutions transformed our online presence completely. Our new website increased conversions by 300% and we couldn't be happier with the results.",
      author: "Sarah Johnson",
      position: "CEO at TechStartup",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "The team at DevRavi Solutions delivered beyond our expectations. Their attention to detail and technical expertise made our complex web application a reality.",
      author: "Michael Chen",
      position: "CTO at InnovateNow",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "Working with DevRavi Solutions was seamless. They understood our vision perfectly and delivered a stunning e-commerce platform that our customers love.",
      author: "Leila Rodriguez",
      position: "Founder at StyleHub",
      avatar: "bg-cosmic-light/40"
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Trusted by forward-thinking businesses
          </h2>
          <p className="text-muted-foreground text-lg">
            See how we've helped companies transform their digital presence and achieve their goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
