import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function SiteFooter() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email" });
      return;
    }
    toast({ title: "Subscribed!", description: "We'll keep you posted with offers." });
    setEmail("");
  };

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto grid gap-8 py-12 md:grid-cols-2">
        <div className="space-y-3">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[hsl(var(--accent))]" aria-hidden />
            <span className="text-base font-semibold">GunnJibbitz</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-md">
            Premium custom Croc charms for businesses. Wholesale quality, fast turnaround, expert design.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Get product updates and offers</p>
          <form onSubmit={subscribe} className="flex gap-2 max-w-sm">
            <Input
              type="email"
              placeholder="you@business.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="cta">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} GunnJibbitz. All rights reserved.</p>
          <nav className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
