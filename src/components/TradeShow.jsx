import { Card, CardContent } from "@/components/ui/card";

export function TradeShows() {
  const shows = [
    {
      id: 1,
      title: "AMBIENTE FAIR",
      date: "6-10 FEBRUARY 2026",
      image: "http://googleusercontent.com/image_collection/image_retrieval/13257434952917667254_0",
      stand: "STAND: 10.4 F56",
      location: "Frankfurt, Germany"
    },
    {
      id: 2,
      title: "61TH IHGF DELHI FAIR",
      date: "14-18 FEBRUARY 2026",
      image: "http://googleusercontent.com/image_collection/image_retrieval/13257434952917667254_1",
      stand: "SPRING EDITION",
      location: "Delhi, India"
    },
    {
      id: 3,
      title: "60TH IHGF DELHI FAIR",
      date: "13-17 OCTOBER 2025",
      image: "http://googleusercontent.com/image_collection/image_retrieval/13257434952917667254_2",
      stand: "AUTUMN EDITION",
      location: "Delhi, India"
    },
    {
      id: 4,
      title: "59TH IHGF DELHI FAIR",
      date: "16-19 APRIL 2025",
      image: "http://googleusercontent.com/image_collection/image_retrieval/13257434952917667254_3",
      stand: "SPRING EDITION",
      location: "Delhi, India"
    }
  ];

  return (
    <section className="py-5 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground block mb-3">
            Global Exhibitions
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground">
            Trade Shows
          </h2>
          <div className="w-12 h-[1px] bg-foreground/40 mx-auto mt-4" />
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {shows.map((show) => (
            <Card 
              key={show.id} 
              className="group border border-border/50 bg-background rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <CardContent className="p-0 flex flex-col h-full">
                
                {/* Image Wrap & Badge Positioning */}
                <div className="relative aspect-square w-full overflow-hidden bg-muted/40 border-b border-border/40">
                  <img 
                    src={show.image} 
                    alt={`${show.title} promotional banner`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.02]"
                    onError={(e) => {
                      // Graceful placeholder fallback if absolute URLs change
                      e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600";
                    }}
                  />
                  
                  {show.stand && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[9px] font-mono font-medium tracking-widest px-2.5 py-1 uppercase rounded-none border border-border/60 text-foreground shadow-xs">
                      {show.stand}
                    </div>
                  )}
                </div>

                {/* Information Content Blocks */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
                      {show.title}
                    </h3>
                    <p className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
                      {show.date}
                    </p>
                  </div>

                  {show.location && (
                    <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground/80">
                      <span className="font-light">{show.location}</span>
                      <span className="text-[9px] font-mono tracking-widest text-foreground/40 group-hover:text-foreground transition-colors">
                        // HISTORIC
                      </span>
                    </div>
                  )}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}