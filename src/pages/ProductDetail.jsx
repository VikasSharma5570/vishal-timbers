import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : undefined;

  useEffect(() => {
    document.title = product ? `${product.name} | Vishal Timbers` : "Product | Vishal Timbers";
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container mx-auto px-6 py-20 text-center">
          <h1 className="font-display text-4xl mb-4">Product not found</h1>
          <Link to="/" className="underline" style={{ color: "var(--brand-clay)" }}>Back home</Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const categoryRoute =
    product.category === "terracotta" ? "/terracotta" :
    product.category === "wooden" ? "/wooden" : "/papier-mache";

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <Link to={categoryRoute} className="text-sm text-muted-foreground hover:opacity-80 mb-6 inline-block">← Back to collection</Link>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div className="aspect-[4/3] overflow-hidden rounded-sm" style={{ background: "rgba(230,207,168,0.3)" }}>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3 capitalize" style={{ color: "var(--brand-clay)" }}>
              {product.category.replace("-", " ")}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-5 leading-tight">{product.name}</h1>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
            <ul className="space-y-2 text-sm text-foreground/80 mb-8">
              <li><span className="text-muted-foreground">Material:</span> Premium handcrafted, natural finish</li>
              <li><span className="text-muted-foreground">Origin:</span> Jaipur, India</li>
              <li><span className="text-muted-foreground">Customization:</span> Sizes, finishes & packaging on request</li>
              <li><span className="text-muted-foreground">MOQ:</span> Flexible for bulk export orders</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="text-white rounded-none px-8 py-6 text-sm tracking-wider uppercase" style={{ background: "var(--brand-clay)" }}>
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none px-8 py-6 text-sm tracking-wider uppercase">
                <Link to={categoryRoute}>View More</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
