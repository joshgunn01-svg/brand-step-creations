import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="container mx-auto py-16">
      <Helmet>
        <title>About CustomCharm Co | Custom Shoe Charms B2B</title>
        <meta name="description" content="Learn about CustomCharm Co — specialists in custom shoe charms for businesses. Quality control, fast service, and creative design expertise." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <article className="max-w-3xl">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About CustomCharm Co</h1>
        </header>

        <section className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground text-lg">
            At CustomCharm Co, we turn everyday footwear into powerful branding opportunities.
          </p>
          <p>
            We specialise in creating high-quality, fully customisable Croc charms (Jibbitz) that showcase your logo, design, or message in a fun, eye-catching way. Perfect for cafes, bars, retail stores, events, sporting clubs, and tourism operators, our charms are more than an accessory — they’re a walking advertisement for your brand.
          </p>
          <p>
            What started as a love for creative design and clever marketing quickly became a mission: to help businesses stand out in an affordable, memorable, and practical way. Every charm we produce is made from durable, long-lasting materials and crafted with precision so your brand always looks its best.
          </p>
        </section>

        <section aria-labelledby="process" className="mt-8">
          <h2 id="process" className="sr-only">Our simple process</h2>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <p className="font-medium mb-3">We’ve made the process simple:</p>
            <ul className="grid gap-3 md:grid-cols-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(var(--accent))]" aria-hidden />
                <span>Send us your logo or concept</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(var(--accent))]" aria-hidden />
                <span>Approve your free digital mockup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(var(--accent))]" aria-hidden />
                <span>Receive your order, ready to delight your customers</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 text-base leading-relaxed text-muted-foreground mt-6">
          <p>
            With wholesale pricing starting at just $2 per unit and minimum orders of 500 units, we make it easy to turn your brand into something your customers will want to wear, show off, and talk about.
          </p>
          <p>
            Whether you’re looking for a unique retail product, a promotional giveaway, or a creative addition to your merchandise line, we’re here to make it happen — step by step.
          </p>
        </section>
      </article>
    </div>
  );
}
