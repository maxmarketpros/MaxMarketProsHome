"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Star, Zap, CheckCircle2 } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useState } from "react"
import { DemoFormModal } from "@/components/demo-form-modal"

export function HeroSection2() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-white py-20 lg:py-28" aria-labelledby="hero-heading">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-20 -left-20 w-96 h-96 bg-[#00B5FF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#2D3DB8]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00B5FF]/20 bg-[#00B5FF]/5 px-4 py-2 text-sm font-medium text-[#2D3DB8] backdrop-blur">
                <Star className="h-4 w-4 fill-[#00B5FF] text-[#00B5FF]" />
                Trusted by 500+ Local Businesses
              </div>

              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tight text-[#0B1B2B] sm:text-5xl lg:text-6xl leading-tight"
              >
                Grow Your Local Business with{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#00B5FF] to-[#0097E6] bg-clip-text text-transparent">
                    SEO
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,4 Q25,0 50,4 T100,4" fill="none" stroke="#00B5FF" strokeWidth="4" />
                  </svg>
                </span>
                ,{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#00B5FF] to-[#0097E6] bg-clip-text text-transparent">
                    Web Design
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,4 Q25,0 50,4 T100,4" fill="none" stroke="#00B5FF" strokeWidth="4" />
                  </svg>
                </span>{" "}
                and{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#00B5FF] to-[#0097E6] bg-clip-text text-transparent">
                    Lead Generation
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,4 Q25,0 50,4 T100,4" fill="none" stroke="#00B5FF" strokeWidth="4" />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                Custom websites, Google rankings, review tools, and an all-in-one CRM built for service-based
                businesses.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-[#00B5FF] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#00B5FF]/30 transition hover:bg-[#0097E6] hover:shadow-xl hover:shadow-[#00B5FF]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B5FF]"
                  aria-label="Book a Free Demo with Max Market Pros"
                >
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#2D3DB8] px-8 py-6 text-base font-semibold text-[#2D3DB8] transition hover:bg-[#2D3DB8]/10 bg-transparent"
                  asChild
                >
                  <a href="#pricing">See Plans &amp; Pricing</a>
                </Button>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#00B5FF]/20 bg-gradient-to-br from-[#00B5FF]/5 to-transparent p-2 sm:p-4">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#00B5FF] mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-[#0B1B2B]">10,000+</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">Leads Generated</div>
                </div>
                <div className="rounded-2xl border border-[#2D3DB8]/20 bg-gradient-to-br from-[#2D3DB8]/5 to-transparent p-2 sm:p-4">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-[#2D3DB8] mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-[#0B1B2B]">3.5×</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">Average Call Lift</div>
                </div>
                <div className="rounded-2xl border border-[#00B5FF]/20 bg-gradient-to-br from-[#00B5FF]/5 to-transparent p-2 sm:p-4">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#00B5FF] mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-[#0B1B2B]">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">Locations Supported</div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="relative">
                    <img
                      src="/electrician-service-worker.jpg"
                      alt="Electrician service professional"
                      className="h-12 w-12 rounded-full border-3 border-white object-cover ring-2 ring-[#00B5FF]/20 shadow-md"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src="/plumber-technician.jpg"
                      alt="Plumbing technician"
                      className="h-12 w-12 rounded-full border-3 border-white object-cover ring-2 ring-[#00B5FF]/20 shadow-md"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src="/hvac-contractor.jpg"
                      alt="HVAC contractor"
                      className="h-12 w-12 rounded-full border-3 border-white object-cover ring-2 ring-[#00B5FF]/20 shadow-md"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src="/landscaper-professional.jpg"
                      alt="Landscaping professional"
                      className="h-12 w-12 rounded-full border-3 border-white object-cover ring-2 ring-[#00B5FF]/20 shadow-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                    <span className="ml-1.5 text-base font-bold text-[#0B1B2B]">4.7</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-tight">
                    Rated by <span className="font-semibold text-[#0B1B2B]">261+ businesses</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 -z-10 rounded-[40px] bg-gradient-to-br from-[#00B5FF]/10 to-[#2D3DB8]/10 blur-3xl" />

              {/* Floating badge - top left */}
              <div className="absolute -top-4 -left-4 z-20 rounded-2xl border border-[#00B5FF]/20 bg-white p-4 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#00B5FF]/10 p-2">
                    <TrendingUp className="h-5 w-5 text-[#00B5FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Traffic Growth</div>
                    <div className="text-lg font-bold text-[#0B1B2B]">+247%</div>
                  </div>
                </div>
              </div>

              {/* Floating badge - top right */}
              <div className="absolute -top-4 -right-4 z-20 rounded-2xl border border-[#2D3DB8]/20 bg-white p-4 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#2D3DB8]/10 p-2">
                    <Star className="h-5 w-5 text-[#2D3DB8] fill-[#2D3DB8]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Avg Rating</div>
                    <div className="text-lg font-bold text-[#0B1B2B]">4.9/5</div>
                  </div>
                </div>
              </div>

              {/* Floating badge - bottom left */}
              <div className="absolute -bottom-4 -left-4 z-20 rounded-2xl border border-[#00B5FF]/20 bg-white p-4 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#00B5FF]/10 p-2">
                    <Zap className="h-5 w-5 text-[#00B5FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">New Leads</div>
                    <div className="text-lg font-bold text-[#0B1B2B]">+142</div>
                  </div>
                </div>
              </div>

              <AspectRatio ratio={1}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GBP-Header-Graphic-6i2c6roNYYHaPNA6Vehd3it2Bdmrxj.png"
                  alt="Google Business Profile showing local search results with 5-star rating and customer engagement"
                  width="1080"
                  height="1080"
                  className="w-full rounded-3xl object-contain"
                  loading="eager"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      <DemoFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
