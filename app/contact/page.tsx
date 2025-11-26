"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
// Local FadeIn and SlideIn wrappers using framer-motion to avoid missing module error.
const FadeIn: React.FC<{ delay?: number; children?: React.ReactNode }> = ({ delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

const SlideIn: React.FC<{ direction?: "left" | "right"; delay?: number; children?: React.ReactNode }> = ({
  direction = "left",
  delay = 0,
  children,
}) => {
  const x = direction === "left" ? -40 : 40
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}
/* Local fallback Textarea component to avoid missing import errors. */
const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className={`w-full resize-vertical rounded-md border border-border bg-transparent px-3 py-2 text-foreground ${props.className ?? ""}`}
  />
)

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

// Local fallback Label component to avoid missing import errors.
const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, className = "", ...rest }) => (
  <label {...rest} className={`block text-sm font-medium text-muted-foreground ${className}`}>
    {children}
  </label>
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { size?: "sm" | "md" | "lg" }

/**
 * Local fallback Button component to avoid missing import errors.
 * Styles mirror the project's utility classes; adjust as needed.
 */
const Button = ({ size = "md", className = "", ...rest }: ButtonProps) => {
  const sizeClass =
    size === "lg" ? "py-3 px-4 text-base" : size === "sm" ? "py-1 px-2 text-sm" : "py-2 px-3"
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center rounded-md bg-primary text-white ${sizeClass} ${className}`}
    />
  )
}

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full rounded-md border border-border bg-transparent px-3 py-2 text-foreground ${props.className ?? ""}`}
  />
)

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">Tech Nova</div>
        <nav className="space-x-4 hidden md:flex">
          <a href="/" className="text-muted-foreground hover:text-primary">Home</a>
          <a href="/#services" className="text-muted-foreground hover:text-primary">Services</a>
          <a href="/contact" className="text-muted-foreground hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="border-t border-border mt-12">
      <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tech Nova. All rights reserved.
      </div>
    </footer>
  )
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@technovadigital.com",
    href: "mailto:info@technovadigital.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 89839-39755",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Ambedkar nagar, Pune, Maharashtra 411048, India",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
    href: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("https://formspree.io/f/mdkvrwjr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Let's Build Something
              <span className="text-primary"> Amazing</span> Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Contact Form */}
            <SlideIn direction="left">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </SlideIn>

            {/* Contact Info */}
            <SlideIn direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Whether you have a question about our services, pricing, or anything else, our team is ready to
                    answer all your questions.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <FadeIn key={info.title} delay={index * 0.1}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.href ? (
                            <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Map Placeholder */}
                <FadeIn delay={0.4}>
                  <div className="mt-8 rounded-2xl overflow-hidden border border-border">
                    <div className="aspect-video bg-secondary flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                        <p className="text-muted-foreground text-sm">Map Location</p>
                        <p className="text-muted-foreground/70 text-xs mt-1">Pune, India</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}