import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Added for budget
import { cn } from '@/lib/utils';

interface FormData {
  services: string[];
  timelineDecision: 'yes' | 'no' | '';
  timelineDate: string;
  budget: string;
  projectDescription: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialFormData: FormData = {
  services: [],
  timelineDecision: '',
  timelineDate: '',
  budget: '',
  projectDescription: '',
  firstName: '',
  lastName: '',
  email: '',
};

const totalSteps = 5;

const ContactUs = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNext = () => {
    // Basic validation before proceeding (can be expanded)
    if (currentStep === 1 && formData.services.length === 0) {
      alert('Please select at least one service.');
      return;
    }
    if (currentStep === 2 && formData.timelineDecision === 'yes' && !formData.timelineDate) {
      alert('Please provide a timeline date.');
      return;
    }
    if (currentStep === 3 && !formData.budget) {
      alert('Please select a budget range.');
      return;
    }
    if (currentStep === 5 && (!formData.firstName || !formData.lastName || !formData.email)) {
      alert('Please fill in all contact details.');
      return;
    }
    // Basic email validation
    if (currentStep === 5 && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Handle final submission
      console.log('Form Data Submitted:', formData);
      setFormSubmitted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices };
    });
  };

  const handleRadioChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-foreground">Which services do you need?*</h3>
            <p className="text-sm text-muted-foreground">Select all that apply.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Website Design", "Web App Development", "E-commerce Solution", "UI/UX Design", "SEO Optimization", "Maintenance", "Other"].map((service) => (
                <div key={service} className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer bg-muted/20 hover:bg-muted/40" onClick={() => handleCheckboxChange(service)}>
                  <Checkbox
                    id={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                    checked={formData.services.includes(service)}
                    onCheckedChange={() => handleCheckboxChange(service)}
                    aria-label={service}
                  />
                  <Label
                    htmlFor={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-normal text-foreground cursor-pointer"
                  >
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-foreground">Do you have a timeline?</h3>
            <RadioGroup
              value={formData.timelineDecision}
              onValueChange={(value) => handleRadioChange('timelineDecision', value as 'yes' | 'no')}
              className="space-y-2"
            >
              <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer bg-muted/20 hover:bg-muted/40" onClick={() => handleRadioChange('timelineDecision', 'yes')}>
                <RadioGroupItem value="yes" id="timeline-yes" aria-label="Yes" />
                <Label htmlFor="timeline-yes" className="font-normal text-foreground cursor-pointer">Yes</Label>
              </div>
              <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer bg-muted/20 hover:bg-muted/40" onClick={() => handleRadioChange('timelineDecision', 'no')}>
                <RadioGroupItem value="no" id="timeline-no" aria-label="No" />
                <Label htmlFor="timeline-no" className="font-normal text-foreground cursor-pointer">No</Label>
              </div>
            </RadioGroup>

            {formData.timelineDecision === 'yes' && (
              <div className="space-y-2 pt-4">
                <Label htmlFor="timelineDate" className="text-sm font-medium text-foreground">
                  And when do you need this for?*
                </Label>
                <Input
                  type="date"
                  id="timelineDate"
                  name="timelineDate"
                  value={formData.timelineDate}
                  onChange={handleChange}
                  className="bg-background border-border placeholder:text-muted-foreground/70"
                  min={new Date().toISOString().split("T")[0]} // Optional: prevent past dates
                />
                <p className="text-xs text-muted-foreground">Please provide an estimated completion date.</p>
              </div>
            )}
          </div>
        );
      case 3: {
        const budgetOptions = [
          { value: "<2500", label: "< $2,500" },
          { value: "2500-5000", label: "$2,500 - $5,000" },
          { value: "5000-10000", label: "$5,000 - $10,000" },
          { value: "10000-20000", label: "$10,000 - $20,000" },
          { value: "20000+", label: "$20,000+" },
        ];
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-foreground">What is the budget range for your project?*</h3>
            <Select
              value={formData.budget}
              onValueChange={(value) => handleSelectChange('budget', value)}
            >
              <SelectTrigger className="w-full bg-background border-border text-foreground">
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {budgetOptions.map(option => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-muted focus:bg-muted cursor-pointer">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">This helps us tailor our proposal to your needs.</p>
          </div>
        );
      }
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-foreground">Anything else to share about the project?</h3>
            <div>
              <Label htmlFor="projectDescription" className="text-sm font-medium text-foreground sr-only">
                Project Description
              </Label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Tell us about your project goals, target audience, specific features, or any other relevant details..."
                className="min-h-[150px] bg-background border-border placeholder:text-muted-foreground/70"
              />
            </div>
            <p className="text-xs text-muted-foreground">The more details you provide, the better we can understand your needs.</p>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-foreground">How can we contact you?*</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name*</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g., Jane"
                  className="bg-background border-border placeholder:text-muted-foreground/70"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name*</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g., Doe"
                  className="bg-background border-border placeholder:text-muted-foreground/70"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">Email*</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., jane.doe@example.com"
                className="bg-background border-border placeholder:text-muted-foreground/70"
                required
              />
            </div>
            <p className="text-xs text-muted-foreground">We'll use this information to get back to you about your project.</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (formSubmitted) {
    return (
      <section id="contact-us" className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
        <div className="absolute inset-0 cosmic-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                Thank You!
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Thanks for reaching out! We’ll be in touch soon.
            </p>
            <Button onClick={() => { setFormSubmitted(false); setCurrentStep(1); setFormData(initialFormData); }}>
                Submit Another Inquiry
            </Button>
        </div>
      </section>
    );
  }


  return (
    <section id="contact-us" className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid, similar to Testimonials section */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Let's Build Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to learn more? Fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form container */}
        <div className="p-8 md:p-10 rounded-xl border border-border bg-background/80 backdrop-blur-sm shadow-lg" netlify>
          {/* Progress Indicator (Optional but good for UX) */}
          <div className="mb-8">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-primary">Step {currentStep} of {totalSteps}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {renderStep()}

          {/* Navigation Buttons */}
          <div className={cn("mt-8 flex", currentStep > 1 ? "justify-between" : "justify-end")}>
            {currentStep > 1 && (
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
            )}
            <Button onClick={handleNext}>
              {currentStep === totalSteps ? 'Submit Inquiry' : 'Next Step'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
