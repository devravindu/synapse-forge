import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const pricingData = {
  "Web Hosting": [
    {
      name: "Premium Web Hosting",
      price: "$2.99",
      period: "/mo",
      features: [
        "100 Websites",
        "100 GB SSD Storage",
        "Free Email",
        "Unlimited Bandwidth"
      ],
      isPopular: false
    },
    {
      name: "Business Web Hosting",
      price: "$3.99",
      period: "/mo",
      features: [
        "100 Websites",
        "200 GB NVMe Storage",
        "Daily Backups",
        "Free CDN"
      ],
      isPopular: true
    },
    {
      name: "Cloud Startup",
      price: "$8.99",
      period: "/mo",
      features: [
        "300 Websites",
        "200 GB NVMe Storage",
        "3 GB RAM",
        "2 CPU Cores"
      ],
      isPopular: false
    }
  ],
  "Cloud Hosting": [
    {
      name: "Cloud Startup",
      price: "$8.99",
      period: "/mo",
      features: [
        "300 Websites",
        "200 GB NVMe Storage",
        "3 GB RAM",
        "2 CPU Cores"
      ],
      isPopular: true
    },
    {
      name: "Cloud Professional",
      price: "$14.99",
      period: "/mo",
      features: [
        "300 Websites",
        "250 GB NVMe Storage",
        "6 GB RAM",
        "4 CPU Cores"
      ],
      isPopular: false
    },
    {
      name: "Cloud Enterprise",
      price: "$29.99",
      period: "/mo",
      features: [
        "300 Websites",
        "300 GB NVMe Storage",
        "12 GB RAM",
        "6 CPU Cores"
      ],
      isPopular: false
    }
  ],
  "Agency Hosting": [
    {
      name: "Agency Startup",
      price: "$23.00",
      period: "/mo",
      features: [
        "100 Websites",
        "300 GB NVMe Storage",
        "Priority Support",
        "Full Website Isolation"
      ],
      isPopular: false
    },
    {
      name: "Agency Professional",
      price: "$49.00",
      period: "/mo",
      features: [
        "200 Websites",
        "500 GB NVMe Storage",
        "Access Sharing",
        "20 Mailboxes"
      ],
      isPopular: true
    },
    {
      name: "Agency Growth",
      price: "$69.00",
      period: "/mo",
      features: [
        "300 Websites",
        "700 GB NVMe Storage",
        "30 Mailboxes",
        "Seamless Scaling"
      ],
      isPopular: false
    }
  ],
  "VPS Hosting": [
    {
      name: "KVM 1",
      price: "$4.99",
      period: "/mo",
      features: [
        "1 vCPU Core",
        "4 GB RAM",
        "50 GB NVMe Disk",
        "4 TB Bandwidth"
      ],
      isPopular: false
    },
    {
      name: "KVM 2",
      price: "$6.99",
      period: "/mo",
      features: [
        "2 vCPU Core",
        "8 GB RAM",
        "100 GB NVMe Disk",
        "8 TB Bandwidth"
      ],
      isPopular: true
    },
    {
      name: "KVM 4",
      price: "$9.99",
      period: "/mo",
      features: [
        "4 vCPU Core",
        "16 GB RAM",
        "200 GB NVMe Disk",
        "16 TB Bandwidth"
      ],
      isPopular: false
    },
    {
      name: "KVM 8",
      price: "$19.99",
      period: "/mo",
      features: [
        "8 vCPU Core",
        "32 GB RAM",
        "400 GB NVMe Disk",
        "32 TB Bandwidth"
      ],
      isPopular: false
    }
  ],
  "Business Email": [
    {
      name: "Starter Business Email",
      price: "$0.35",
      period: "/mo per mailbox",
      features: [
        "10 GB Storage",
        "10 Forwarding Rules",
        "10 Email Aliases"
      ],
      isPopular: false
    },
    {
      name: "Premium Business Email",
      price: "$1.95",
      period: "/mo per mailbox",
      features: [
        "50 GB Storage",
        "50 Forwarding Rules",
        "50 Email Aliases",
        "Free Domain"
      ],
      isPopular: true
    }
  ]
};

const PlanCard = ({ plan }: { plan: typeof pricingData["Web Hosting"][0] }) => {
  return (
    <div
      className={cn(
        "relative p-6 rounded-xl border flex flex-col h-full transition-all duration-300",
        plan.isPopular
          ? "border-primary/50 bg-card shadow-lg shadow-primary/10 scale-[1.02] md:scale-105 z-10"
          : "border-border bg-card/50 hover:bg-card hover:border-primary/20"
      )}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-4">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tighter text-foreground">
            {plan.price}
          </span>
          <span className="text-sm text-muted-foreground">{plan.period}</span>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              <Check size={10} strokeWidth={3} />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={cn(
          "w-full font-medium transition-all",
          plan.isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
            : "bg-transparent border border-primary/20 hover:bg-primary/5 text-foreground"
        )}
      >
        Choose Plan
      </Button>
    </div>
  );
};

const HostingPricing = () => {
  const tabs = Object.keys(pricingData);

  return (
    <section className="w-full py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
            Choose Your Web Hosting Plan
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful hosting solutions for every need.
          </p>
        </div>

        <Tabs defaultValue={tabs[0]} className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <TabsList className="h-auto p-1 bg-muted/50 rounded-full border border-border/50 backdrop-blur-sm">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
                {pricingData[tab as keyof typeof pricingData].map((plan, index) => (
                  <PlanCard key={index} plan={plan} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default HostingPricing;
