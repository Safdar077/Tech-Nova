"use client"

import Link from "next/link"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { SectionTitle } from "../../components/section-title"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "../../components/motion-wrapper"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import {
  Code,
  Palette,
  ArrowRight,
  Smartphone,
  Globe,
  Database,
  Zap,
  Figma,
  Layers,
  PenTool,
  Layout,
  MousePointer,
  CheckCircle,
} from "lucide-react"

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description:
      "We build fast, scalable, and modern web applications that deliver exceptional user experiences and drive business growth.",
    longDescription:
      "From simple websites to complex web applications, we leverage the latest technologies to create solutions that are not only visually stunning but also performant and maintainable. Our development process focuses on clean code, best practices, and future-proof architecture.",
    features: [
      "Custom website development",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "API development & integration",
      "Performance optimization",
      "SEO-friendly architecture",
    ],
    technologies: [
      { name: "Next.js", icon: Globe },
      { name: "React", icon: Layers },
      { name: "Node.js", icon: Database },
      { name: "JavaScript", icon: Code },
      { name: "Tailwind CSS", icon: Palette },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We create intuitive and visually stunning user interfaces that enhance user experience and drive engagement.",
    longDescription:
      "Great design is more than aesthetics - it's about creating meaningful experiences. We combine user research, visual design, and usability principles to craft interfaces that users love. Our design process is iterative, collaborative, and focused on achieving your business goals.",
    features: [
      "User interface design",
      "User experience research",
      "Wireframing & prototyping",
      "Design systems",
      "Mobile app design",
      "Responsive design",
    ],
    technologies: [
      { name: "Figma", icon: Figma },
      { name: "Design Systems", icon: Layers },
      { name: "Prototyping", icon: MousePointer },
      { name: "Illustration", icon: PenTool },
      { name: "Responsive", icon: Smartphone },
      { name: "Wireframes", icon: Layout },
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a comprehensive plan and roadmap for your project.",
  },
  {
    step: "03",
    title: "Design",
    description: "We create wireframes and visual designs for your approval.",
  },
  {
    step: "04",
    title: "Development",
    description: "We build your solution using modern technologies and best practices.",
  },
  {
    step: "05",
    title: "Testing",
    description: "We rigorously test everything to ensure quality and performance.",
  },
  {
    step: "06",
    title: "Launch",
    description: "We deploy your project and provide ongoing support.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6"
            >
              Digital Solutions That
              <span className="text-primary"> Drive Results</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We offer comprehensive web development and UI/UX design services tailored to help your business succeed in
              the digital world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-32 ${index % 2 === 0 ? "bg-secondary/30" : ""}`}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              <SlideIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.longDescription}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </SlideIn>

              <SlideIn direction={index % 2 === 0 ? "right" : "left"}>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h4 className="text-lg font-semibold text-foreground mb-6">Technologies We Use</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {service.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          <tech.icon className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium text-foreground">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
            description="We follow a structured approach to ensure every project is delivered with excellence."
          />

          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {process.map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full">
                  <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Let's discuss how we can help bring your ideas to life. Get in touch with us today for a free
                consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
