import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  saveText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  isPopular = false,
  saveText,
  onButtonClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl border flex flex-col h-full transition-all duration-300 relative",
        isPopular
          ? "border-primary/50 cosmic-glow bg-card"
          : "border-border cosmic-gradient bg-card",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium shadow-md">
          Most Popular
        </div>
      )}

      <div className="mb-auto">
        <h3 className="text-2xl font-medium tracking-tighter mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 text-sm min-h-[40px]">{description}</p>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tighter text-foreground">{price}</span>
            {period && <span className="text-sm text-muted-foreground">{period}</span>}
          </div>
          {saveText && (
            <div className="mt-2 inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
              {saveText}
            </div>
          )}
        </div>

        <div className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 h-5 w-5 min-w-[1.25rem] rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-sm text-foreground/90">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button
          onClick={onButtonClick}
          className={cn(
            "w-full shadow-sm",
            isPopular
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-background border-border text-foreground hover:bg-muted border"
          )}
          variant={isPopular ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
