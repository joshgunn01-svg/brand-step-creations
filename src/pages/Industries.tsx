import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const INDUSTRIES = [
  { title: "Cafes", use: "Resale, loyalty gifts, staff accessories" },
  { title: "Bars & Venues", use: "Merchandise, event giveaways" },
  { title: "Festivals", use: "Branded souvenirs, VIP perks" },
  { title: "Retail Stores", use: "Point-of-sale add-ons, brand promos" },
  { title: "Tourism & Souvenirs", use: "Destination-branded charms" },
  { title: "Sporting Clubs", use: "Team merchandise, supporter packs" },
  { title: "Schools", use: "House/team spirit items, fundraisers" },
];

export default function Industries() {
  return (
    <div className="container mx-auto py-16">
      <Helmet>
        <title>Industries We Serve | GunnJibbitz</title>
        <meta name="description" content="Cafes, bars, festivals, retail stores, tourism, sporting clubs, and schools use custom Croc charms to drive engagement and sales." />
        <link rel="canonical" href="/industries" />
      </Helmet>
      <h1 className="text-3xl font-semibold mb-6">Industries We Serve</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {INDUSTRIES.map((i) => (
          <article key={i.title} className="rounded-xl border p-6 bg-card">
            <h2 className="font-medium text-lg">{i.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{i.use}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Button asChild variant="cta"><Link to="/contact">Get your free mockup & quote</Link></Button>
      </div>
    </div>
  );
}
