import { Link } from "react-router-dom";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/" className="text-primary text-sm font-medium hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">{title}</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
