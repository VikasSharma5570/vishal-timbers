import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
// import type { Product } from "@/data/products";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(20),
  company: z.string().trim().max(120).optional(),
  country: z.string().trim().max(80).optional(),
  quantity: z.string().trim().max(50).optional(),
  requirements: z.string().trim().min(5, "Tell us your requirements").max(1000),
});

// interface Props {
//   open: boolean;
//   onOpenChange: (o: boolean) => void;
//   product?: Product;
// 

export function InquiryDialog({ open, onOpenChange, product }) {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Inquiry sent! Redirecting to product details...");
      onOpenChange(false);
      form.reset();
      if (product?.id) navigate(`/product/${product.id}`);
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-display">Request Product Details</DialogTitle>
          <DialogDescription>
            {product?.name ? `Inquiring about: ${product.name}. ` : ""}Share your requirements — our team responds within 24 hours.    
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2"><Label htmlFor="name">Full Name *</Label><Input id="name" name="name" required maxLength={100} /></div>
            <div className="grid gap-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required maxLength={255} /></div>
            <div className="grid gap-2"><Label htmlFor="phone">Phone / WhatsApp *</Label><Input id="phone" name="phone" required maxLength={20} /></div>
            <div className="grid gap-2"><Label htmlFor="country">Country</Label><Input id="country" name="country" maxLength={80} /></div>
            <div className="grid gap-2"><Label htmlFor="company">Company</Label><Input id="company" name="company" maxLength={120} /></div>
            <div className="grid gap-2"><Label htmlFor="quantity">Estimated Quantity</Label><Input id="quantity" name="quantity" placeholder="e.g. 500 units" maxLength={50} /></div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="requirements">Your Requirements *</Label>
            <Textarea id="requirements" name="requirements" rows={4} required maxLength={1000} placeholder="Sizes, finishes, customization, target price, shipping destination..." />
          </div>
          <input type="hidden" name="product" value={product?.name ?? ""} />
          <Button type="submit" disabled={submitting} className="w-full mt-2 text-white" style={{ background: "var(--brand-clay)" }}>
            {submitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
