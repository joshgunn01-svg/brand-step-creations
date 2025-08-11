import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--header-bg))] text-[hsl(var(--foreground))]">
      <div className="container mx-auto flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2" aria-label="CustomCharm Co home">
          <img src="/lovable-uploads/f3131de9-b91a-4967-af42-829c67c78fd5.png" alt="CustomCharm Co logo" loading="eager" width={32} height={32} className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight">CustomCharm Co</span>
        </Link>
        <div className="ml-auto flex items-center gap-6">
          {/* Desktop nav */}
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

          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="mt-6 grid gap-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-base transition-colors ${isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6">
                <SheetClose asChild>
                  <Button asChild variant="cta" className="w-full">
                    <Link to="/contact?type=mockup">Request Free Mockup</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          {/* CTA (still visible on mobile next to menu) */}
          <Button asChild variant="cta" size="sm" className="hidden md:inline-flex">
            <Link to="/contact?type=mockup">Request Free Mockup</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
