import React from "react"
import { Button } from "@/components/ui/button"
import { 
  FacebookLogo, 
  TwitterLogo, 
  InstagramLogo, 
  LinkedinLogo,
  EnvelopeSimple,
  Phone,
  MapPin
} from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <div className="text-primary-foreground font-bold text-lg">M</div>
              </div>
              <span className="text-xl font-bold">Metro Solver</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Expert to digitalise your growth. We are constantly growing or learning and improving to help scale your business.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <FacebookLogo size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <TwitterLogo size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <InstagramLogo size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <LinkedinLogo size={18} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">SEO Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Graphic Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">E-commerce</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <EnvelopeSimple size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@metrosolver.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  123 Business Street<br />
                  Metro City, MC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Metro Solver. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}