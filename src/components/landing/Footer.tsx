import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const footerLinks = [
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Refund & Cancellation", path: "/refund" },
  { label: "Service Delivery", path: "/service-delivery" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Fit My Job" className="w-7 h-7 rounded-lg object-cover" />
            <span className="font-display font-bold text-foreground">Fit My Job</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Fit My Job. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
