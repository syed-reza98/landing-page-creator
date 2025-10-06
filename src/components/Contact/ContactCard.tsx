import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function ContactCard() {
  return (
    <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-between">
      <div>
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6">
          <div className="text-primary-foreground font-bold text-2xl">M</div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4">Still Have A Questions?</h3>
        <p className="text-muted-foreground mb-8">
          If you cannot find answer to your question in our FAQ, you can always contact us. We will answer to you shortly!
        </p>
      </div>

      <div>
        <div className="flex gap-4">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
