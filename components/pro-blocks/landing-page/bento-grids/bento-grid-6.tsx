"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, Globe, Star, BarChart3, Phone, CreditCard, Check } from "lucide-react"

export function BentoGrid6() {
  const solutions = [
    {
      icon: Search,
      title: "Local SEO & Google Business Profile",
      description: "Rank on Maps and search. Fix listings. Build authority.",
      features: [
        "Google Business Profile optimization",
        "Local keyword targeting",
        "Citation building & NAP consistency",
        "Local link building strategy",
      ],
      stats: ["+150% visibility", "+200% map views"],
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "group-hover:from-blue-500/10 group-hover:to-cyan-500/10",
      iconGradient: "from-blue-500/20 to-cyan-500/20",
      iconBorder: "border-blue-500/30",
      iconColor: "text-blue-600 group-hover:text-blue-500",
      statGradient: "from-blue-500/20 to-cyan-500/20",
      statBorder: "border-blue-500/30",
      statText: "text-blue-600",
      titleHover: "group-hover:text-blue-600",
      checkColor: "text-blue-500 group-hover/item:text-blue-600",
      checkGlow: "bg-blue-500/20",
      topBorder: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Custom Web Design",
      description: "Fast, mobile-first, conversion-focused websites.",
      features: [
        "Mobile-responsive design",
        "Lightning-fast page speeds",
        "Conversion-optimized layouts",
        "SEO-friendly architecture",
      ],
      stats: ["+85% conversions", "3s load time"],
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "group-hover:from-purple-500/10 group-hover:to-pink-500/10",
      iconGradient: "from-purple-500/20 to-pink-500/20",
      iconBorder: "border-purple-500/30",
      iconColor: "text-purple-600 group-hover:text-purple-500",
      statGradient: "from-purple-500/20 to-pink-500/20",
      statBorder: "border-purple-500/30",
      statText: "text-purple-600",
      titleHover: "group-hover:text-purple-600",
      checkColor: "text-purple-500 group-hover/item:text-purple-600",
      checkGlow: "bg-purple-500/20",
      topBorder: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Reviews & Reputation",
      description: "Automate review requests and publish widgets.",
      features: [
        "Automated review requests",
        "Multi-platform monitoring",
        "Review response templates",
        "Reputation widgets",
      ],
      stats: ["+300% reviews", "4.8★ average"],
      gradient: "from-amber-500 to-orange-500",
      hoverGradient: "group-hover:from-amber-500/10 group-hover:to-orange-500/10",
      iconGradient: "from-amber-500/20 to-orange-500/20",
      iconBorder: "border-amber-500/30",
      iconColor: "text-amber-600 group-hover:text-amber-500",
      statGradient: "from-amber-500/20 to-orange-500/20",
      statBorder: "border-amber-500/30",
      statText: "text-amber-600",
      titleHover: "group-hover:text-amber-600",
      checkColor: "text-amber-500 group-hover/item:text-amber-600",
      checkGlow: "bg-amber-500/20",
      topBorder: "from-amber-500 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "CRM, Calendar & Automations",
      description: "Missed-call text back, pipelines, reminders, bookings.",
      features: ["Smart lead management", "Automated follow-ups", "Online booking system", "Pipeline tracking"],
      stats: ["+60% bookings", "0 missed leads"],
      gradient: "from-emerald-500 to-teal-500",
      hoverGradient: "group-hover:from-emerald-500/10 group-hover:to-teal-500/10",
      iconGradient: "from-emerald-500/20 to-teal-500/20",
      iconBorder: "border-emerald-500/30",
      iconColor: "text-emerald-600 group-hover:text-emerald-500",
      statGradient: "from-emerald-500/20 to-teal-500/20",
      statBorder: "border-emerald-500/30",
      statText: "text-emerald-600",
      titleHover: "group-hover:text-emerald-600",
      checkColor: "text-emerald-500 group-hover/item:text-emerald-600",
      checkGlow: "bg-emerald-500/20",
      topBorder: "from-emerald-500 to-teal-500",
    },
    {
      icon: Phone,
      title: "Call Tracking & Reporting",
      description: "Attribute calls, record conversations, measure ROI.",
      features: [
        "Dynamic number insertion",
        "Call recording & transcription",
        "Source attribution",
        "ROI analytics dashboard",
      ],
      stats: ["+40% call quality", "100% tracked"],
      gradient: "from-rose-500 to-red-500",
      hoverGradient: "group-hover:from-rose-500/10 group-hover:to-red-500/10",
      iconGradient: "from-rose-500/20 to-red-500/20",
      iconBorder: "border-rose-500/30",
      iconColor: "text-rose-600 group-hover:text-rose-500",
      statGradient: "from-rose-500/20 to-red-500/20",
      statBorder: "border-rose-500/30",
      statText: "text-rose-600",
      titleHover: "group-hover:text-rose-600",
      checkColor: "text-rose-500 group-hover/item:text-rose-600",
      checkGlow: "bg-rose-500/20",
      topBorder: "from-rose-500 to-red-500",
    },
    {
      icon: CreditCard,
      title: "Payments & Invoicing",
      description: "Branded invoices, secure checkout, automated reminders.",
      features: ["Secure payment processing", "Automated invoicing", "Payment reminders", "Multiple payment methods"],
      stats: ["+50% faster pay", "99% uptime"],
      gradient: "from-indigo-500 to-violet-500",
      hoverGradient: "group-hover:from-indigo-500/10 group-hover:to-violet-500/10",
      iconGradient: "from-indigo-500/20 to-violet-500/20",
      iconBorder: "border-indigo-500/30",
      iconColor: "text-indigo-600 group-hover:text-indigo-500",
      statGradient: "from-indigo-500/20 to-violet-500/20",
      statBorder: "border-indigo-500/30",
      statText: "text-indigo-600",
      titleHover: "group-hover:text-indigo-600",
      checkColor: "text-indigo-500 group-hover/item:text-indigo-600",
      checkGlow: "bg-indigo-500/20",
      topBorder: "from-indigo-500 to-violet-500",
    },
  ]

  return (
    <section
      className="relative bg-gradient-to-b from-background via-blue-50/30 to-background section-padding-y border-b overflow-hidden"
      id="solutions"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Floating geometric shapes - scattered throughout */}
        <div className="absolute top-20 left-[10%] w-16 h-16 border-2 border-blue-500/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute top-40 right-[15%] w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-32 left-[20%] w-20 h-20 border-2 border-cyan-400/20 rounded-full animate-float" />
        <div className="absolute top-[30%] right-[8%] w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rotate-45 animate-float-slow" />
        <div className="absolute bottom-20 right-[25%] w-10 h-10 border-2 border-blue-500/20 rounded-lg -rotate-12 animate-float" />
        <div className="absolute top-[60%] left-[12%] w-8 h-8 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full animate-float-slow" />

        <div className="absolute top-[25%] left-[5%] w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse" />
        <div
          className="absolute top-[45%] right-[10%] w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-[30%] left-[15%] w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[70%] right-[20%] w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container-padding-x container mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">- SERVICES -</span>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
            Everything You Need to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00B5FF] to-[#0097E6] bg-clip-text text-transparent">
                Grow Your Local Business
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path d="M0,4 Q25,0 50,4 T100,4" fill="none" stroke="#00B5FF" strokeWidth="2" />
              </svg>
            </span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
            From SEO to CRM, we provide the complete toolkit for local service businesses to attract, convert, and
            retain customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={index}
                className={`group relative border-2 border-border/50 bg-card/80 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-${solution.gradient.split(" ")[0].replace("from-", "")}/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.topBorder}`} />
                </div>

                <CardContent className="relative flex flex-col gap-6 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${solution.iconGradient.replace("/20", "/30")} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                      />
                      <div
                        className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.iconGradient} border-2 ${solution.iconBorder} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <Icon className={`h-8 w-8 ${solution.iconColor} transition-colors duration-500`} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-end">
                      {solution.stats.map((stat, i) => (
                        <div
                          key={i}
                          className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${solution.statGradient} border ${solution.statBorder} text-xs font-bold ${solution.statText} whitespace-nowrap shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}
                        >
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3
                      className={`text-foreground text-xl font-bold ${solution.titleHover} transition-colors duration-300`}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{solution.description}</p>
                  </div>

                  <ul className="flex flex-col gap-3 pt-2 border-t border-border/50">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group/item">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="relative">
                            <div
                              className={`absolute inset-0 ${solution.checkGlow} rounded-full blur-sm group-hover/item:blur-md transition-all duration-300`}
                            />
                            <Check
                              className={`relative h-5 w-5 ${solution.checkColor} transition-colors duration-300`}
                            />
                          </div>
                        </div>
                        <span className="group-hover/item:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
