import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subWebhook, setSubWebhook] = useState<string>(() => localStorage.getItem('zapier_subscribers_webhook') || '');
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email" });
      return;
    }
    if (!subWebhook) {
      toast({ title: "Add your Zapier webhook URL", description: "Paste it in the field below the form." });
      return;
    }

    try {
      setIsLoading(true);
      localStorage.setItem('zapier_subscribers_webhook', subWebhook);
      await fetch(subWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          event: 'subscribe',
          email,
          notify_email: 'customcharmco1@gmail.com',
          timestamp: new Date().toISOString(),
          source: window.location.href,
        }),
      });
      toast({ title: "Subscribed!", description: "Request sent to Zapier. Check your Zap's task history." });
      setEmail("");
    } catch (error) {
      console.error('Subscribe webhook error', error);
      toast({ title: "Error", description: "Failed to trigger Zapier webhook. Check the URL and try again.", });
    } finally {
      setIsLoading(false);
    }
  };
  return <footer className="border-t bg-background">
      <div className="container mx-auto grid gap-8 py-12 md:grid-cols-2 bg-gray-50">
        <div className="space-y-3">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src="lovable-uploads/f3131de9-b91a-4967-af42-829c67c78fd5.png" alt="CustomCharm Co logo" loading="lazy" width={32} height={32} className="h-8 w-8" />
            <span className="text-base font-semibold">CustomCharm Co</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-md">
            Premium custom shoe charms for businesses. Wholesale quality, fast turnaround, expert design.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Get product updates and offers</p>
          <form onSubmit={subscribe} className="flex gap-2 max-w-sm">
            <Input type="email" placeholder="you@business.com" value={email} onChange={e => setEmail(e.target.value)} />
            <Button type="submit" variant="cta" disabled={isLoading}>{isLoading ? 'Sending…' : 'Subscribe'}</Button>
          </form>
          <div className="grid gap-1 max-w-sm">
            <label htmlFor="sub-webhook" className="text-xs text-muted-foreground">Zapier Webhook (Subscribers)</label>
            <Input id="sub-webhook" placeholder="https://hooks.zapier.com/hooks/catch/..." value={subWebhook} onChange={(e) => setSubWebhook(e.target.value)} />
            <p className="text-xs text-muted-foreground">We store this locally in your browser. Point your Zap to add a row in Google Sheets.</p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} CustomCharm Co. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}