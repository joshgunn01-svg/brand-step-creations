import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <div className="container mx-auto py-16">
      <Helmet>
        <title>Terms of Service | GunnJibbitz</title>
        <meta name="description" content="GunnJibbitz terms of service." />
        <link rel="canonical" href="/terms" />
      </Helmet>
      <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
      <p className="text-muted-foreground">These are placeholder terms. Provide your official terms of service content here.</p>
    </div>
  );
}
