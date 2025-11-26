"use client"

import Link from "next/link"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { SectionTitle } from "../../components/section-title"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "../../components/motion-wrapper"
import { motion } from "framer-motion"
import React from "react"
function Button({ size, variant, asChild, children, ...props }: any) {
  const sizeClass = size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm"
  const baseClass = "inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground"
  const className = `${baseClass} ${sizeClass}`
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      className: [ (children as any).props.className, className ].filter(Boolean).join(" "),
      ...props,
    })
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
import {
  GraduationCap,
  Code,
  Palette,
  Users,
  Clock,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
} from "lucide-react"

const internshipTracks = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Learn modern web development with React, Next.js, and Node.js. Build real-world projects and gain hands-on experience.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Master design principles, user research, and prototyping tools. Create stunning interfaces that users love.",
  },
]

const requirements = [
  "Currently pursuing or recently completed a degree in Computer Science, Design, or related field",
  "Strong passion for technology and digital design",
  "Basic understanding of HTML, CSS, and JavaScript (for development track)",
  "Familiarity with design tools like Figma (for design track)",
  "Excellent communication and teamwork skills",
  "Ability to commit 20-30 hours per week",
]

const learningOutcomes = [
  {
    icon: Code,
    title: "Technical Skills",
    description: "Master industry-standard tools and technologies used by top companies.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work alongside experienced professionals on real client projects.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Building",
    description: "Build impressive projects to showcase to future employers.",
  }
]

const benefits = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work on your own schedule with remote-friendly options.",
  },
  {
    icon: Award,
    title: "Certificate",
    description: "Receive a certificate of completion to boost your resume.",
  },
  {
    icon: Target,
    title: "Real Projects",
    description: "Work on actual client projects, not just practice exercises.",
  }
]

export default function InternshipPage() {
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
              Internship Program
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6"
            >
              Launch Your Career in
              <span className="text-primary"> Tech</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Join our internship program and gain hands-on experience in web development and UI/UX design. Learn from
              industry experts and work on real-world projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <a href="#apply">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Choose Your Path"
            title="Internship Tracks"
            description="Select the track that matches your interests and career goals."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {internshipTracks.map((track, index) => (
              <SlideIn key={track.title} direction={index === 0 ? "left" : "right"}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <track.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{track.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{track.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <SlideIn direction="left">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
                  Requirements
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who Should Apply?</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're looking for passionate individuals who are eager to learn and grow. If you meet the following
                  criteria, we'd love to hear from you!
                </p>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Program Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold text-foreground">1-3 Months</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Commitment</span>
                    <span className="font-semibold text-foreground">20-30 hrs/week</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold text-foreground">Remote</span>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Learning Outcomes"
            title="What You'll Gain"
            description="Our internship program is designed to give you practical skills and real-world experience."
          />

          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {learningOutcomes.map((outcome) => (
              <StaggerItem key={outcome.title}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <outcome.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{outcome.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{outcome.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Benefits"
            title="Why Join Us?"
            description="We offer more than just an internship - we offer a launchpad for your career."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section id="apply" className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Your Journey?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Applications are open for our next cohort. Don't miss this opportunity to kickstart your career in tech!
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
