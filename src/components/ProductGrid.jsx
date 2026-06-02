import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InquiryDialog } from "./InquiryDialog";
// import type { Product } from "@/data/products";

export function ProductGrid({ products }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  const handleClick = (p) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((p) => (
          <article key={p.id} className="group bg-card rounded-sm overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden" style={{ background: "rgba(230,207,168,0.3)" }}>
              <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-display text-xl sm:text-2xl mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
              <Button onClick={() => handleClick(p)} variant="outline" className="w-full hover:text-white" style={{ borderColor: "var(--brand-clay)", color: "var(--brand-clay)" }}>
                View Product Details
              </Button>
            </div>
          </article>
        ))}
      </div>
      <InquiryDialog open={open} onOpenChange={setOpen} product={selected} />
    </>
  );
}
