import heroImg from "@/assets/hero-homepage.jpg";
import cafe1 from "@/assets/gallery-cafe-1.jpg";
import bar1 from "@/assets/gallery-bar-1.jpg";
import retail1 from "@/assets/gallery-retail-1.jpg";
import closeup1 from "@/assets/gallery-closeup-1.jpg";
import tourism1 from "@/assets/gallery-tourism-1.jpg";
import festival1 from "@/assets/gallery-festival-1.jpg";
import processStep1 from "@/assets/process-step-1.jpg";
import processStep2 from "@/assets/process-step-2.jpg";
import processStep3 from "@/assets/process-step-3.jpg";
import processStep4 from "@/assets/process-step-4.jpg";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

const benefits = [
  "Wholesale pricing from $2/unit (min. 500 units)",
  "Custom designs & branding",
  "Fast turnaround & delivery Australia-wide",
  "High-quality, durable materials",
];

const Index = () => {
  const navigate = useNavigate();

  const onPointerMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="bg-background">
      <Helmet>
        <title>Custom Shoe Charms for Businesses | CustomCharm Co</title>
        <meta name="description" content="Custom shoe charms for cafes, bars, retail, events & tourism. From $2/unit. Free mockup & fast delivery Australia-wide." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section onMouseMove={onPointerMove} className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="h-full w-full bg-[var(--gradient-hero)] opacity-60" />
        </div>
        <div className="container mx-auto grid gap-10 py-20 md:grid-cols-2 relative">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Logo, Your Charm
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose">
              Boost brand awareness and delight customers with high-quality, fully customisable shoe charms. Perfect for resale, giveaways, or merchandise.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" onClick={() => navigate("/contact?type=mockup")}>
                Request a Free Mockup
              </Button>
              <Button variant="hero" size="lg" onClick={() => navigate("/contact?type=quote")}>
                Get a Quote
              </Button>
            </div>
            <ul className="grid gap-2 pt-4">
              {benefits.map((b) => (
                <li key={b} className="text-sm text-muted-foreground">• {b}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Custom shoe charms with placeholder logo area showing Your Logo Here on foam clogs"
              loading="eager"
              className="w-full h-auto rounded-xl border shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-6">In Action</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[cafe1, bar1, retail1, closeup1, tourism1, festival1].slice(0,6).map((src, i) => (
            <article key={i} className="group relative overflow-hidden rounded-xl border bg-card">
              <img src={src} alt="Flat-lay grid of PVC rubber clip-in shoe charms (3D embossed), some flipped to show clip hardware — Etsy-style product photo" loading="lazy" className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="link">
            <Link to="/gallery">See more examples →</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b} className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="font-medium">{b.split(" (")[0]}</h3>
              <p className="text-sm text-muted-foreground mt-2">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="rounded-xl border p-10 bg-[hsl(var(--secondary))]">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: 1, title: "Enquire & send logo", image: processStep1 },
              { step: 2, title: "Receive digital mockup", image: processStep2 },
              { step: 3, title: "Approve & confirm", image: processStep3 },
              { step: 4, title: "Production & delivery", image: processStep4 },
            ].map(({ step, title, image }) => (
              <div key={step} className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden border bg-card">
                  <img 
                    src={image} 
                    alt={`Step ${step}: ${title}`} 
                    loading="lazy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--sidebar-primary-foreground))] grid place-items-center font-semibold">
                    {step}
                  </div>
                  <h4 className="font-medium">{title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Button asChild variant="cta"><Link to="/process">See the full process</Link></Button>
            <Button asChild variant="outline"><Link to="/contact">Start your enquiry</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
