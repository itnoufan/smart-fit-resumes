import { FileText, LayoutTemplate, Rocket } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: FileText,
    title: "Choose Your CV Type",
    description: "Select the resume format that fits your career stage and target role.",
  },
  {
    num: "2",
    icon: LayoutTemplate,
    title: "Select an ATS-Friendly Template",
    description: "Pick from professionally designed templates optimized for applicant tracking systems.",
  },
  {
    num: "3",
    icon: Rocket,
    title: "Build & Apply Confidently",
    description: "Customize your resume, check your ATS score, and start applying with confidence.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">Three simple steps to your perfect resume.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {step.num}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
