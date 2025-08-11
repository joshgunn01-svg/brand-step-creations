import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [params] = useSearchParams();
  const defaultType = useMemo(() => {
    const t = params.get("type");
    if (t === "quote") return "Quote";
    return "Mockup";
  }, [params]);

  const [form, setForm] = useState({
    type: defaultType,
    name: "",
    business: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
const [fileName, setFileName] = useState<string>("");
const [enquiryWebhook, setEnquiryWebhook] = useState<string>(() => localStorage.getItem('zapier_enquiry_webhook') || '');
const [isSending, setIsSending] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!form.name || !form.email || !form.business) {
    toast({ title: "Please fill in name, business and email." });
    return;
  }
  if (!enquiryWebhook) {
    toast({ title: "Add your Zapier webhook URL", description: "Paste it in the field below the message box.", });
    return;
  }
  try {
    setIsSending(true);
    // Persist webhook locally for future use
    localStorage.setItem('zapier_enquiry_webhook', enquiryWebhook);

    await fetch(enquiryWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
      body: JSON.stringify({
        event: 'enquiry',
        notify_email: 'customcharmco1@gmail.com',
        ...form,
        fileName,
        timestamp: new Date().toISOString(),
        source: window.location.href,
      }),
    });

    toast({
      title: "Enquiry sent!",
      description: "Thanks — we'll reply within 1 business day with your mockup/quote.",
    });
    setForm({ ...form, message: "" });
  } catch (err) {
    console.error('Enquiry webhook error', err);
    toast({ title: "Error", description: "Couldn't send enquiry. Check your Zapier webhook and try again.", });
  } finally {
    setIsSending(false);
  }
};

  return (
    <div className="container mx-auto py-16">
      <Helmet>
        <title>Enquire | Free Mockup & Quote | CustomCharm Co</title>
        <meta name="description" content="Send your logo and details to get a free mockup and quote for custom shoe charms. Wholesale pricing from $1.50/unit." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Get Your Free Mockup & Quote</h1>
          <p className="text-muted-foreground mb-6">Short form — we’ll respond within one business day.</p>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="type">Request Type</Label>
              <select id="type" name="type" value={form.type} onChange={onChange} className="h-10 rounded-md border bg-background px-3 text-sm">
                <option>Mockup</option>
                <option>Quote</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={form.name} onChange={onChange} placeholder="Jane Smith" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="business">Business Name</Label>
              <Input id="business" name="business" value={form.business} onChange={onChange} placeholder="Your Cafe Pty Ltd" />
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@business.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+61" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="industry">Industry</Label>
              <select id="industry" name="industry" value={form.industry} onChange={onChange} className="h-10 rounded-md border bg-background px-3 text-sm">
                <option value="">Select</option>
                {['Cafes','Bars & Venues','Festivals','Retail Stores','Tourism','Sporting Clubs','Schools','Other'].map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="logo">Upload Logo (optional)</Label>
              <input
                id="logo"
                type="file"
                accept="image/*, .svg, .ai, .pdf"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                className="h-10 rounded-md border bg-background px-3 text-sm file:mr-3 file:rounded file:border-0 file:bg-[hsl(var(--secondary))] file:px-3 file:py-2"
              />
              {fileName && <p className="text-xs text-muted-foreground">Selected: {fileName}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={4} value={form.message} onChange={onChange} placeholder="Tell us about your design, quantities, deadlines…" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="enquiry-webhook">Zapier Webhook (Enquiries)</Label>
              <Input
                id="enquiry-webhook"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={enquiryWebhook}
                onChange={(e) => setEnquiryWebhook(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">We store this locally in your browser. Your Zap can email enquiries to customcharmco1@gmail.com and forward details to your tools.</p>
            </div>
            <div className="flex gap-3">
              <Button type="submit" variant="cta" disabled={isSending}>{isSending ? 'Sending…' : 'Send Enquiry'}</Button>
              <Button type="button" variant="outline" onClick={() => setForm({ ...form, message: "" })}>Clear</Button>
            </div>
          </form>
        </div>
        <aside className="rounded-xl border p-6 bg-secondary">
          <h2 className="text-xl font-medium mb-2">Fast, professional B2B support</h2>
          <ul className="text-sm text-muted-foreground grid gap-2">
            <li>• From $1.50/unit — 500 unit minimum</li>
            <li>• Free digital mockup</li>
            <li>• Australia-wide tracked delivery</li>
            <li>• Designer feedback to keep it on-brand</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
