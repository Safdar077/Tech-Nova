"use client"

import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Palette, Zap, Users, Award, Clock, Monitor, Layers, Sparkles, Link } from "lucide-react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { SectionTitle } from "../components/section-title"
import { ServiceCard } from "../components/service-card"
import { Button } from "../components/ui/button"

/**
 * Minimal motion wrapper implementations to replace the missing ../components/motion-wrapper module.
 * These provide basic fade/slide and stagger behaviors used in this page.
 */

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

const SlideIn = ({
  children,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}) => {
  const variants = {
    up: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -24 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -24 }, animate: { opacity: 1, x: 0 } },
  } as const

  const v = variants[direction] || variants.up

  return (
    <motion.div initial={v.initial} animate={v.animate} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.08 } },
    }}
  >
    {children}
  </motion.div>
)

const StaggerItem = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 8 },
      show: { opacity: 1, y: 0 },
    }}
  >
    {children}
  </motion.div>
)

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, scalable, and modern web applications using cutting-edge technologies like Next.js, React, and Node.js.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning user interfaces that enhance user experience and drive engagement.",
  },
]

const whyChooseUs = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals bring years of industry experience.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your success.",
  },
]

const portfolio = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "/sleek-saas-analytics-dashboard.jpg",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    image: "/mobile-app-interface.png",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    content:
      "Tech Nova Digital transformed our vision into reality. Their attention to detail and technical expertise is unmatched.",
  },
  {
    name: "Michael Chen",
    content: "Working with Tech Nova was a game-changer for our business. They delivered beyond our expectations.",
  },
  {
    name: "Emily Davis",
    content: "The team's creativity and professionalism made our project a huge success. Highly recommended!",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Web Development & UI Design Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-6"
            >
              We Build Digital
              <span className="text-primary"> Experiences</span> That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Transform your ideas into stunning digital products. We specialize in creating beautiful, functional
              websites and interfaces that drive results.
            </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <a href="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="services">View services</a>
            </Button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 md:mt-24 relative"
          >
            <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src="/modern-website-design-mockup-on-laptop.jpg"
                alt="Tech Nova Digital - Modern web design showcase"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-4 top-1/4 hidden lg:block"
            >
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Responsive</p>
                    <p className="text-xs text-muted-foreground">All Devices</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -right-4 top-1/3 hidden lg:block"
            >
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Modern Stack</p>
                    <p className="text-xs text-muted-foreground">Next.js & React</p>
                  </div>
                </div>
              </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Services"
            title="What We Do Best"
            description="We offer comprehensive digital solutions tailored to your business needs."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Why Choose Us"
            title="The Tech Nova Advantage"
            description="We combine creativity, technical expertise, and a passion for excellence."
          />

          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Work"
            title="Featured Projects"
            description="Take a look at some of our recent work and success stories."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <SlideIn key={project.title} delay={index * 0.1} direction="up">
                <div className="group relative overflow-hidden rounded-2xl bg-card border border-border">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{project.category}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{project.title}</h3>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from our satisfied clients."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Internship CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Launch Your Career With Us</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Join our internship program and gain hands-on experience in web development and UI/UX design. Learn from
                industry experts and build real-world projects.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="/internship" className="flex items-center">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
