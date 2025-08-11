const heroImg = "lovable-uploads/2d61b2a2-d92c-4e2b-88a8-ba5f162e7dfb-clean.png";
import processStep1 from "@/assets/process-step-1.jpg";
import processStep2 from "@/assets/process-step-2.jpg";
import processStep3 from "@/assets/process-step-3.jpg";
import processStep4 from "@/assets/process-step-4.jpg";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const benefits = ["Wholesale pricing from $1.50/unit (min. 500 units)", "Custom designs & branding", "Fast turnaround & delivery Australia-wide", "High-quality, durable materials"];
const Index = () => {
  const navigate = useNavigate();
  const onPointerMove: React.MouseEventHandler<HTMLDivElement> = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };
  return <div className="bg-background">
      <Helmet>
        <title>Your Logo,  
Your Charm</title>
        <meta name="description" content="Custom shoe charms for cafes, bars, retail, events & tourism. From $1.50/unit. Free mockup & fast delivery Australia-wide." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="container mx-auto py-6 md:py-10">
        {/* Mobile hero */}
        <div className="relative md:hidden h-[60vh] min-h-[380px] rounded-xl overflow-hidden border shadow-2xl">
          <img
            src={heroImg}
            alt="Hero: white foam clogs with cafe-themed 3D charms (coffee cup, shopping bag, 'Your Logo Here' shield, heart, dumbbells, QR code)"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-transparent" aria-hidden />
          <div className="absolute top-0 left-0 p-6 max-w-[85%]">
            <h1 className="text-4xl font-bold leading-tight">
              <span className="block">Your Logo</span>
              <span className="block">Your Charm</span>
            </h1>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="cta" size="lg" onClick={() => navigate("/contact?type=mockup")}>
                Request a Free Mockup
              </Button>
              <Button variant="hero" size="lg" onClick={() => navigate("/contact?type=quote")}>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
        {/* Desktop/Tablet hero */}
        <AspectRatio ratio={16 / 9} className="relative hidden md:block rounded-xl overflow-hidden border shadow-2xl">
          <img src={heroImg} alt="Hero: white foam clogs with cafe-themed 3D charms (coffee cup, shopping bag, 'Your Logo Here' shield, heart, dumbbells, QR code)" loading="eager" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/40 to-transparent" aria-hidden />
          <div className="absolute top-0 left-0 p-10 max-w-xl">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="block">Your Logo</span>
              <span className="block">Your Charm</span>
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-prose">Boost brand awareness with custom<br />PVC charms for cafes, retail, events & tourism.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="cta" size="lg" onClick={() => navigate("/contact?type=mockup")}>
                Request a Free Mockup
              </Button>
              <Button variant="hero" size="lg" onClick={() => navigate("/contact?type=quote")}>
                Get a Quote
              </Button>
            </div>
          </div>
        </AspectRatio>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-6">Example Designs</h2>
        <div className="grid gap-6 md:grid-cols-3">
{["lovable-uploads/84d7e845-e760-4710-9fa8-1957691e6b38.png", "lovable-uploads/072ecd0d-864d-4225-93db-6bb9a31ad0ed.png", "lovable-uploads/df0b164a-c28d-40a1-8f0d-4f086b83df7a.png", "lovable-uploads/44d1ae5e-ac9b-4bae-b191-5d2773e34391.png", "lovable-uploads/463cdbfe-e8a8-4475-8115-ac238f8c2214.png", "lovable-uploads/2ba1dd87-b771-411a-bbbf-8316c0a8555b.png"].slice(0, 6).map((src, i) => <article key={i} className="group relative overflow-hidden rounded-xl border bg-card">
              <img src={src} alt="Product photo: custom PVC shoe charms clipped into foam clog holes, 3D embossed and professionally lit" loading="lazy" className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </article>)}
        </div>
        
      </section>

      <section className="container mx-auto py-16 bg-gray-50">
        <div className="grid gap-8 md:grid-cols-4">
          {benefits.map(b => <div key={b} className="rounded-lg border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">{b}</p>
            </div>)}
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="rounded-xl border p-10 bg-[hsl(var(--secondary))]">
          <div className="grid gap-6 md:grid-cols-4">
            {[{
            step: 1,
            title: "Enquire & send logo free",
            image: processStep1
          }, {
            step: 2,
            title: "Receive digital mockup",
            image: processStep2
          }, {
            step: 3,
            title: "Approve & confirm",
            image: processStep3
          }, {
            step: 4,
            title: "Production & delivery",
            image: processStep4
          }].map(({
            step,
            title,
            image
          }) => <div key={step} className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden border bg-card">
                  <img src={image} alt={`Step ${step}: ${title}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--sidebar-primary-foreground))] grid place-items-center font-semibold">
                    {step}
                  </div>
                  <h4 className="font-medium">{title}</h4>
                </div>
              </div>)}
          </div>
          <div className="mt-8 flex gap-3">
            <Button asChild variant="outline"><Link to="/contact">Start your enquiry</Link></Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;