import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="container mx-auto py-16">
      <Helmet>
        <title>About CustomCharm Co | Custom Shoe Charms B2B</title>
        <meta name="description" content="Learn about CustomCharm Co — specialists in custom shoe charms for businesses. Quality control, fast service, and creative design expertise." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <article className="prose max-w-3xl">
        <h1>About CustomCharm Co</h1>
        <p>
          At CustomCharm Co, we turn everyday footwear into powerful branding opportunities.
        </p>
        <p>
          We specialise in creating high-quality, fully customisable Croc charms (Jibbitz) that showcase your logo, design, or message in a fun, eye-catching way. Perfect for cafes, bars, retail stores, events, sporting clubs, and tourism operators, our charms are more than an accessory — they’re a walking advertisement for your brand.
        </p>
        <p>
          What started as a love for creative design and clever marketing quickly became a mission: to help businesses stand out in an affordable, memorable, and practical way. Every charm we produce is made from durable, long-lasting materials and crafted with precision so your brand always looks its best.
        </p>
        <p>We’ve made the process simple:</p>
        <ul>
          <li>Send us your logo or concept</li>
          <li>Approve your free digital mockup</li>
          <li>Receive your order, ready to delight your customers</li>
        </ul>
        <p>
          With wholesale pricing starting at just $2 per unit and minimum orders of 500 units, we make it easy to turn your brand into something your customers will want to wear, show off, and talk about.
        </p>
        <p>
          Whether you’re looking for a unique retail product, a promotional giveaway, or a creative addition to your merchandise line, we’re here to make it happen — step by step.
        </p>
      </article>
    </div>
  );
}
