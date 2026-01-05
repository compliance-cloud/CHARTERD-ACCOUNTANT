"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "G.K Vaid Associates - Chartered Accountants",
    subtitle: "28+ Years of Statutory Expertise Since 1997",
    description: "Led by CA G. Gunavanth Vaid",
    image: "/images/hero-professional-team.jpg",
    cta1: "Our Services",
    cta2: "Contact Us",
  },
  {
    id: 2,
    title: "Trusted Audit & Assurance Services",
    subtitle: "Comprehensive Statutory and Internal Audit Solutions",
    description: "28+ years experience • 50+ services • Chennai-based expertise",
    image: "/images/hero-audit.jpg",
    cta1: "Learn More",
    cta2: "Get Started",
  },
  {
    id: 3,
    title: "Compliance, Taxation & Advisory Solutions",
    subtitle: "Expert Guidance for Business Growth",
    description: "Mergers • Valuations • Forensic Audit • Tax Planning",
    image: "/images/hero-tax-advisory.jpg",
    cta1: "View Services",
    cta2: "Contact Us",
  },
  {
    id: 4,
    title: "Your Partner in Business Growth",
    subtitle: "Professional Excellence in Financial Services",
    description: "Trusted by businesses across Chennai for over two decades",
    image: "/images/hero-growth.jpg",
    cta1: "Our Expertise",
    cta2: "Schedule Consultation",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-3xl space-y-6 animate-slide-in">
                <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl font-semibold text-secondary md:text-2xl text-pretty">{slide.subtitle}</p>
                <p className="text-lg text-white/90 md:text-xl text-pretty">{slide.description}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" variant="secondary" className="font-semibold">
                    {slide.cta1}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold bg-white/10 text-white border-white hover:bg-white hover:text-primary"
                  >
                    {slide.cta2}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
