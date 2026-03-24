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
      features: ["100 Websites", "100 GB SSD Storage", "Free Email", "Unlimited Bandwidth"],
      isPopular: false,
    },
    {
      name: "Business Web Hosting",
      price: "$3.99",
      period: "/mo",
      features: ["100 Websites", "200 GB NVMe Storage", "Daily Backups", "Free CDN"],
      isPopular: true,
    },
    {
      name: "Cloud Startup",
      price: "$8.99",
      period: "/mo",
      features: ["300 Websites", "200 GB NVMe Storage", "3 GB RAM", "2 CPU Cores"],
      isPopular: false,
    },
  ],
  "Cloud Hosting": [
    {
      name: "Cloud Startup",
      price: "$8.99",
      period: "/mo",
      features: ["300 Websites", "200 GB NVMe Storage", "3 GB RAM", "2 CPU Cores"],
      isPopular: true,
    },
    {
      name: "Cloud Professional",
      price: "$14.99",
      period: "/mo",
      features: ["300 Websites", "250 GB NVMe Storage", "6 GB RAM", "4 CPU Cores"],
      isPopular: false,
    },
    {
      name: "Cloud Enterprise",
      price: "$29.99",
      period: "/mo",
      features: ["300 Websites", "300 GB NVMe Storage", "12 GB RAM", "6 CPU Cores"],
      isPopular: false,
    },
  ],
  "Agency Hosting": [
    {
      name: "Agency Startup",
      price: "$23.00",
      period: "/mo",
      features: ["100 Websites", "300 GB NVMe Storage", "Priority Support", "Full Website Isolation"],
      isPopular: false,
    },
    {
      name: "Agency Professional",
      price: "$49.00",
      period: "/mo",
      features: ["200 Websites", "500 GB NVMe Storage", "Access Sharing", "20 Mailboxes"],
      isPopular: true,
    },
    {
      name: "Agency Growth",
      price: "$69.00",
      period: "/mo",
      features: ["300 Websites", "700 GB NVMe Storage", "30 Mailboxes", "Seamless Scaling"],
      isPopular: false,
    },
  ],
  "VPS Hosting": [
    {
      name: "KVM 1",
      price: "$4.99",
      period: "/mo",
      features: ["1 vCPU Core", "4 GB RAM", "50 GB NVMe Disk", "4 TB Bandwidth"],
      isPopular: false,
    },
    {
      name: "KVM 2",
      price: "$6.99",
      period: "/mo",
      features: ["2 vCPU Core", "8 GB RAM", "100 GB NVMe Disk", "8 TB Bandwidth"],
      isPopular: true,
    },
    {
      name: "KVM 4",
      price: "$9.99",
      period: "/mo",
      features: ["4 vCPU Core", "16 GB RAM", "200 GB NVMe Disk", "16 TB Bandwidth"],
      isPopular: false,
    },
    {
      name: "KVM 8",
      price: "$19.99",
      period: "/mo",
      features: ["8 vCPU Core", "32 GB RAM", "400 GB NVMe Disk", "32 TB Bandwidth"],
      isPopular: false,
    },
  ],
  "Business Email": [
    {
      name: "Starter Business Email",
      price: "$0.35",
      period: "/mo per mailbox",
      features: ["10 GB Storage", "10 Forwarding Rules", "10 Email Aliases"],
      isPopular: false,
    },
    {
      name: "Premium Business Email",
      price: "$1.95",
      period: "/mo per mailbox",
      features: ["50 GB Storage", "50 Forwarding Rules", "50 Email Aliases", "Free Domain"],
      isPopular: true,
    },
  ],
};

type Plan = (typeof pricingData)["Web Hosting"][0];

const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-2xl p-6 md:p-7 transition-all duration-300 premium-card-hover',
        plan.isPopular
          ? 'premium-glass border-blue-300/40 shadow-[0_24px_60px_-36px_rgba(37,99,235,0.9)]'
          : 'premium-surface'
      )}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-blue-300/30 bg-blue-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
          Most Popular
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight text-text-primary">{plan.name}</h3>
        <div className="flex items-end gap-1.5">
          <span className="text-4xl font-semibold tracking-tight text-text-primary">{plan.price}</span>
          <span className="pb-1 text-sm text-text-tertiary">{plan.period}</span>
        </div>
      </div>

      <div className="my-6 divider-fade" />

      <div className="space-y-3.5 flex-grow">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-0.5 h-5 w-5 rounded-full border border-blue-200/30 bg-blue-500/15 flex items-center justify-center text-accent-cyan flex-shrink-0">
              <Check size={11} strokeWidth={2.5} />
            </div>
            <span className="text-sm text-text-secondary">{feature}</span>
          </div>
        ))}
      </div>

      <Button className="mt-8 w-full" variant={plan.isPopular ? 'default' : 'outline'}>
        Choose plan
      </Button>
    </article>
  );
};

const HostingPricing = () => {
  const tabs = Object.keys(pricingData);

  return (
    <section id="hosting-pricing" className="section-shell pt-10">
      <div className="section-container space-y-10">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-cyan">
            Flexible Plans
          </span>
          <h2 className="section-heading">Hosting packages built for every growth stage</h2>
          <p className="section-subheading mx-auto">
            Compare plans across web, cloud, agency, VPS, and business email offerings with transparent pricing and practical capacity tiers.
          </p>
        </div>

        <Tabs defaultValue={tabs[0]} className="w-full">
          <div className="mb-8 flex justify-center overflow-x-auto pb-2">
            <TabsList className="h-auto rounded-full border border-blue-200/15 bg-[#0b1526]/85 p-1.5 backdrop-blur-xl">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-full px-4 md:px-5 py-2.5 text-sm md:text-base text-text-tertiary data-[state=active]:bg-blue-500/20 data-[state=active]:text-text-primary data-[state=active]:shadow-[inset_0_0_0_1px_rgba(125,211,252,0.28)]"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0 animate-in fade-in slide-in-from-bottom-3 duration-500">
              <div className={cn('grid gap-5 md:gap-6 items-stretch', tab === 'VPS Hosting' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3')}>
                {pricingData[tab as keyof typeof pricingData].map((plan, index) => (
                  <PlanCard key={`${tab}-${index}`} plan={plan} />
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
