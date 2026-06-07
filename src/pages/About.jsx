import { useEffect } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export default function About() {
  useEffect(() => {
    document.title = "Our Story | Vishal Timbers";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      <SiteHeader />

      {/* 1st section */}
      <main className="flex-1">
        <section className="relative pt-16 pb-16 md:pt-16 md:pb-16 border-b border-border/40">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 md:pt-10 mx-auto">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
                  Rooted in craft.<br />
                  Driven by scale.
                </h1>
              </div>

              {/* Manifesto style paragraph */}
              <div className="lg:col-span-7">
                <p className="font-sans text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Vishal Timbers is a premier export firm based in Jaipur, India, specializing in the architectural design, manufacturing, and global export of premium handcrafted home décor.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-border/60 text-lg text-muted-foreground/90 font-light leading-relaxed">
                  <p>
                    We specialize in premium materials including legal woods (Acacia & Mango), terracotta, sculptural marble, artisanal metal, and recycled papier-mâché. Our focus is ensuring a highly unique product handwriting across every collection.
                  </p>
                  <p>
                    By blending the irreplaceable touch of human hands with modern precision, we build sustainable, biodegradable, and globally compliant art pieces engineered carefully for contemporary international spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 2nd section */}
        <section className="py-16 md:py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="mb-6">
              <h2 className="font-display -mt-4 text-3xl sm:text-4xl tracking-tight">
                Our Operational Strengths
              </h2>
            </div>

            {/* Asymmetric Mosaic Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Block 1: In-House Manufacturing (Takes up 7/12 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-background border border-border/60 p-8 sm:p-12 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="max-w-xl space-y-4">
                  <div className="w-8 h-[1px] bg-foreground/60 mb-6"></div>
                  <h3 className="font-display text-2xl sm:text-3xl">Vertical Integration & In-House Control</h3>
                  <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
                    By pulling 100% of our creation process entirely under our own roofs, we retain uncompromising, granular oversight at every milestone of execution. This total vertical integration translates directly to eliminating third-party reliance, establishing raw craftsmanship reliability, and guaranteeing highly competitive pricing tiers without fracturing standard production timelines.
                  </p>
                </div>
                <div className="mt-8 aspect-[16/9] w-full overflow-hidden bg-muted rounded-sm">
                  <img
                    src="in-house-manufacturing.jpg"
                    alt="In-house manufacturing process"
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Block 2: Machinery (Takes up 5/12 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-background border border-border/60 p-8 sm:p-12 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square w-full overflow-hidden bg-muted rounded-sm mb-8">
                  <img
                    src="industry-machinery.jpg"
                    alt="Precision machinery"
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-[1px] bg-foreground/60 mb-6"></div>
                  <h3 className="font-display text-2xl sm:text-3xl">Machinery Precision</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    True scalability demands technological consistency. We pair heritage artisanal wisdom alongside standardized machinery processes to enforce immaculate mathematical precision across vast batch sizes. Your designs remain uniform in shape and finish across global export distribution.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3rd Section */}
        <section className="py-16 md:py-16 border-t border-border/40">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column Sticky Context Intro */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-4">
                  The Dual Commitments
                </h2>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  An export operation is only as sustainable as the health of its business landscape and the immediate community crafting its goods.
                </p>
              </div>

              {/* Right Column Two-Card Block */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Card A: Buyers */}
                <div className="bg-muted/30 border border-border/40 p-8 flex flex-col justify-between rounded-sm">
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-muted-foreground/60">[ For Our Alliances ]</span>
                    <h4 className="font-display text-2xl">To Our Buyers</h4>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      We offer hyper-transparent pipelines from raw processing up to vessel loading logs. By optimizing workflow tracking and strictly adhering to global import protocols, we ensure our global partners operate with flawless structural certainty, premium grade output, and problem-solving logistics coordination.
                    </p>
                  </div>
                </div>

                {/* Card B: Team */}
                <div className="bg-muted/30 border border-border/40 p-8 flex flex-col justify-between rounded-sm">
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-muted-foreground/60">[ For Our Community ]</span>
                    <h4 className="font-display text-2xl">To Our Team</h4>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      We secure safe environments, steady fair compensation, and consistent skill evolution opportunities for our local craft circles. We deeply champion local women craft networks—supplying realistic avenues for absolute financial self-sufficiency, safe working standards, and creative freedom.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            04. SOCIAL COMPLIANCE SPLIT PANEL
            ========================================================================= */}
        <section className="bg-black text-white py-16 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Compliance Bold Label Sidebar */}
              <div className="lg:col-span-5 border-l-2 border-[#E60050] pl-6 md:pl-8">
                <h2 className="font-display text-4xl sm:text-5xl tracking-tight mb-6">
                  Social Compliance
                </h2>
                <div className="inline-flex items-center space-x-3 bg-neutral-900 px-6 py-3 border border-neutral-800 rounded-sm">
                  <span className="font-sans text-2xl font-black tracking-tight text-white">
                    Sedex<span className="text-[#E60050]">.</span>
                  </span>
                  <div className="h-6 w-[1px] bg-neutral-700" />
                  <span className="font-sans text-sm font-semibold tracking-widest text-neutral-300 uppercase">
                    Member
                  </span>
                </div>
              </div>

              {/* Compliance Text Block */}
              <div className="lg:col-span-7 space-y-6 text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  Vishal Timbers handles international volume with high ethics. We are strictly
                  <span className="text-white font-medium"> Sedex SMETA 4-Pillar Audited</span>, explicitly
                  verifying that transparent corporate governance is executed throughout our production floors daily.
                </p>
                <p>
                  This foundational framework rigorously confirms our compliance parameters across four essential segments:
                  uncompromising Labor Standards, healthy Work Environment Safety, dedicated Ecological Preservation, and clean Business Ethics. We preserve our heritage workforce without wounding the planet.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}