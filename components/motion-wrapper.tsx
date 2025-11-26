"use client"

import { motion } from "framer-motion"

export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)

export const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const offset = direction === "left" ? -50 : direction === "right" ? 50 : 0

  return (
    <motion.div
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({
  children,
  delay = 0,
  stagger = 0.15,
  ...props
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delay
        }
      }
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({
  children,
  y = 20,
  duration = 0.5,
  ...props
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration } }
    }}
    {...props}
  >
    {children}
  </motion.div>
)
