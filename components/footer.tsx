import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/internship", label: "Internship" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Web Development" },
    { href: "/services", label: "UI/UX Design" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TND</span>
              </div>
              <span className="font-semibold">Tech Nova Digital</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Transforming ideas into digital excellence. We craft beautiful, functional websites and interfaces that
              drive results.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@technovadigital.com" className="hover:text-background transition-colors">
                  info@technovadigital.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+919876543210" className="hover:text-background transition-colors">
                  +91 89839-39755
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Tech Nova Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
