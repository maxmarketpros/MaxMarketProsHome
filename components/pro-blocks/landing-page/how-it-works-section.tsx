"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { DemoFormModal } from "@/components/demo-form-modal"

export function HowItWorksSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const steps = [
    {
      number: "01",
      title: "Build Your Presence",
      description:
        "We create your website, optimize your Google Business Profile, and sync your listings across all major directories.",
    },
    {
      number: "02",
      title: "Generate & Capture Leads",
      description:
        "Drive traffic with SEO, collect reviews, capture leads through forms and call tracking, then automate follow-ups.",
    },
    {
      number: "03",
      title: "Measure & Scale",
      description:
        "Track performance with detailed dashboards and reports. We continuously optimize to grow your results.",
    },
  ]

  return (
    <>
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 section-padding-y border-y border-slate-800"
        id="how-it-works"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-16 h-16 border border-slate-700/30 rounded-lg rotate-12 animate-float" />
          <div className="absolute top-32 right-[15%] w-12 h-12 border border-slate-700/30 rounded-full animate-float-slow" />
          <div className="absolute bottom-32 left-[20%] w-10 h-10 border border-slate-700/30 rotate-45 animate-float" />
          <div className="absolute bottom-40 right-[25%] w-16 h-16 border border-slate-700/30 rounded-full animate-float-slow" />
        </div>

        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col gap-16 md:gap-20">
            {/* Section header */}
            <div className="section-title-gap-lg mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50" />
                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">How It Works</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/50" />
              </div>

              <h2 className="heading-lg text-white">
                <span className="relative inline-block">
                  Three steps
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path
                      d="M0 4C50 2 150 6 200 4"
                      stroke="url(#gradient-dark)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00B5FF" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#00B5FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00B5FF" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                to{" "}
                <span className="bg-gradient-to-r from-[#00B5FF] to-[#0095DD] bg-clip-text text-transparent">
                  transform your local marketing
                </span>
              </h2>
            </div>

            {/* Steps - elegant layout with big numbers */}
            <div className="flex flex-col gap-20 md:gap-24 max-w-5xl mx-auto w-full">
              {steps.map((step, index) => (
                <div key={index} className="group relative flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  {/* Big number */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative text-[120px] md:text-[160px] font-bold leading-none bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent opacity-90">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-4 pt-4 md:pt-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">{step.description}</p>
                  </div>

                  {/* Connecting line (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[60px] md:left-[80px] top-[140px] md:top-[180px] w-px h-20 md:h-24 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-8">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="rounded-full shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl transition-all duration-300 group text-base px-8 py-6"
                style={{ backgroundColor: "#00B5FF" }}
              >
                Book a Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <DemoFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
