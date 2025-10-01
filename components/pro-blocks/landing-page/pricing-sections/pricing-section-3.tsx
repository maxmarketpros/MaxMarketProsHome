"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { useState } from "react"
import { DemoFormModal } from "@/components/demo-form-modal"

const pricingData = {
  plans: [
    {
      name: "LocalMark",
      description: "Perfect for businesses just getting started with local marketing",
      features: [
        "Up to 5 pages website",
        "10 SEO keywords",
        "Google Business Profile verification & optimization",
        "Directories & Maps listing",
        "Analytics & Reporting",
        "Contact Center",
      ],
      price: 399,
      setupFee: 399,
      period: "/month",
      highlighted: false,
    },
    {
      name: "ServicePro",
      description: "Most popular for growing service businesses",
      features: [
        "5–12 pages website",
        "15 SEO keywords",
        "All LocalMark features",
        "Social Media Publishing",
        "Video Content for Social Media",
        "Voice Search Optimization",
        "Review Generation",
        "Payments & Invoicing",
        "Call Tracking",
        "40+ Maps & Directories",
      ],
      price: 699,
      setupFee: 699,
      period: "/month",
      highlighted: true,
    },
    {
      name: "Signature",
      description: "Complete solution for established businesses",
      features: [
        "12–24 pages custom website",
        "20+ SEO keywords",
        "All ServicePro features",
        "80+ Maps & Directories",
        "Email Marketing Setup",
        "Managed Blog",
        "Social Media Management",
        "AI Chatbot & Review Replies",
      ],
      price: 1299,
      setupFee: 999,
      period: "/month",
      highlighted: false,
    },
  ],
}

export function PricingSection3() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section
        className="relative overflow-hidden bg-white section-padding-y border-b"
        aria-labelledby="pricing-section-title-3"
        id="pricing"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circles */}
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-blue-200 opacity-20 animate-float" />
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full border-2 border-blue-300 opacity-15 animate-float-slow" />
          <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full border-2 border-blue-200 opacity-20 animate-float" />

          {/* Squares */}
          <div className="absolute top-1/3 right-10 w-16 h-16 border-2 border-blue-300 opacity-15 rotate-12 animate-float-slow" />
          <div className="absolute bottom-20 right-1/3 w-12 h-12 border-2 border-blue-200 opacity-20 rotate-45 animate-float" />

          {/* Triangles */}
          <div className="absolute top-1/4 left-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-blue-200 opacity-15 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-blue-300 opacity-20 animate-float-slow" />
        </div>

        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col items-center gap-10 md:gap-16">
            <div className="section-title-gap-lg flex max-w-3xl flex-col items-center text-center">
              {/* Section Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Pricing Plans</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
              </div>

              {/* Main Title with Gradient */}
              <h2 id="pricing-section-title-3" className="heading-lg text-foreground">
                Choose the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    perfect plan
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5C50 2.5 150 2.5 199 5.5"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#60A5FA" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                for your business
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
                Transparent pricing with no hidden fees. All plans include setup assistance and ongoing support.
              </p>
            </div>

            <div className="grid w-full gap-8 md:grid-cols-3 max-w-7xl">
              {pricingData.plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative p-8 transition-all duration-300 hover:shadow-2xl ${
                    plan.highlighted
                      ? "border-2 border-blue-500 shadow-xl scale-105 bg-gradient-to-b from-blue-50/50 to-white"
                      : "border border-gray-200 hover:border-blue-300 bg-white"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <CardContent className="flex flex-col gap-6 p-0">
                    {/* Plan Header */}
                    <div className="flex flex-col gap-3 pt-2">
                      <h3 className={`text-2xl font-bold ${plan.highlighted ? "text-blue-600" : "text-gray-900"}`}>
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Price Display */}
                    <div className="flex flex-col gap-2 py-4 border-y border-gray-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-muted-foreground text-lg">{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Setup fee: <span className="font-semibold text-gray-700">${plan.setupFee}</span>
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full h-12 text-base font-semibold transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl"
                          : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      Get Started
                    </Button>

                    {/* Features List */}
                    <div className="flex flex-col gap-4 pt-2">
                      <p className="text-sm font-semibold text-gray-900">What's included:</p>
                      <div className="flex flex-col gap-3">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div
                              className={`mt-0.5 rounded-full p-1 ${plan.highlighted ? "bg-blue-100" : "bg-gray-100"}`}
                            >
                              <Check className={`h-4 w-4 ${plan.highlighted ? "text-blue-600" : "text-gray-600"}`} />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed flex-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <p className="text-center text-sm text-muted-foreground max-w-2xl">
              All plans include a dedicated account manager and can be customized to fit your specific needs.{" "}
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium underline">
                Contact us
              </a>{" "}
              for enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <DemoFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
