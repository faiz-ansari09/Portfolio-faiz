import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Faiz Ansari. All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-4 top-4"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
