import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <div className="container mx-auto py-10 md:py-16">
      <Helmet>
        <title>Privacy Policy | CustomCharm Co</title>
        <meta name="description" content="CustomCharm Co privacy policy." />
        <link rel="canonical" href="/privacy" />
      </Helmet>
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground">We respect your privacy. This is a placeholder policy. Provide your official policy content here.</p>
    </div>
  );
}
