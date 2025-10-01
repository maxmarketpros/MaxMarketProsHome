"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Check, TrendingDown, AlertCircle, Clock } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="bg-white section-padding-y border-b relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #00B5FF 1px, transparent 1px),
            linear-gradient(to bottom, #00B5FF 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Left side - Red geometric shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-red-400/10 rounded-lg rotate-12 animate-float" />
      <div
        className="absolute top-40 left-32 w-16 h-16 bg-red-400/5 rounded-full animate-float-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-60 left-20 w-20 h-20 border-2 border-rose-400/10 rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-40 w-12 h-12 bg-red-500/5 rounded-lg -rotate-12 animate-float-slow"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-20 left-10 w-28 h-28 border-2 border-red-400/8 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Right side - Blue geometric shapes */}
      <div
        className="absolute top-20 right-10 w-24 h-24 border-2 border-[#00B5FF]/10 rounded-lg -rotate-12 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-40 right-32 w-16 h-16 bg-[#00B5FF]/5 rounded-full animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-60 right-20 w-20 h-20 border-2 border-cyan-400/10 -rotate-45 animate-float"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-40 right-40 w-12 h-12 bg-blue-400/5 rounded-lg rotate-12 animate-float-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-28 h-28 border-2 border-[#00B5FF]/8 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating decorative dots */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute top-1/3 left-1/3 w-3 h-3 bg-red-400 rounded-full opacity-15 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-rose-400 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-padding-x container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Problem Column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="h-px w-8 bg-gradient-to-r from-red-500 to-transparent" />
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">The Problem</span>
              </div>
              <h2 className="heading-md text-balance">
                The Problem With{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                    Local Marketing
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path
                      d="M0 4C50 2 100 6 150 3C175 1.5 190 5 200 4"
                      stroke="#EF4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Most local businesses struggle with fragmented marketing efforts that don't deliver results.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <Card className="border-red-100 bg-gradient-to-br from-red-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-300" />
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <CardContent className="flex items-start gap-4 p-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg relative">
                    {/* Icon glow */}
                    <div className="absolute inset-0 rounded-xl bg-red-500 blur-md opacity-50" />
                    <AlertCircle className="h-6 w-6 text-white relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Inconsistent Listings</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your business information is different across Google, Yelp, and other directories, confusing
                      customers and hurting your rankings.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100 bg-gradient-to-br from-red-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-300" />
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <CardContent className="flex items-start gap-4 p-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg relative">
                    <div className="absolute inset-0 rounded-xl bg-red-500 blur-md opacity-50" />
                    <TrendingDown className="h-6 w-6 text-white relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Low-Converting Websites</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Outdated designs that don't work on mobile and fail to turn visitors into paying customers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100 bg-gradient-to-br from-red-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-300" />
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <CardContent className="flex items-start gap-4 p-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg relative">
                    <div className="absolute inset-0 rounded-xl bg-red-500 blur-md opacity-50" />
                    <Clock className="h-6 w-6 text-white relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">No Follow-Up System</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Leads slip through the cracks with no automated follow-up or reporting on what's working.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solution Column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="h-px w-8 bg-gradient-to-r from-[#00B5FF] to-transparent" />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#00B5FF" }}>
                  The Solution
                </span>
              </div>
              <h2 className="heading-md text-balance">
                The{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#00B5FF] to-[#0095DD] bg-clip-text text-transparent">
                    Max Market Pros
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path
                      d="M0 4C50 2 100 6 150 3C175 1.5 190 5 200 4"
                      stroke="#00B5FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>{" "}
                Solution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide an integrated system that drives real results for local service businesses.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <Card className="border-blue-100 bg-gradient-to-br from-blue-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00B5FF]/0 to-[#0095DD]/0 group-hover:from-[#00B5FF]/10 group-hover:to-[#0095DD]/5 transition-all duration-300" />
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-[#00B5FF]/20 to-[#0095DD]/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <CardContent className="flex items-start gap-4 p-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B5FF] to-[#0095DD] flex items-center justify-center shadow-lg relative">
                    <div className="absolute inset-0 rounded-xl bg-[#00B5FF] blur-md opacity-50" />
                    <Check className="h-6 w-6 text-white stroke-[3] relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Rankings That Stick</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Dominate local search with consistent listings, optimized content, and authority building.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 bg-gradient-to-br from-blue-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00B5FF]/0 to-[#0095DD]/0 group-hover:from-[#00B5FF]/10 group-hover:to-[#0095DD]/5 transition-all duration-300" />
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-[#00B5FF]/20 to-[#0095DD]/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <CardContent className="flex items-start gap-4 p-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B5FF] to-[#0095DD] flex items-center justify-center shadow-lg relative">
                    <div className="absolute inset-0 rounded-xl bg-[#00B5FF] blur-md opacity-50" />
                    <Check className="h-6 w-6 text-white stroke-[3] relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Sites That Convert</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fast, mobile-first websites designed to turn visitors into paying customers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 bg-gradient-to-br from-blue-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00B5FF]/0 to-[#0095DD]/0 group-hover:from-[#00B5FF]/10 group-hover:to-[#0095DD]/5 transition-all duration-300" />
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-[#00B5FF]/20 to-[#0095DD]/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <CardContent className="flex items-start gap-4 p-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B5FF] to-[#0095DD] flex items-center justify-center shadow-lg relative">
                    <div className="absolute inset-0 rounded-xl bg-[#00B5FF] blur-md opacity-50" />
                    <Check className="h-6 w-6 text-white stroke-[3] relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">CRM & Automations</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Capture every lead with automated follow-ups, pipelines, and detailed reporting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
