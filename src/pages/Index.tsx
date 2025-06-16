
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { WebStoriesExamples } from "@/components/WebStoriesExamples";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Benefits />
            <LeadForm />
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
