import React from 'react';
import PricingCard from './PricingCard';

const HostingPricing = () => {
  const plans = [
    {
      name: "Single Shared",
      description: "Ideal for beginners starting their journey.",
      price: "$2.99",
      period: "/mo",
      saveText: "SAVE 50%",
      features: [
        "1 Website",
        "~10 000 Visits Monthly",
        "30 GB SSD Storage",
        "1 Email Account",
        "Free SSL",
        "24/7 Support"
      ],
      buttonText: "Choose Plan",
      popular: false
    },
    {
      name: "Premium Shared",
      description: "Perfect package for personal websites.",
      price: "$5.99",
      period: "/mo",
      saveText: "SAVE 60%",
      features: [
        "Unlimited Bandwidth",
        "Free SSL",
        "Daily Backups",
        "24/7 Support",
        "100 Websites",
        "100 GB SSD Storage",
        "Free Email"
      ],
      buttonText: "Choose Plan",
      popular: true
    },
    {
      name: "Business Shared",
      description: "Optimized for small businesses.",
      price: "$9.99",
      period: "/mo",
      saveText: "SAVE 70%",
      features: [
        "Unlimited Bandwidth",
        "Free SSL",
        "Daily Backups",
        "24/7 Support",
        "Free CDN",
        "Free Domain",
        "Optimized Performance"
      ],
      buttonText: "Choose Plan",
      popular: false
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Choose Your Web Hosting Plan
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to create your website. 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              saveText={plan.saveText}
              features={plan.features}
              buttonText={plan.buttonText}
              isPopular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPricing;
