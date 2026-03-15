import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Shield } from "lucide-react";

interface FunnelStepThreeProps {
  onSubmit: (contactNumber: string, jobTitle: string) => void;
}

const FunnelStepThree = ({ onSubmit }: FunnelStepThreeProps) => {
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [errors, setErrors] = useState<{ email?: string; contact?: string }>({});

  const handleSubmit = () => {
    const newErrors: { email?: string; contact?: string } = {};
    const trimmedEmail = email.trim();
    const trimmedContact = contactNumber.trim();

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!trimmedContact || trimmedContact.length < 7 || trimmedContact.length > 20) {
      newErrors.contact = "Enter a valid contact number";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    onSubmit(trimmedContact, trimmedEmail);
  };

  return (
    <div className="p-6 sm:p-8">
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
        Quick Details
      </h2>
      <p className="text-muted-foreground mb-6">
        We'll use this to send you your resume and keep you updated.
      </p>
      <div className="space-y-5 max-w-md">
        <div>
          <Label htmlFor="email" className="font-semibold text-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            className="mt-1.5 h-12 rounded-xl"
          />
          {errors.email && (
            <p className="text-destructive text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <Label htmlFor="contactNumber" className="font-semibold text-foreground">
            Contact Number
          </Label>
          <Input
            id="contactNumber"
            type="tel"
            placeholder="+91 98765 43210"
            value={contactNumber}
            onChange={(e) => {
              setContactNumber(e.target.value);
              setErrors((prev) => ({ ...prev, contact: undefined }));
            }}
            maxLength={20}
            className="mt-1.5 h-12 rounded-xl"
          />
          {errors.contact && (
            <p className="text-destructive text-xs mt-1">{errors.contact}</p>
          )}
        </div>
        <Button variant="cta" size="xl" className="w-full" onClick={handleSubmit}>
          Continue
          <ArrowRight className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2 text-muted-foreground text-xs justify-center">
          <Shield className="w-3.5 h-3.5" />
          <span>Your information is secure and never shared.</span>
        </div>
      </div>
    </div>
  );
};

export default FunnelStepThree;
