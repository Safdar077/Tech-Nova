import { FadeIn } from "./motion-wrapper"

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionTitle({ subtitle, title, description, align = "center" }: SectionTitleProps) {
  return (
    <FadeIn className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {subtitle && (
        <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">{subtitle}</span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">{title}</h2>
      {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
    </FadeIn>
  )
}
