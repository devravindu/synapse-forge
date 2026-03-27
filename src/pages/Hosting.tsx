import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HostingPricing from '@/components/HostingPricing';
import { ShieldCheck, GaugeCircle, ServerCog, Headset } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustHighlights = [
  {
    title: 'High availability architecture',
    detail: 'Resilient infrastructure designed to keep your digital operations online and responsive.',
    icon: ServerCog,
  },
  {
    title: 'Performance-first delivery',
    detail: 'Global acceleration, optimized stacks, and caching strategies for faster page experience.',
    icon: GaugeCircle,
  },
  {
    title: 'Security by default',
    detail: 'Built-in SSL, hardened environments, and proactive safeguards across all plans.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert technical support',
    detail: 'A responsive Devravi Solutions team available when your platform needs immediate attention.',
    icon: Headset,
  },
];

const Hosting = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-28">
        <section className="section-shell overflow-hidden pb-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
          </div>

          <div className="section-container relative z-10">
            <div className="premium-glass rounded-3xl px-6 py-12 md:px-12 md:py-16 text-center space-y-8">
              <span className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-cyan">
                Managed Hosting by Devravi Solutions
              </span>

              <div className="mx-auto max-w-4xl space-y-5">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-text-primary">
                  Premium hosting infrastructure for modern digital products
                </h1>
                <p className="mx-auto max-w-3xl text-lg md:text-xl text-text-secondary leading-relaxed">
                  Launch faster with secure, high-performance hosting plans engineered for reliability, scalability, and business continuity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a href="#hosting-pricing">Get started with hosting</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact-us">Talk to an expert</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-8">
          <div className="section-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {trustHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="premium-surface premium-card-hover p-5 md:p-6 space-y-4">
                  <div className="h-11 w-11 rounded-xl border border-blue-200/20 bg-blue-500/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent-cyan" />
                  </div>
                  <h2 className="text-base font-semibold text-text-primary tracking-tight">{item.title}</h2>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        <HostingPricing />
      </main>
      <Footer />
    </div>
  );
};

export default Hosting;
