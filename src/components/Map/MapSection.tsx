import { MapPin, Phone } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-[500px] shadow-2xl">
          {/* World map background - using a simple SVG pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 600">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Simplified world map shape */}
              <path
                d="M200,150 L250,120 L300,140 L350,130 L400,160 L450,150 L500,180 L550,160 L600,190 L650,170 L700,200 L750,180 L800,210 L850,190 L900,220 L950,200 L1000,230"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.4"
              />
            </svg>
          </div>

          {/* Glowing pins */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50">
            <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50">
            <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping"></div>
          </div>
          <div className="absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50">
            <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping"></div>
          </div>

          {/* Floating contact card */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:w-96">
            <div className="glass-card rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Our Office</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-foreground">
                      123 Business Street, Metro City
                    </p>
                    <p className="text-sm text-muted-foreground">MC 12345, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-foreground">+44 20 1234 5678</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
