import terracotta from "@/assets/cat-terracotta.jpg";
import papier from "@/assets/cat-papier.jpg";
import wooden from "@/assets/cat-wooden.jpg";

export const terracottaProducts = [
  { id: "tc-1", name: "Carved Lantern Vase", image: terracotta, description: "Hand-carved terracotta lantern with traditional cutout patterns.", category: "terracotta" },
  { id: "tc-2", name: "Earthen Storage Jar", image: terracotta, description: "Classic storage jar in natural clay finish.", category: "terracotta" },
  { id: "tc-3", name: "Ornamental Pot Set", image: terracotta, description: "Set of three ornamental pots with detailed motifs.", category: "terracotta" },
  { id: "tc-4", name: "Garden Planter", image: terracotta, description: "Outdoor planter, weather-finished terracotta.", category: "terracotta" },
  { id: "tc-5", name: "Tea-Light Holder", image: terracotta, description: "Pierced tea-light holders casting warm shadows.", category: "terracotta" },
  { id: "tc-6", name: "Decorative Bottle", image: terracotta, description: "Slender decorative bottle, hand-thrown.", category: "terracotta" },
];

export const papierProducts = [
  { id: "pm-1", name: "Textured Vase Tall", image: papier, description: "Tall textured papier-mâché vase, recycled paper.", category: "papier-mache" },
  { id: "pm-2", name: "Bulb Vessel", image: papier, description: "Soft bulb-shaped vessel with organic ribbing.", category: "papier-mache" },
  { id: "pm-3", name: "Ribbed Cylinder", image: papier, description: "Cylindrical ribbed vase, matte off-white.", category: "papier-mache" },
  { id: "pm-4", name: "Ornament Sphere", image: papier, description: "Lightweight sphere ornament, pure handcraft.", category: "papier-mache" },
  { id: "pm-5", name: "Sculpted Urn", image: papier, description: "Sculpted urn with flowing surface texture.", category: "papier-mache" },
  { id: "pm-6", name: "Slim Bottle", image: papier, description: "Slim decorative bottle in recycled paper pulp.", category: "papier-mache" },
];

export const woodenProducts = [
  { id: "wd-1", name: "Carved Wooden Bowl", image: wooden, description: "Hand-turned teak bowl with smooth natural finish.", category: "wooden" },
  { id: "wd-2", name: "Serving Tray", image: wooden, description: "Live-edge serving tray crafted from sheesham wood.", category: "wooden" },
  { id: "wd-3", name: "Nested Bowl Set", image: wooden, description: "Set of three nested bowls, food-safe oil finish.", category: "wooden" },
  { id: "wd-4", name: "Wooden Platter", image: wooden, description: "Handcrafted platter with natural grain detailing.", category: "wooden" },
  { id: "wd-5", name: "Decorative Box", image: wooden, description: "Hand-carved decorative storage box with fitted lid.", category: "wooden" },
  { id: "wd-6", name: "Candle Stand", image: wooden, description: "Turned wood candle stand, warm walnut tone.", category: "wooden" },
];

export const allProducts = [...terracottaProducts, ...papierProducts, ...woodenProducts];

export function getProductById(id) {
  return allProducts.find((p) => p.id === id);
}
