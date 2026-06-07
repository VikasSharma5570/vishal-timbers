import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/about", label: "About Us" },
  { to: "/terracotta", label: "Terra-Cotta" },
  { to: "/wooden", label: "Wooden" },
  { to: "/marbel", label: "Marbel" },
  { to: "/papier-mache", label: "Papier-Mache" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-display text-lg sm:text-xl" style={{ background: "var(--brand-clay)" }}>V</div>
          <div className="leading-tight">
            <div className="font-display text-base sm:text-xl tracking-wide">VISHAL TIMBERS</div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Handicrafts · Jaipur</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <div key={l.to} className="flex items-center">
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 text-sm tracking-wider uppercase transition-colors ${
                    isActive
                      ? "font-semibold border-b-2 rounded-sm"
                      : "text-foreground/80 hover:opacity-80"
                  }`
                }
                style={({ isActive }) => isActive ? { color: "var(--brand-clay)", borderColor: "var(--brand-clay)", background: "rgba(184,107,60,0.06)" } : undefined}
              >
                {l.label}
              </NavLink>
              {i < links.length - 1 && <span className="text-border">|</span>}
            </div>
          ))}
        </nav>
        <button aria-label="Toggle menu" className="md:hidden p-2 text-foreground/80" onClick={() => setOpen((o) => !o)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-2 text-sm tracking-wider uppercase border-b border-border/50 last:border-0 ${
                    isActive ? "font-semibold border-l-4" : "text-foreground/80"
                  }`
                }
                style={({ isActive }) => isActive ? { color: "var(--brand-clay)", borderLeftColor: "var(--brand-clay)", background: "rgba(184,107,60,0.06)" } : undefined}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
