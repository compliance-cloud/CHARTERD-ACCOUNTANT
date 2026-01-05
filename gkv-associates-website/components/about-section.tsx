import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Briefcase, TrendingUp } from "lucide-react"

const stats = [
  { icon: Award, label: "Years of Excellence", value: "28+" },
  { icon: Briefcase, label: "Services Offered", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: TrendingUp, label: "Success Rate", value: "99%" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
              About G.K Vaid Associates
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Established in 1997, <strong className="text-foreground">G.K Vaid Associates</strong> has been providing
                exceptional statutory and financial services for over 28 years. Under the leadership of
                <strong className="text-foreground"> CA G. Gunavanth Vaid</strong>, our firm has grown to become one of
                Chennai's most trusted Chartered Accountant practices.
              </p>
              <p>
                With over two decades of experience in statutory services, we offer comprehensive solutions spanning
                audit, taxation, compliance, advisory, and business consulting. Our commitment to excellence and client
                satisfaction has earned us the trust of businesses across various sectors.
              </p>
              <p>
                We pride ourselves on delivering professional services with integrity, accuracy, and timeliness. Our
                team of experienced professionals stays updated with the latest regulatory changes to provide you with
                the best possible guidance for your business growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="border-2 hover:border-secondary transition-colors">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/about-team.jpg" alt="G.K Vaid Associates Team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
