import { MapPin, Phone, Mail } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Got Questions? Call us!</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm">123 Business Street</p>
                  <p className="text-sm text-muted-foreground">Metro City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <p className="text-sm">hello@metrosolver.com</p>
              </div>
            </div>
            
            <div className="max-w-xs">
              <Select>
                <SelectTrigger className="bg-white/5 border-white/15 rounded-xl">
                  <SelectValue placeholder="🇬🇧 GBP - British Pound" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gbp">🇬🇧 GBP - British Pound</SelectItem>
                  <SelectItem value="usd">🇺🇸 USD - US Dollar</SelectItem>
                  <SelectItem value="eur">🇪🇺 EUR - Euro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SEO</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Graphic Design</a></li>
            </ul>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <span className="text-sm font-semibold">TRUSTED BY</span>
            <div className="text-sm">Luminus</div>
            <div className="text-sm">Brembo</div>
            <div className="text-sm">Motorola</div>
            <div className="text-sm">Google</div>
            <div className="text-sm">Microsoft</div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Metro Solver. All rights reserved. Registered in England No. 12345678
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
