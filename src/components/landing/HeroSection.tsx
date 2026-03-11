import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Launch Offer — ₹99 Only
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tight mb-6 animate-fade-in-up">
            Create a Resume That Gets More{" "}
            <span className="text-gradient">Interview Calls</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Upload the job description and instantly generate an ATS‑optimized resume tailored for the job you want.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="cta" size="xl">
              Create My Resume Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              <Eye className="w-4 h-4" />
              View Templates
            </Button>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-3xl -z-10" />
          <img
            src={heroMockup}
            alt="Fit My Job Resume Builder interface showing a professional resume with 92% ATS score"
            className="w-full rounded-2xl shadow-elevated border border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
