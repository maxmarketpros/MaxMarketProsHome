"use client"

import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { Wrench, Droplet, Sparkles, Home, Bug, Hammer, Users, Truck, Phone } from "lucide-react"
import { useState } from "react"
import { DemoFormModal } from "@/components/demo-form-modal"

export function IndustriesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const industries = [
    {
      icon: Wrench,
      name: "Contractors",
      description: "General contracting & construction",
    },
    {
      icon: Droplet,
      name: "Plumbers",
      description: "Plumbing & water services",
    },
    {
      icon: Sparkles,
      name: "Cleaners",
      description: "Residential & commercial cleaning",
    },
    {
      icon: Home,
      name: "Roofers",
      description: "Roofing installation & repair",
    },
    {
      icon: Bug,
      name: "Pest Control",
      description: "Pest management & extermination",
    },
    {
      icon: Hammer,
      name: "Remodelers",
      description: "Home renovation & remodeling",
    },
    {
      icon: Users,
      name: "Handymen",
      description: "General maintenance & repairs",
    },
    {
      icon: Truck,
      name: "Movers",
      description: "Moving & relocation services",
    },
  ]

  return (
    <>
      <section className="relative bg-background section-padding-y border-b overflow-hidden" id="industries">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/10 rounded-lg rotate-12 animate-float" />
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-blue-500/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-blue-500/10 rotate-45 animate-float" />
          <div className="absolute bottom-20 right-1/3 w-12 h-12 border-2 border-blue-500/10 rounded-lg -rotate-12 animate-float-slow" />
          <div className="absolute top-1/2 right-10 w-20 h-20 border-2 border-blue-500/10 rounded-full animate-float" />
        </div>

        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col gap-10 md:gap-12">
            <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500/50" />
                <Tagline>Industries</Tagline>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500/50" />
              </div>

              <h2 className="heading-lg">
                Built for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Local Service
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4C50 2 100 6 150 3C175 1.5 187.5 2 200 4"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                Businesses
              </h2>
              <p className="text-muted-foreground text-lg">
                We specialize in helping home service professionals dominate their local markets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Icon className="relative z-10 h-7 w-7 text-blue-600 group-hover:text-blue-500 transition-colors duration-300 group-hover:scale-110" />
                      </div>

                      <div className="text-center">
                        <span className="text-base font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                          {industry.name}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">{industry.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col items-center gap-6 mt-8">
              <p className="text-lg text-muted-foreground font-medium">and many more local service businesses...</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <a
                  href="tel:9496030389"
                  className="group relative px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
