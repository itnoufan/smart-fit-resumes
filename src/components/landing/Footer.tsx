import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <FileText className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground">Fit My Job</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Fit My Job. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
