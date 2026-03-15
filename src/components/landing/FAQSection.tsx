import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Will this resume pass ATS systems?",
    a: "Yes. Every template is specifically designed and tested to pass major Applicant Tracking Systems like Workday, Greenhouse, Lever, and more. Our ATS Score Checker gives you a compatibility score before you apply.",
  },
  {
    q: "How long does it take?",
    a: "Most users build a polished, ATS-optimized resume in under 15 minutes. Just upload the job description, select a template, and our AI fills in the rest.",
  },
  {
    q: "Can I create multiple resumes?",
    a: "Absolutely! Your plan includes unlimited resumes for one full year. Create a tailored resume for every job application.",
  },
  {
    q: "Is this better than Canva templates?",
    a: "Canva templates look great but often fail ATS systems because of their graphic-heavy layouts. Fit My Job templates are built for ATS compatibility while still looking professional.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
