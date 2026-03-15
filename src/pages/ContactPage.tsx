import LegalPageLayout from "@/components/LegalPageLayout";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => (
  <LegalPageLayout title="Contact Us">
    <p>We'd love to hear from you. Whether you have a question, feedback, or need support — reach out to us.</p>

    <div className="grid sm:grid-cols-3 gap-4 my-8 not-prose">
      <div className="bg-card border border-border rounded-xl p-5 text-center">
        <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
        <p className="font-display font-bold text-foreground text-sm mb-1">Email</p>
        <a href="mailto:support@fitmyjob.com" className="text-primary text-sm hover:underline">support@fitmyjob.com</a>
      </div>
      <div className="bg-card border border-border rounded-xl p-5 text-center">
        <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
        <p className="font-display font-bold text-foreground text-sm mb-1">Phone</p>
        <p className="text-muted-foreground text-sm">+91 98765 43210</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-5 text-center">
        <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
        <p className="font-display font-bold text-foreground text-sm mb-1">Location</p>
        <p className="text-muted-foreground text-sm">India</p>
      </div>
    </div>

    <h2>Business Hours</h2>
    <p>Monday to Saturday: 9:00 AM – 6:00 PM IST</p>
    <p>Sunday: Closed</p>

    <h2>Response Time</h2>
    <p>We typically respond to all inquiries within 24 hours on business days.</p>
  </LegalPageLayout>
);

export default ContactPage;
