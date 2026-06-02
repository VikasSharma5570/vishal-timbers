import { useEffect } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ProductGrid } from "../components/ProductGrid";
import { terracottaProducts } from "@/data/products";

export default function Terracotta() {
  useEffect(() => { document.title = "Terra-Cotta Collection | Vishal Timbers"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--brand-clay)" }}>Collection</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Terra-Cotta</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">Elegant, warm-toned earthen pottery. Each piece handcrafted from natural clay — aesthetic and functional for modern home décor.</p>
        </div>
        <ProductGrid products={terracottaProducts} />
      </main>
      <SiteFooter />
    </div>
  );
}
