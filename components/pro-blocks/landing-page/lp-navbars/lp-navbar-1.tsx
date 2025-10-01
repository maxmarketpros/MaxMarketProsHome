"use client"

import { Logo } from "@/components/pro-blocks/logo"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { DemoFormModal } from "@/components/demo-form-modal"

const MENU_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const

interface NavMenuItemsProps {
  className?: string
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
)

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <>
      <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
        <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <Button
              variant="ghost"
              className="flex size-9 items-center justify-center md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden w-full flex-row justify-end gap-3 md:flex">
            <NavMenuItems />
            <a href="tel:9496030389">
              <Button variant="outline" className="rounded-full gap-2 bg-transparent">
                <Phone className="h-4 w-4" />
                (949) 603-0389
              </Button>
            </a>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Book a Free Demo
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="flex w-full flex-col justify-end gap-3 pb-2.5 md:hidden">
              <NavMenuItems />
              <a href="tel:9496030389">
                <Button variant="outline" className="w-full rounded-full gap-2 bg-transparent">
                  <Phone className="h-4 w-4" />
                  (949) 603-0389
                </Button>
              </a>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Book a Free Demo
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Modal Component */}
      <DemoFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
