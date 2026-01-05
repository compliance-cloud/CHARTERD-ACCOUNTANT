import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.jpg" alt="G.K Vaid Associates" width={50} height={50} className="rounded-lg" />
              <div>
                <div className="font-bold">G.K Vaid Associates</div>
                <div className="text-xs text-secondary">Chartered Accountants</div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Trusted statutory and financial services since 1997. Your partner in business excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-secondary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Tax Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-secondary">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-secondary" />
                <span className="text-white/80">105 Saravana Perumal Street, Purasaiwakkam, Chennai</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <span className="text-white/80">+91 004 4501 2155</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span className="text-white/80">vinay@cagkv.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} G.K Vaid Associates. All rights reserved. | Established 1997</p>
        </div>
      </div>
    </footer>
  )
}
