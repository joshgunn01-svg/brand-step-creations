import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Enquire" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-[hsl(var(--accent))] shadow-[var(--shadow-glow)]" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">CustomCharm Co</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="cta" size="sm">
            <Link to="/contact?type=mockup">Request Free Mockup</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
