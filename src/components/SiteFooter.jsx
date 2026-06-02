import { NavLink } from "react-router-dom";

const otherLinks = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];
const productLinks = [
  { to: "/terracotta", label: "Terra-Cotta" },
  { to: "/wooden", label: "Wooden" },
  { to: "/papier-mache", label: "Papier-Mache" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-16 sm:mt-24" style={{ background: "rgba(230,207,168,0.4)" }}>
      <div className="container mx-auto px-6 py-12 sm:py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl mb-3">VISHAL TIMBERS®</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Exporter of handicrafts from India, headquartered in Jaipur. Since 2017, we deliver handcrafted home décor across the globe.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Other Links</h4>
          <ul className="space-y-2">
            {otherLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => `text-sm transition-colors ${isActive ? "font-semibold" : "text-muted-foreground hover:opacity-80"}`}
                  style={({ isActive }) => isActive ? { color: "var(--brand-clay)" } : undefined}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Products</h4>
          <ul className="space-y-2">
            {productLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => `text-sm transition-colors ${isActive ? "font-semibold" : "text-muted-foreground hover:opacity-80"}`}
                  style={({ isActive }) => isActive ? { color: "var(--brand-clay)" } : undefined}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground px-4">
        © {new Date().getFullYear()} Vishal Timbers. All Rights Reserved.
      </div>
    </footer>
  );
}
