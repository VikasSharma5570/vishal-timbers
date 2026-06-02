import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terracotta from "./pages/Terracotta";
import Wooden from "./pages/Wooden";
import PapierMache from "./pages/PapierMache";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { FloatingContacts } from "./components/FloatingContacts";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terracotta" element={<Terracotta />} />
        <Route path="/wooden" element={<Wooden />} />
        <Route path="/papier-mache" element={<PapierMache />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingContacts />
      <Toaster />
    </>
  );
}
