import { CheckCircle2 } from "lucide-react";

const benefits = [
  "AI-powered resume optimization based on job descriptions",
  "Real-time ATS compatibility scoring",
  "Professional templates used by top companies",
  "Country-specific formats for global job markets",
];

const SolutionSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Smart Resume Builder for Job Seekers
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Fit My Job helps you create a professionally optimized resume in minutes — not hours. Just upload the job description and let our AI do the rest.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 p-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
