"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles, TrendingUp, Zap } from "lucide-react"
import { useState } from "react"
import { DemoFormModal } from "@/components/demo-form-modal"

export function FinalCtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Limited Time Offer</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="text-white">Ready to </span>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Grow Your
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10C50 5 150 5 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-white">Local Business?</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-slate-300 text-pretty max-w-3xl mx-auto leading-relaxed">
              Join hundreds of local businesses that are dominating their markets with Max Market Pros. Get started
              today with a <span className="text-cyan-400 font-semibold">free consultation</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm font-medium">Quick Setup</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm font-medium">Proven Results</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm font-medium">Expert Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                Book a Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/5 border-2 border-white/20 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:9496030389">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: (949) 603-0389
                </a>
              </Button>
            </div>

            <p className="text-sm text-slate-400 flex items-center justify-center gap-2 flex-wrap">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                No credit card required
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Free consultation
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Expert guidance
              </span>
            </p>
          </div>
        </div>
      </section>

      <DemoFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
