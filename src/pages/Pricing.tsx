import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="container mx-auto py-16">
      <Helmet>
        <title>Pricing | Wholesale Custom Croc Charms</title>
        <meta name="description" content="Wholesale pricing from $2/unit (minimum 500 units). Bulk discounts available. Request a custom quote today." />
        <link rel="canonical" href="/pricing" />
      </Helmet>
      <h1 className="text-3xl font-semibold mb-4">Pricing & Minimum Order</h1>
      <div className="rounded-xl border p-8 bg-card max-w-2xl">
        <p className="text-lg font-medium">From $2 / unit</p>
        <p className="text-muted-foreground">Minimum order: 500 units</p>
        <p className="text-sm text-muted-foreground mt-2">Bulk discounts available for larger quantities. Pricing varies by complexity and finish.</p>
        <div className="mt-6 flex gap-3">
          <Button asChild variant="cta"><Link to="/contact?type=quote">Request a Quote</Link></Button>
          <Button asChild variant="outline"><Link to="/contact?type=mockup">Get a Free Mockup</Link></Button>
        </div>
      </div>
    </div>
  );
}
