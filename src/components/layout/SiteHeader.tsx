import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Enquire" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--header-bg))] text-[hsl(var(--foreground))]">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="CustomCharm Co home">
          <img src="/lovable-uploads/f3131de9-b91a-4967-af42-829c67c78fd5.png" alt="CustomCharm Co logo" loading="eager" width={32} height={32} className="h-8 w-8" />
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
