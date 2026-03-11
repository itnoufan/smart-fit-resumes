import templatesImage from "@/assets/templates-showcase.png";

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            ATS Friendly Templates
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Templates That Pass ATS
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every template is designed and tested to pass applicant tracking systems used by top companies.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <img
            src={templatesImage}
            alt="Three ATS-friendly resume templates side by side"
            className="w-full rounded-2xl shadow-elevated border border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
