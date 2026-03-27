
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:saturate-0 active:scale-[0.99] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,rgba(53,118,255,0.98)_0%,rgba(20,78,255,0.96)_100%)] text-primary-foreground shadow-[0_10px_28px_-10px_rgba(37,99,235,0.9),inset_0_1px_0_rgba(255,255,255,0.28)] border border-blue-300/20 hover:translate-y-[-1px] hover:shadow-[0_14px_34px_-12px_rgba(37,99,235,0.95),0_0_0_1px_rgba(125,211,252,0.35)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/20 bg-white/[0.02] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-blue-300/50 hover:bg-blue-500/10 hover:text-blue-100 hover:translate-y-[-1px]",
        secondary:
          "bg-secondary/80 text-secondary-foreground border border-white/10 hover:bg-secondary hover:border-white/20",
        ghost: "text-foreground/90 hover:bg-white/10 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:text-blue-300 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5",
        lg: "h-12 rounded-xl px-8",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
