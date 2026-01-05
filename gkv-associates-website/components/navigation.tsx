"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Compliance", href: "#compliance" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="G.K Vaid Associates Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-white">G.K Vaid Associates</div>
              <div className="text-xs text-secondary">Chartered Accountants</div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white transition-colors hover:text-secondary"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="secondary" size="sm" className="font-semibold">
              Get Quote
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="secondary" size="sm" className="w-full font-semibold mt-4">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
