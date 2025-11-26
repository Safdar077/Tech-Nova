"use client"

import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { SectionTitle } from "../../components/section-title"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "../../components/motion-wrapper"
import { motion } from "framer-motion"
import type { SVGProps } from "react"

const Target = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
)

const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.8 8.6c0 4.2-8.8 11-8.8 11s-8.8-6.8-8.8-11a5 5 0 0 1 8.8-3.2A5 5 0 0 1 20.8 8.6z" />
  </svg>
)

const Lightbulb = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18h6" />
    <path d="M12 2a7 7 0 0 1 0 14h0a3 3 0 0 0 3 3H9a3 3 0 0 0 3-3" />
  </svg>
)

const Users = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <circle cx="17" cy="7" r="4" />
  </svg>
)

const Rocket = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c1 0 4 3 4 3s3 3 3 6-2 6-2 6-3 3-6 3-6-3-6-3-2-3-2-6 3-6 3-6 3-3 4-3z" />
    <path d="M9 15l6-6" />
  </svg>
)

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in every project we deliver.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients to understand their unique needs.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "We strive for perfection in every line of code and pixel.",
  },
]

export default function AboutPage() {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6"
            >
              We're Building the Future of
              <span className="text-primary"> Digital</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Tech Nova Digital is a creative agency dedicated to crafting exceptional digital experiences that help
              businesses thrive in the modern world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <SlideIn direction="left">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                  and create lasting impressions. We believe in transforming ideas into reality through creativity and
                  technology.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the go-to digital partner for businesses seeking exceptional web development and design
                  services. We envision a world where every brand has access to world-class digital experiences.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Values"
            title="What Makes Us Different"
            description="Our core values guide everything we do and shape the way we work with our clients."
          />

          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
