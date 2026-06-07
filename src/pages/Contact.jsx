import { useEffect, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Button } from "@/components/ui/button";
import { InquiryDialog } from "../components/InquiryDialog";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"; // Ensure lucide-react is installed

export default function Contact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Contact | Vishal Timbers";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]"> {/* Soft, elegant background */}
      <SiteHeader />
      
      <main className="flex-1 flex items-center justify-center py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline & Primary CTA */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-6">
              <div>
                <p 
                  className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 inline-block lg:block" 
                  style={{ color: "var(--brand-clay)" }}
                >
                  Get In Touch
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1]">
                  Let's create something <span className="italic font-normal">together.</span>
                </h1>
              </div>
              
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Tell us about your requirements — quantities, finishes, customizations, or global shipping. Our dedicated export team typically responds within 24 hours.
              </p>

              <div className="pt-4 hidden lg:block">
                <Button 
                  onClick={() => setOpen(true)} 
                  className="text-white rounded-none px-8 py-6 tracking-widest uppercase text-xs transition-transform duration-300 hover:scale-[1.02]" 
                  style={{ background: "var(--brand-clay)" }}
                >
                  Send an Inquiry <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Column: Interactive Info Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Address Card */}
              <a 
                href="https://maps.google.com/?q=Jaipur,+Rajasthan,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 bg-white border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between sm:col-span-2"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                      <MapPin className="w-4 h-4" style={{ color: "var(--brand-clay)" }} />
                      <span>Headquarters</span>
                    </div>
                    <div className="text-lg sm:text-xl font-medium text-neutral-800">
                      Jaipur, Rajasthan, India
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors hidden sm:inline-block">View Map →</span>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:Vishaltimbers27@gmail.com" 
                className="group p-6 sm:p-8 bg-white border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    <Mail className="w-4 h-4" style={{ color: "var(--brand-clay)" }} />
                    <span>Email Us</span>
                  </div>
                  <div className="text-base sm:text-lg font-medium text-neutral-800 break-all group-hover:underline decoration-neutral-400 object-contain">
                    Vishaltimbers27@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+917301010197" 
                className="group p-6 sm:p-8 bg-white border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    <Phone className="w-4 h-4" style={{ color: "var(--brand-clay)" }} />
                    <span>Call Us</span>
                  </div>
                  <div className="text-base sm:text-lg font-medium text-neutral-800 group-hover:underline decoration-neutral-400">
                    +91 73010 10197
                  </div>
                </div>
              </a>

            </div>

            {/* Mobile/Tablet CTA Button Fallback */}
            <div className="text-center lg:hidden pt-4">
              <Button 
                onClick={() => setOpen(true)} 
                className="w-full sm:w-auto text-white rounded-none px-10 py-6 tracking-widest uppercase text-xs" 
                style={{ background: "var(--brand-clay)" }}
              >
                Send an Inquiry
              </Button>
            </div>

          </div>
        </div>
      </main>

      <InquiryDialog open={open} onOpenChange={setOpen} />
      <SiteFooter />
    </div>
  );
}