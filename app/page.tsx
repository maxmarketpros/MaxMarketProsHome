import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2"
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7"
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6"
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4"
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3"
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { ProblemSolutionSection } from "@/components/pro-blocks/landing-page/problem-solution-section"
import { HowItWorksSection } from "@/components/pro-blocks/landing-page/how-it-works-section"
import { IndustriesSection } from "@/components/pro-blocks/landing-page/industries-section"
import { TestimonialsSection } from "@/components/pro-blocks/landing-page/testimonials-section"
import { FinalCtaSection } from "@/components/pro-blocks/landing-page/final-cta-section"
import { ContactSection } from "@/components/pro-blocks/landing-page/contact-section"

export default function Page() {
  return (
    <main>
      <form
        name="demo-request"
        method="POST"
        action="/"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
        aria-hidden="true"
      >
        <input type="hidden" name="form-name" value="demo-request" />
        <input type="hidden" name="bot-field" />
        <input type="text" name="businessName" />
        <input type="text" name="businessType" />
        <input type="url" name="website" />
        <input type="text" name="services" />
        <input type="text" name="fullName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="message" defaultValue="" />
      </form>
      <div className="hidden">
        <LpNavbar1 />
      </div>
      <HeroSection2 />
      <LogoSection10 />
      <section id="services">
        <BentoGrid6 />
        <HowItWorksSection />
      </section>
      <ProblemSolutionSection />
      <StatsSection4 />
      <section id="industries">
        <IndustriesSection />
      </section>
      <section id="pricing">
        <PricingSection3 />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="faq">
        <FaqSection2 />
      </section>
      <FinalCtaSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer1 />
    </main>
  )
}
