
import React from 'react';
import { Blocks } from 'lucide-react'; // Using Blocks icon

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 group">
      <Blocks size={28} className="text-primary group-hover:animate-pulse-slow" /> {/* Increased size slightly */}
      <span className="text-xl font-medium tracking-tight">Devravi Solutions</span>
    </a>
  );
};

export default Logo;
