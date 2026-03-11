import templateIndia1 from "@/assets/template-india-1.png";
import templateIndia2 from "@/assets/template-india-2.png";
import templateIndia3 from "@/assets/template-india-3.png";
import templateGcc1 from "@/assets/template-gcc-1.png";
import templateEuro1 from "@/assets/template-euro-1.png";
import templateUs1 from "@/assets/template-us-1.png";
import templateUk1 from "@/assets/template-uk-1.png";

export type CVType = "india" | "gcc" | "europass" | "us-canada" | "uk";

export interface CVTypeOption {
  id: CVType;
  label: string;
  flag: string;
  description: string;
}

export interface TemplateOption {
  id: string;
  name: string;
  image: string;
  badge?: string;
}

export const cvTypes: CVTypeOption[] = [
  { id: "india", label: "India Resume", flag: "🇮🇳", description: "Optimized for Indian job market & recruiters" },
  { id: "gcc", label: "GCC Resume", flag: "🇦🇪", description: "Tailored for Gulf countries (UAE, Saudi, Qatar)" },
  { id: "europass", label: "Europass CV", flag: "🇪🇺", description: "EU-standard format accepted across Europe" },
  { id: "us-canada", label: "US / Canada Resume", flag: "🇺🇸", description: "ATS-optimized for North American companies" },
  { id: "uk", label: "UK Resume", flag: "🇬🇧", description: "British CV format for UK employers" },
];

export const templatesByType: Record<CVType, TemplateOption[]> = {
  india: [
    { id: "ind-1", name: "Professional Blue", image: templateIndia1, badge: "Most Popular" },
    { id: "ind-2", name: "Modern Green", image: templateIndia2 },
    { id: "ind-3", name: "Executive Navy", image: templateIndia3 },
  ],
  gcc: [
    { id: "gcc-1", name: "Gulf Professional", image: templateGcc1, badge: "Most Popular" },
    { id: "gcc-2", name: "Dubai Modern", image: templateIndia1 },
    { id: "gcc-3", name: "Riyadh Classic", image: templateIndia2 },
  ],
  europass: [
    { id: "eu-1", name: "Europass Standard", image: templateEuro1, badge: "EU Standard" },
    { id: "eu-2", name: "Modern European", image: templateIndia3 },
    { id: "eu-3", name: "Berlin Minimal", image: templateUs1 },
  ],
  "us-canada": [
    { id: "us-1", name: "Silicon Valley", image: templateUs1, badge: "Most Popular" },
    { id: "us-2", name: "New York Classic", image: templateIndia1 },
    { id: "us-3", name: "Toronto Modern", image: templateIndia3 },
  ],
  uk: [
    { id: "uk-1", name: "London Professional", image: templateUk1, badge: "Most Popular" },
    { id: "uk-2", name: "Oxford Classic", image: templateEuro1 },
    { id: "uk-3", name: "Cambridge Modern", image: templateIndia2 },
  ],
};
