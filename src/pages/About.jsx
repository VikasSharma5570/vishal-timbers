import { useEffect } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export default function About() {
  useEffect(() => { document.title = "About Us | Vishal Timbers"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-4xl">
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--brand-clay)" }}>About Us</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-8">Rooted in craft. Grown through tradition.</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
          <p>Vishal Timbers is an exporter of handicrafts from India, headquartered at Jaipur. We began exporting in 2017 with a simple belief — unique product handwriting and a continuous strive to bring newness to life.</p>
          <p>A strong team of skillful craftsmen and artisans is our strength, and we deliver across various product categories including terracotta, wooden and papier-mâché home décor.</p>
          <p>Our process incorporates sustainable, eco-friendly practices. Natural materials, time-honored techniques and a deep respect for the makers — that is what defines every Vishal Timbers piece.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
