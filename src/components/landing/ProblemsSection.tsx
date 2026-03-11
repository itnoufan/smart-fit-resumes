import { ShieldX, Copy, Clock } from "lucide-react";

const problems = [
  {
    icon: ShieldX,
    title: "Not ATS Friendly",
    description: "Most resumes get rejected by automated systems before a human ever sees them.",
  },
  {
    icon: Copy,
    title: "Not Tailored for Jobs",
    description: "Sending the same resume to every job dramatically reduces your interview chances.",
  },
  {
    icon: Clock,
    title: "Recruiters Reject Quickly",
    description: "Recruiters spend less than 10 seconds reviewing each resume. Yours needs to stand out instantly.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Most Resumes Fail
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Your resume might be costing you interviews without you even knowing it.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
