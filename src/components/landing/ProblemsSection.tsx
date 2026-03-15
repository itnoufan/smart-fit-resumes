import { ShieldX, Copy, Clock } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: ShieldX,
    title: "Not ATS Friendly",
    stat: "75%",
    statLabel: "resumes rejected by ATS",
    description: "Most resumes get rejected by automated systems before a human ever sees them.",
  },
  {
    icon: Copy,
    title: "Not Tailored for Jobs",
    stat: "63%",
    statLabel: "drop in callback rates",
    description: "Sending the same resume to every job dramatically reduces your interview chances.",
  },
  {
    icon: Clock,
    title: "Recruiters Reject Quickly",
    stat: "6 sec",
    statLabel: "average review time",
    description: "Recruiters spend seconds reviewing each resume. Yours needs to stand out instantly.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-14 lg:py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3"
          >
            Why Most Resumes Fail
          </motion.h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
            Your resume might be costing you interviews without you even knowing it.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl font-extrabold text-destructive">{problem.stat}</span>
                  <p className="text-[10px] text-muted-foreground leading-tight">{problem.statLabel}</p>
                </div>
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-1.5">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
