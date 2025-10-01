"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function FaqSection2() {
  return (
    <section
      className="relative bg-background section-padding-y border-b overflow-hidden"
      aria-labelledby="faq-heading"
      id="faq"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-2xl animate-float-slow" />
      </div>

      <div className="container-padding-x container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Section badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">FAQ</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </div>

          <h1 id="faq-heading" className="heading-lg text-foreground mb-4">
            Find answers to our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                frequently asked questions
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
                  stroke="url(#faq-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="faq-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="text-muted-foreground text-lg">
            We&apos;ve compiled the most important information to help you get the most out of your experience.
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="#contact" className="text-blue-600 hover:text-cyan-600 underline transition-colors">
              Contact us.
            </Link>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-4" aria-label="FAQ items">
            {/* FAQ Item 1 */}
            <AccordionItem
              value="item-1"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">What services does Max Market Pros provide?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We offer local SEO, Google Business Profile optimization, custom web design, review generation,
                reputation management, call tracking, social media publishing, invoicing, analytics, and automation
                tools — all in one platform.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 2 */}
            <AccordionItem
              value="item-2"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">Who do you work with?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We specialize in helping service-based businesses such as contractors, roofers, plumbers, cleaners, pest
                control, movers, and other local trades grow online.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 3 */}
            <AccordionItem
              value="item-3"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">How long does it take to see results?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Most clients notice improvements in visibility and calls within 30–60 days, with stronger results
                building over 3–6 months depending on market competition.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 4 */}
            <AccordionItem
              value="item-4"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">Do you build a website for my business?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Yes. Every plan includes a professional, mobile-friendly website tailored to your services and optimized
                to convert visitors into calls and leads.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 5 */}
            <AccordionItem
              value="item-5"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">What are your pricing options?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We have three plans: LocalMark ($399/mo), ServicePro ($699/mo), and Signature ($1,299/mo). Each tier
                adds more pages, SEO keywords, directories, and advanced features.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 6 */}
            <AccordionItem
              value="item-6"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">Are there contracts?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Yes. We operate on service agreements to ensure we can deliver long-term results. Terms vary by plan,
                and upgrades are always available.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 7 */}
            <AccordionItem
              value="item-7"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">Do you provide call tracking?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Absolutely. We set up unique tracking numbers so you know exactly which campaigns generate calls, and
                you can listen to recordings for quality assurance.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 8 */}
            <AccordionItem
              value="item-8"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">Can you manage my reviews and reputation?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Yes. We automate review requests via text/email, help publish positive reviews, and provide tools to
                manage and respond to customer feedback.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 9 */}
            <AccordionItem
              value="item-9"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">What kind of support will I get?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                You&apos;ll have access to U.S.-based support, regular check-ins, and a client dashboard where you can
                monitor leads, calls, rankings, and campaign performance.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ Item 10 */}
            <AccordionItem
              value="item-10"
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">How do I get started?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Simply book a free demo. We&apos;ll review your business, recommend the best plan, and handle setup —
                including your website, directories, and Google Business Profile.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
