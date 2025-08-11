import { Helmet } from "react-helmet-async";
import cafe1 from "@/assets/gallery-cafe-1.jpg";
import bar1 from "@/assets/gallery-bar-1.jpg";
import retail1 from "@/assets/gallery-retail-1.jpg";
import closeup1 from "@/assets/gallery-closeup-1.jpg";
import tourism1 from "@/assets/gallery-tourism-1.jpg";
import festival1 from "@/assets/gallery-festival-1.jpg";

const IMAGES = [cafe1, bar1, retail1, closeup1, tourism1, festival1];

export default function Gallery() {
  return (
    <div className="container mx-auto py-10 md:py-16">
      <Helmet>
        <title>Gallery: Custom Shoe Charms | CustomCharm Co</title>
        <meta name="description" content="Explore examples of custom shoe charms in cafes, events, retail displays, and tourism settings." />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Gallery & Examples</h1>
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {IMAGES.map((src, idx) => (
          <article key={idx} className="overflow-hidden rounded-xl border bg-card">
            <img src={src} alt="Australian-themed custom shoe charms example (koala, kangaroo, Opera House, flag, wattle, ibis)" loading="lazy" className="h-64 w-full object-cover" />
          </article>
        ))}
      </div>
    </div>
  );
}
