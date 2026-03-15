import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Fit My Job" className="w-8 h-8 rounded-lg object-cover" />
          <span className="font-display font-bold text-lg text-foreground">Fit My Job</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <Button variant="cta" size="default" className="text-xs sm:text-sm px-3 sm:px-4">
          <span className="hidden sm:inline">Create My Resume</span>
          <span className="sm:hidden">Start Now</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
