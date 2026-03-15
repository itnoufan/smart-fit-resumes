import templateIndia1 from "@/assets/template-india-1.png";
import templateIndia2 from "@/assets/template-india-2.png";
import templateIndia3 from "@/assets/template-india-3.png";
import templateGcc1 from "@/assets/template-gcc-1.png";
import templateEuro1 from "@/assets/template-euro-1.png";
import templateUs1 from "@/assets/template-us-1.png";
import templateUk1 from "@/assets/template-uk-1.png";
import templateShowcase from "@/assets/templates-showcase.png";

const templates = [
  { name: "Classic", desc: "With Profile Image", image: templateIndia1 },
  { name: "Professional", desc: "Text-Only Header", image: templateIndia2 },
  { name: "ATS-Friendly", desc: "For Applicant Tracking", image: templateIndia3 },
  { name: "Minimalist", desc: "Plain, No Sidebar", image: templateGcc1 },
  { name: "Modern", desc: "Dark Sidebar Layout", image: templateEuro1 },
  { name: "Creative Split", desc: "Asymmetric Header", image: templateUs1 },
  { name: "Centered Focus", desc: "Bold Centered Profile", image: templateUk1 },
  { name: "Modern Banner", desc: "Overlapping Profile", image: templateShowcase },
];

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            ATS Friendly Templates
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pick a Template You Love
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose a template optimized for ATS and recruiters.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {templates.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={t.image}
                  alt={`${t.name} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-display font-bold text-foreground text-sm">{t.name}</h3>
                <p className="text-muted-foreground text-xs">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
