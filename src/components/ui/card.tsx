import  React from "react"
 
export type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={
        "rounded-2xl border bg-white/5 backdrop-blur-md shadow-lg " +
        className
      }
      {...props}
    />
  )
)
Card.displayName = "Card"

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={"p-6 "+ className} {...props} />
  )
)
CardContent.displayName = "CardContent"

export { Card, CardContent }
