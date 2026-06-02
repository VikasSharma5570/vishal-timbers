import { useEffect, useState } from "react";
import { Instagram, Phone, MessageCircle } from "lucide-react";

export function FloatingContacts() {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 1200);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { href: "https://instagram.com", label: "Instagram", icon: Instagram, bg: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]" },
    { href: "tel:+910000000000", label: "Call", icon: Phone, bg: "bg-[#1e88e5]" },
    { href: "https://wa.me/910000000000", label: "WhatsApp", icon: MessageCircle, bg: "bg-[#25d366]" },
  ];

  return (
    <>
      <style>{`
        @keyframes vt-blink {
          0%,100% { transform: scale(1); }
          25% { transform: scale(1.15) rotate(-6deg); }
          50% { transform: scale(0.95) rotate(6deg); }
          75% { transform: scale(1.1) rotate(-3deg); }
        }
        .vt-float-item { animation: vt-blink 1.2s ease-in-out; }
      `}</style>
      <div className="fixed right-3 sm:right-5 bottom-5 z-50 flex gap-3 p-2 rounded-l-xl bg-none">
        {items.map(({ href, label, icon: Icon, bg }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className={`relative ${bg} ${blink ? "vt-float-item" : ""} w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        ))}
      </div>
    </>
  );
}
