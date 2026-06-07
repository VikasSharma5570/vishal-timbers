import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-terracotta.jpg";
import process from "@/assets/process.jpg";
import terracotta from "@/assets/cat-terracotta.jpg";
import papier from "@/assets/cat-papier.jpg";
import wooden from "@/assets/cat-wooden.jpg";
import mapScaled from "../assets/map-scaled.webp"
import marbel from "../assets/marbel.webp"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";


import expo1 from "../assets/expo/expo1.jpg";
import expo2 from "../assets/expo/expo2.jpg";
import expo3 from "../assets/expo/expo3.jpg";
import expo4 from "../assets/expo/expo4.jpg";
import expo5 from "../assets/expo/expo5.jpg";
import expo6 from "../assets/expo/expo6.jpg";
import expo7 from "../assets/expo/expo7.jpg";
import expo8 from "../assets/expo/expo8.jpg";
import expo9 from "../assets/expo/expo9.jpg";
import { TradeShows } from "../components/TradeShow";


export default function Home() {


  const shows = [
    {
      id: 1,
      title: "AMBIENTE FAIR",
      date: "6-10 FEBRUARY 2026",
      image: "http://googleusercontent.com/image_collection/image_retrieval/13257434952917667254_0",
      stand: "STAND: 10.4 F56"
    },
    {
      id: 2,
      title: "61TH IHGF DELHI FAIR",
      date: "14-18 FEBRUARY 2026 SPRING",
      image: "http://googleusercontent.com/image_collection/image_retrieval/13257434952917667254_1",
    },
    {
      id: 3,
      title: "60TH IHGF DELHI FAIR",
      date: "13-17 OCTOBER 2025 AUTUMN",
      image: "http://googleusercontent.com/image_collection/image_retrieval/13257434952917667254_2",
    },
    {
      id: 4,
      title: "59TH IHGF DELHI FAIR",
      date: "16-19 APRIL 2025 SPRING",
      image: "http://googleusercontent.com/image_collection/image_retrieval/13257434952917667254_3",
    }
  ];

  const expoImages = [
    expo1,
    expo2,
    expo3,
    expo4,
    expo5,
    expo6,
    expo7,
    expo8,
    expo9,
  ];


  useEffect(() => { document.title = "Home | Vishal Timbers"; }, []);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative z-10 min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center lg:text-left">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--brand-clay)" }}>
                Since 2024 · Jaipur, India
              </p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
                Inspired by Earth.<br />Shaped by Hands.
              </h1>
              <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
                Beautifully handcrafted luxury décor — where heritage craftsmanship meets modern aesthetics, exported worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                {/* <Button asChild className="text-white rounded-none px-6 sm:px-8 py-6 text-sm tracking-wider uppercase" style={{ background: "var(--brand-clay)" }}>
                  <Link to="/terracotta">Explore Collections</Link>
                </Button> */}
                <Button asChild variant="outline" className="rounded-none px-6 sm:px-8 py-6 text-sm tracking-wider uppercase">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* REVEAL IMAGE SECTION: This acts as the background that "appears" on scroll */}
        <section className="relative h-[60vh] sm:h-[80vh] overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover"
            style={{
              backgroundImage: `url(${hero})`,
              backgroundAttachment: 'fixed' // This creates the "scroll-over" reveal effect
            }}
          />
          {/* Fallback for mobile devices where background-attachment: fixed often fails */}
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 1024px) {
              .bg-fixed { background-attachment: scroll !important; }
            }
          `}} />
        </section>


        <section className="container mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="grid gap-12 items-center">

            {/* Image Gallery Side */}
            <div className=" gap-4 items-end">
              <div className="col-span-8 overflow-hidden rounded-lg shadow-xl">
                <img
                  src={process}
                  alt="Artisan shaping clay"
                  className="w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className=" lg:pl-10">
              <span className="uppercase tracking-[0.2em] text-sm text-brand-clay font-semibold mb-4 block">Our Process</span>
              <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
                Honoring the <br /> <span className="italic text-muted-foreground">Human Touch</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our production isn't just about making objects; it's about preserving
                  <span className="text-foreground font-medium"> time-honored techniques</span> passed down through generations.
                </p>
                <p>
                  By using only natural, earth-derived materials, we ensure that every piece is
                  entirely sustainable and recyclable. It is an invitation to slow down and
                  celebrate conscious living.
                </p>
              </div>
              {/* <button className="mt-10 px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest">
                Learn More
              </button> */}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32" style={{ background: "linear-gradient(to bottom, #fff, var(--brand-cream))" }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl md:text-6xl mb-4">The Collections</h2>
                <p className="text-muted-foreground">Curated objects for the modern, mindful home.</p>
              </div>
              {/* <Link to="/all" className="text-sm font-bold uppercase tracking-widest border-b-2 border-brand-clay pb-1">
                View All Works
              </Link> */}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { img: terracotta, name: "Terra Cotta", to: "/terracotta", desc: "Elegant warm tones of earthen pottery, handcrafted from natural clay." },
                { img: papier, name: "Papier Mâché", to: "/papier-mache", desc: "Repurposed and recycled paper, sculpted into modern aesthetic forms." },
                { img: wooden, name: "Wooden", to: "/wooden", desc: "Handcrafted wooden bowls, trays and decor in teak and sheesham." },
                { img: marbel, name: "marbel", to: "/marbel", desc: "Timeless marble craftsmanship featuring luxurious textures and elegant natural stone finishes." },
              ].map((c, index) => (
                <Link
                  key={c.name}
                  to={c.to}
                  className={`group relative ${index % 2 !== 0 ? 'lg:-mt-10' : ''}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-[#f3f3f3] shadow-sm group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>

                  <div className="px-2">
                    <h3 className="font-display text-3xl mb-3 group-hover:text-brand-clay transition-colors">{c.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2 italic">
                      "{c.desc}"
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest overflow-hidden">
                      <span className="h-[1px] w-8 bg-brand-clay group-hover:w-12 transition-all duration-300"></span>
                      Explore Collection
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
              <div className="lg:w-1/3">
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  Exhibitions <br /> <span className="italic text-muted-foreground">Photo Gallery</span>
                </h2>
              </div>
              <div className="lg:w-2/3 max-w-2xl">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  As regular exhibitors at the <span className="text-foreground font-medium">IHGF Delhi Fair</span>,
                  we present curated collections designed for international sourcing teams. Our booths showcase
                  new terracotta and papier-mâché developments, trend-forward finishes, and private-label
                  possibilities for upcoming seasons.
                </p>
              </div>
            </div>

            {/* Creative Grid / Gallery */}
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2500,
                }),
              ]}
              opts={{
                align: "start",
                loop: true, // repeat infinitely
              }}
              className="w-full"
            >
              <CarouselContent>
                {expoImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-2">
                      <img
                        src={image}
                        alt={`Expo ${index + 1}`}
                        className="w-full h-80 object-cover rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>


            {/* Optional: Navigation / Call to Action */}
            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-4 group">
                <span className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-500"></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em]">Request Exhibition Schedule</span>
              </button>
            </div>

          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Header Content */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">Global Presence</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Spreading the heritage of Indian craftsmanship to esteemed buyers in USA, Canada, U.K., Australia,
                and across Europe and Asia.
              </p>
            </div>

            {/* Map Container - Full Width & Responsive */}
            <div className="relative w-full rounded-xl overflow-hidden group">
              {/* The Map Image */}
              <img
                src={mapScaled}
                alt="World Export Map"
                className="w-full h-[300px] sm:h-[500px] md:h-auto object-cover opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />

              {/* Decorative Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

              {/* Floating Badge (Desktop Only) */}
              <div className="hidden md:block absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-6 border border-border shadow-lg max-w-xs">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2 text-brand-clay font-bold">Export Quality</p>
                <p className="text-sm italic text-muted-foreground">"Handcrafted in Jaipur, delivered to the world's most prestigious doorsteps."</p>
              </div>
            </div>

            {/* Country Tags - Styled for Mobile Responsiveness */}
            <div className="mt-12 lg:mt-16">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-5xl mx-auto">
                {[
                  "USA", "Canada", "U.K.", "Australia", "Denmark",
                  "Belgium", "Germany", "France", "Netherlands",
                  "Turkey", "Japan", "South Korea", "Israel"
                ].map((country) => (
                  <span
                    key={country}
                    className="px-4 py-2 sm:px-6 sm:py-3 border border-border text-[10px] sm:text-xs tracking-widest uppercase text-foreground/80 
                       bg-white/40 backdrop-blur-sm transition-all duration-300 hover:border-brand-clay hover:text-brand-clay hover:-translate-y-1"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <TradeShows />
      </main>

      <SiteFooter />
    </div>
  );
}
