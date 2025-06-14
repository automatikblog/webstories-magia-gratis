
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { WebStoriesExamples } from "@/components/WebStoriesExamples";
import { Testimonials } from "@/components/Testimonials";
import { ThankYou } from "@/components/ThankYou";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleFormSubmit = (url: string) => {
    setRedirectUrl(url);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <ThankYou redirectUrl={redirectUrl} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Benefits />
            <LeadForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
      
      <HowItWorks />
      <WebStoriesExamples />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
