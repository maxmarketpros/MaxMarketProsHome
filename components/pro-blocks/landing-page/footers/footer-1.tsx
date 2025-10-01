"use client"

import { Logo } from "@/components/pro-blocks/logo"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer1() {
  return (
    <footer className="bg-background section-padding-y" role="contentinfo" aria-label="Site footer">
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Main Navigation */}
          <nav className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8" aria-label="Footer navigation">
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">
              Industries
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 text-sm lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center lg:text-left">© 2025 Max Market Pros</p>
        </div>
      </div>
    </footer>
  )
}
