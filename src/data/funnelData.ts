import templateIndia1 from "@/assets/template-india-1.png";
import templateIndia2 from "@/assets/template-india-2.png";
import templateIndia3 from "@/assets/template-india-3.png";
import templateGcc1 from "@/assets/template-gcc-1.png";
import templateEuro1 from "@/assets/template-euro-1.png";
import templateUs1 from "@/assets/template-us-1.png";
import templateUk1 from "@/assets/template-uk-1.png";

export type CVType = "ats" | "gcc" | "india" | "europass" | "uk" | "canada" | "nz" | "us";

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
  { id: "ats", label: "ATS", flag: "🤖", description: "Optimized resume for ATS software used by companies" },
  { id: "gcc", label: "GCC", flag: "🇦🇪", description: "For jobs in UAE, Saudi Arabia, Qatar, Oman" },
  { id: "india", label: "India", flag: "🇮🇳", description: "Best for Indian companies and recruiters" },
  { id: "europass", label: "Europass", flag: "🇪🇺", description: "Standard resume format used in Europe" },
  { id: "uk", label: "UK", flag: "🇬🇧", description: "Professional resume format for UK jobs" },
  { id: "canada", label: "Canada", flag: "🇨🇦", description: "Standard resume for Canadian employers" },
  { id: "nz", label: "New Zealand", flag: "🇳🇿", description: "Resume format preferred by NZ recruiters" },
  { id: "us", label: "US", flag: "🇺🇸", description: "American style resume" },
];

export const templatesByType: Record<CVType, TemplateOption[]> = {
  ats: [
    { id: "ats-1", name: "ATS Optimized", image: templateIndia1, badge: "Most Popular" },
    { id: "ats-2", name: "ATS Clean", image: templateIndia3 },
    { id: "ats-3", name: "ATS Minimal", image: templateUs1 },
  ],
  gcc: [
    { id: "gcc-1", name: "Gulf Professional", image: templateGcc1, badge: "Most Popular" },
    { id: "gcc-2", name: "Dubai Modern", image: templateIndia1 },
    { id: "gcc-3", name: "Riyadh Classic", image: templateIndia2 },
  ],
  india: [
    { id: "ind-1", name: "Professional Blue", image: templateIndia1, badge: "Most Popular" },
    { id: "ind-2", name: "Modern Green", image: templateIndia2 },
    { id: "ind-3", name: "Executive Navy", image: templateIndia3 },
  ],
  europass: [
    { id: "eu-1", name: "Europass Standard", image: templateEuro1, badge: "EU Standard" },
    { id: "eu-2", name: "Modern European", image: templateIndia3 },
    { id: "eu-3", name: "Berlin Minimal", image: templateUs1 },
  ],
  uk: [
    { id: "uk-1", name: "London Professional", image: templateUk1, badge: "Most Popular" },
    { id: "uk-2", name: "Oxford Classic", image: templateEuro1 },
    { id: "uk-3", name: "Cambridge Modern", image: templateIndia2 },
  ],
  canada: [
    { id: "ca-1", name: "Toronto Classic", image: templateUs1, badge: "Most Popular" },
    { id: "ca-2", name: "Vancouver Modern", image: templateIndia1 },
    { id: "ca-3", name: "Ottawa Professional", image: templateIndia3 },
  ],
  nz: [
    { id: "nz-1", name: "Auckland Professional", image: templateUk1, badge: "Most Popular" },
    { id: "nz-2", name: "Wellington Modern", image: templateEuro1 },
    { id: "nz-3", name: "Christchurch Classic", image: templateIndia2 },
  ],
  us: [
    { id: "us-1", name: "Silicon Valley", image: templateUs1, badge: "Most Popular" },
    { id: "us-2", name: "New York Classic", image: templateIndia1 },
    { id: "us-3", name: "Chicago Modern", image: templateIndia3 },
  ],
};
