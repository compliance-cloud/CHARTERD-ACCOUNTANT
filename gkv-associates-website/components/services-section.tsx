import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, Scale, TrendingUp, RefreshCw, FileText, Handshake, PieChart, Building } from "lucide-react"

const services = [
  {
    icon: FileCheck,
    title: "Audit & Assurance",
    description:
      "Comprehensive audit services including Statutory, Internal, Tax, Forensic, Due Diligence, Stock, Trust, CAG, Bank, Process, and VAT Audits. Overseas MNC reporting and certifications.",
  },
  {
    icon: Scale,
    title: "Representation",
    description:
      "Expert representation in Income Tax and Service Tax assessments. Professional advocacy and documentation support.",
  },
  {
    icon: TrendingUp,
    title: "Valuations",
    description:
      "Professional valuation services for businesses, shares, and projects. Accurate assessments for informed decision-making.",
  },
  {
    icon: RefreshCw,
    title: "Business Reengineering",
    description: "Turnaround strategies for sick companies. Strategic restructuring and revival planning.",
  },
  {
    icon: FileText,
    title: "Compliance",
    description:
      "Complete compliance management for Income Tax, TDS, Service Tax, VAT, ROC, and FEMA returns. TDS on salary processing.",
  },
  {
    icon: Handshake,
    title: "Transactional Advisory",
    description:
      "Expert guidance on Mergers & Acquisitions, International Tax, Tax Planning, Ind AS Opinions, and Company/LLP conversions.",
  },
  {
    icon: PieChart,
    title: "Projections & Financing",
    description:
      "Financial projections and project financing solutions. Strategic financial planning for business growth.",
  },
  {
    icon: Building,
    title: "Ancillary Services",
    description:
      "Company/LLP/Partnership incorporation, registrations (Service Tax, Excise, DGFT, PAN/TAN/VAT), Trust registrations (12AA/80G), and MIS reporting.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive financial and statutory services tailored to your business needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
