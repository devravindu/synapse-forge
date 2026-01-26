import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HostingPricing from '@/components/HostingPricing';

const Hosting = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-32">
        <div className="w-full py-12 px-6 md:px-12 bg-background">
           <div className="max-w-7xl mx-auto text-center space-y-6">
             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
               Fast & Secure Web Hosting
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Start your journey with our high-performance hosting platform.
             </p>
           </div>
        </div>
        <HostingPricing />
      </main>
      <Footer />
    </div>
  );
};

export default Hosting;
