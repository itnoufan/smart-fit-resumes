import { LayoutTemplate, Target, BarChart3, FileEdit, Globe } from "lucide-react";

const features = [
  { icon: LayoutTemplate, title: "ATS-Friendly Templates", description: "Professionally designed to pass automated screening systems." },
  { icon: Target, title: "Job Description Optimization", description: "Upload a JD and auto-optimize your resume for that role." },
  { icon: BarChart3, title: "ATS Score Checker", description: "Know your resume's compatibility score before you apply." },
  { icon: FileEdit, title: "Cover Letter Builder", description: "Generate tailored cover letters that complement your resume." },
  { icon: Globe, title: "Global Resume Formats", description: "India, GCC, Europass, US, UK, Canada, NZ — we've got you covered." },
];

const ValueStackSection = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Land Interviews
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            One platform with all the tools to create, optimize, and perfect your resume.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
