# Vishal Timbers — React + React Router DOM

A handicrafts & home décor exporter website built with React, Vite, TypeScript, Tailwind CSS, and React Router DOM.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
  assets/          Images
  components/      Reusable components (SiteHeader, SiteFooter, ProductGrid, InquiryDialog, FloatingContacts)
    ui/            shadcn-style UI primitives (Button, Input, Dialog, etc.)
  data/            Static product data
  hooks/
  lib/             Utilities (cn helper)
  pages/           Route pages (Home, About, Contact, Terracotta, Wooden, PapierMache, ProductDetail, NotFound)
  App.tsx          Routes definition
  main.tsx         Entry point
  index.css        Tailwind + theme tokens
```

## Routes

- `/` — Home
- `/about` — About Us
- `/terracotta` — Terra-Cotta collection
- `/wooden` — Wooden collection
- `/papier-mache` — Papier-Mâché collection
- `/product/:productId` — Product detail
- `/contact` — Contact / inquiry
