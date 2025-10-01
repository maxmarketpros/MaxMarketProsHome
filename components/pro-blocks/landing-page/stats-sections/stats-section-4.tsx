"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { TrendingUp, Phone, Star, Award } from "lucide-react"

export function StatsSection4() {
  return (
    <section className="relative overflow-hidden bg-background section-padding-y border-b">
      <div className="pointer-events-none absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute left-[10%] top-[15%] h-20 w-20 rounded-lg border-2 border-blue-500/20 animate-float" />
        <div className="absolute right-[15%] top-[25%] h-16 w-16 rotate-45 border-2 border-blue-400/20 animate-float-slow" />
        <div className="absolute left-[20%] bottom-[20%] h-24 w-24 rounded-full border-2 border-blue-500/20 animate-float" />
        <div className="absolute right-[10%] bottom-[30%] h-20 w-20 rounded-lg border-2 border-blue-400/20 animate-float-slow" />

        {/* Decorative dots */}
        <div className="absolute left-[5%] top-[40%] h-2 w-2 rounded-full bg-blue-500/20" />
        <div className="absolute right-[8%] top-[50%] h-2 w-2 rounded-full bg-blue-400/20" />
        <div className="absolute left-[15%] bottom-[35%] h-2 w-2 rounded-full bg-blue-500/20" />
        <div className="absolute right-[20%] bottom-[15%] h-2 w-2 rounded-full bg-blue-400/20" />
      </div>

      <div className="container-padding-x container relative mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500/50" />
              <Tagline>Results</Tagline>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500/50" />
            </div>

            <h2 className="heading-lg text-foreground">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Real outcomes
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
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              for local businesses
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Our clients see measurable growth in visibility, leads, and revenue within the first 90 days.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative flex flex-col gap-3 p-0">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600">+340%</div>
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground">Average Monthly Calls</h3>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent">
                  127
                </span>
                <p className="text-muted-foreground text-sm">Per location after 6 months of optimization</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative flex flex-col gap-3 p-0">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600">Top 3</div>
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground">Rankings Improved</h3>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent">
                  85%
                </span>
                <p className="text-muted-foreground text-sm">Of keywords move to page 1 within 90 days</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative flex flex-col gap-3 p-0">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600">4.2x</div>
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground">Review Growth</h3>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent">
                  4.2x
                </span>
                <p className="text-muted-foreground text-sm">More reviews collected with automated requests</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative flex flex-col gap-3 p-0">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600">
                    Top Rated
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground">Client Satisfaction</h3>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent">
                  4.9/5
                </span>
                <p className="text-muted-foreground text-sm">Average rating from 500+ active clients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
