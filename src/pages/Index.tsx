
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio'; // Moved import
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import ContactUs from '@/components/ContactUs'; // Added import
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Portfolio /> {/* Moved Portfolio section */}
        <Testimonials />
        <Pricing />
        <ContactUs /> {/* Added ContactUs section */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
