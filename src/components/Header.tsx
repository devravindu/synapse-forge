import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Layout, BriefcaseBusiness, Sun, Moon, Briefcase, Server } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Handle setting active page based on URL and location state
  useEffect(() => {
    if (location.pathname === '/hosting') {
      setActivePage('hosting');
    } else if (location.pathname === '/') {
      if (location.state && location.state.scrollTo) {
        const targetId = location.state.scrollTo;
        setActivePage(targetId);
        // Clean up state
        navigate(location.pathname, { replace: true, state: {} });

        // Wait for render
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location, navigate]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (page === 'hosting') {
      navigate('/hosting');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: page } });
    } else {
      setActivePage(page);
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sticky top-0 z-50 pt-4 px-4 transition-all duration-300">
      <header
        className={cn(
          "w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ease-in-out",
          isScrolled
            ? "py-3 px-6 md:px-8 bg-background/80 backdrop-blur-md shadow-lg rounded-full mt-0"
            : "py-3 px-6 md:px-8 bg-transparent shadow-none rounded-none mt-4"
        )}
      >
        <Logo />
        
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              <ToggleGroupItem 
                value="features"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'features' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('features')}
              >
                <Layout size={16} className="inline-block mr-1.5" /> Services
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="portfolio"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'portfolio' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('portfolio')}
              >
                <Briefcase size={16} className="inline-block mr-1.5" /> Our Work
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="pricing" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'pricing' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('pricing')}
              >
                <BriefcaseBusiness size={16} className="inline-block mr-1.5" /> Pricing
              </ToggleGroupItem>
              <ToggleGroupItem
                value="hosting"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'hosting' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('hosting')}
              >
                <Server size={16} className="inline-block mr-1.5" /> Hosting
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'features' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('features')}
              >
                <Layout size={16} className="inline-block mr-1.5" /> Services
              </a>
              <a 
                href="#portfolio"
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'portfolio' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('portfolio')}
              >
                <Briefcase size={16} className="inline-block mr-1.5" /> Our Work
              </a>
              <a 
                href="#pricing" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'pricing' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('pricing')}
              >
                <BriefcaseBusiness size={16} className="inline-block mr-1.5" /> Pricing
              </a>
              <a
                href="/hosting"
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'hosting' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('hosting')}
              >
                <Server size={16} className="inline-block mr-1.5" /> Hosting
              </a>
              
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch 
                    checked={!isDarkMode} 
                    onCheckedChange={toggleTheme} 
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <Button className="px-6 min-h-[40px]" asChild>
            <a
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault();
                const targetId = 'contact-us';

                if (location.pathname !== '/') {
                   navigate('/', { state: { scrollTo: targetId } });
                } else {
                    const target = document.getElementById(targetId);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        setActivePage(targetId);
                    }
                }
              }}
            >
              Contact Us
            </a>
          </Button>
        </div> 
      </header> 
    </div>
  );
};

export default Header;
