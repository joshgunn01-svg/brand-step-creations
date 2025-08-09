import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  { n: 1, title: "Enquire & send your logo/design", desc: "Tell us about your brand, use-case, and any design notes." },
  { n: 2, title: "Receive a digital mockup", desc: "Our designers prepare a professional mockup for review." },
  { n: 3, title: "Approve & confirm order", desc: "We finalize specs, quantities, and timelines." },
  { n: 4, title: "Production & delivery", desc: "High-quality manufacturing and tracked delivery Australia-wide." },
];

export default function Process() {
  return (
    <div className="container mx-auto py-16">
      <Helmet>
        <title>Custom Charm Process | CustomCharm Co</title>
        <meta name="description" content="See how our 4-step process creates premium custom shoe charms: enquire, mockup, approve, and delivery." />
        <link rel="canonical" href="/process" />
      </Helmet>
      <h1 className="text-3xl font-semibold mb-8">Our Process</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((s) => (
          <div key={s.n} className="rounded-xl border p-6">
            <div className="h-9 w-9 rounded-md bg-[hsl(var(--accent))] grid place-items-center font-semibold text-[hsl(var(--sidebar-primary-foreground))] mb-3">{s.n}</div>
            <h2 className="text-xl font-medium">{s.title}</h2>
            <p className="text-muted-foreground mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <Button asChild variant="cta"><Link to="/contact?type=mockup">Get your free mockup</Link></Button>
        <Button asChild variant="outline"><Link to="/contact?type=quote">Request a quote</Link></Button>
      </div>
    </div>
  );
}
