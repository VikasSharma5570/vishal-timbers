import { useEffect, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Button } from "@/components/ui/button";
import { InquiryDialog } from "../components/InquiryDialog";

export default function Contact() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.title = "Contact | Vishal Timbers"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--brand-clay)" }}>Contact</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">Let's create something together.</h1>
        <p className="text-muted-foreground mb-10">Tell us about your requirements — quantities, finishes, customizations or shipping. Our export team responds within 24 hours.</p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">
          <div className="p-6 border border-border"><div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Address</div><div>Jaipur, Rajasthan, India</div></div>
          <div className="p-6 border border-border"><div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</div><div>info@vishaltimbers.example</div></div>
          <div className="p-6 border border-border"><div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</div><div>+91 00000 00000</div></div>
        </div>
        <Button onClick={() => setOpen(true)} className="text-white rounded-none px-10 py-6 tracking-wider uppercase text-sm" style={{ background: "var(--brand-clay)" }}>
          Send an Inquiry
        </Button>
        <InquiryDialog open={open} onOpenChange={setOpen} />
      </main>
      <SiteFooter />
    </div>
  );
}
