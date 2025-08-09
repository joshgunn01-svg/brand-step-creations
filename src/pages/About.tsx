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
          CustomCharm Co helps businesses turn their brand into premium, wearable moments with
          custom shoe charms. From cafes and bars to festivals, tourism and retail, our
          team delivers high-quality charms that customers love to wear and share.
        </p>
        <p>
          We obsess over quality control, fast communication, and design excellence. Our
          process is built for B2B buyers who need reliability, speed, and a polished
          end product that reflects their brand standards.
        </p>
        <h2>Why partner with us</h2>
        <ul>
          <li>Dedicated designers for clean, on-brand custom charms</li>
          <li>Efficient production timelines and Australia-wide delivery</li>
          <li>Wholesale pricing with clear MOQs and bulk discounts</li>
        </ul>
      </article>
    </div>
  );
}
