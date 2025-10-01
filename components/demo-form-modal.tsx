"use client"

import type React from "react"

import { useState } from "react"
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const createInitialFormData = () => ({
  businessName: "",
  businessType: "",
  website: "",
  services: [] as string[],
  fullName: "",
  email: "",
  phone: "",
  message: "",
})

interface DemoFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoFormModal({ isOpen, onClose }: DemoFormModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(createInitialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const totalSteps = 3

  const serviceOptions = [
    "Google Business Profile Optimization",
    "Local SEO",
    "Reputation Management",
    "Social Media Marketing",
    "Paid Advertising (Google/Facebook)",
    "Website Design & Development",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (submitStatus) setSubmitStatus(null)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceToggle = (service: string) => {
    if (submitStatus) setSubmitStatus(null)
    setFormData({
      ...formData,
      services: formData.services.includes(service)
        ? formData.services.filter((s) => s !== service)
        : [...formData.services, service],
    })
  }

  const handleNext = () => {
    if (submitStatus) setSubmitStatus(null)
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (submitStatus) setSubmitStatus(null)
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const payload = new URLSearchParams({
      "form-name": "demo-request",
      "bot-field": "",
      businessName: formData.businessName,
      businessType: formData.businessType,
      website: formData.website,
      services: formData.services.join(", "),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    })

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      })

      if (!response.ok) throw new Error("Form submission failed")

      setSubmitStatus("success")
      setFormData(createInitialFormData())
      setStep(totalSteps)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background p-6 border-b border-border">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-background/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-foreground mb-2">Book Your Free Demo</h2>
          <p className="text-muted-foreground text-sm">Let's discuss how we can help grow your business</p>

          {/* Progress Bar */}
          <div className="flex gap-2 mt-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  i <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          name="demo-request"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="p-6"
        >
          <input type="hidden" name="form-name" value="demo-request" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="services" value={formData.services.join(", ")} />

          {/* Step 1: Business Info */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-2">
                <label htmlFor="businessName" className="text-sm font-medium text-foreground">
                  Business Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Your Business Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="businessType" className="text-sm font-medium text-foreground">
                  Business Type <span className="text-destructive">*</span>
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="">Select your industry</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="hvac">HVAC</option>
                  <option value="electrical">Electrical</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="roofing">Roofing</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="pest-control">Pest Control</option>
                  <option value="locksmith">Locksmith</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-foreground">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="https://yourbusiness.com"
                />
              </div>
            </div>
          )}

          {/* Step 2: Services */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  What services are you interested in? <span className="text-destructive">*</span>
                </label>
                <p className="text-sm text-muted-foreground">Select all that apply</p>
                <div className="grid grid-cols-1 gap-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`relative flex items-center gap-3 p-4 rounded-lg border-2 transition-all text-left ${
                        formData.services.includes(service)
                          ? "border-primary bg-primary/5"
                          : "border-input hover:border-primary/50 hover:bg-accent/50"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center w-5 h-5 rounded border-2 transition-all ${
                          formData.services.includes(service) ? "border-primary bg-primary" : "border-input"
                        }`}
                      >
                        {formData.services.includes(service) && <Check className="w-3 h-3 text-primary-foreground" />}
                      </div>
                      <span className="text-sm font-medium text-foreground">{service}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="john@yourbusiness.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tell us more about your goals..."
                />
              </div>
            </div>
          )}

          {submitStatus === "success" && (
            <div
              className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
              role="status"
            >
              Thanks! We'll be in touch within one business day.
            </div>
          )}
          {submitStatus === "error" && (
            <div
              className="mt-6 rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              role="alert"
            >
              Something went wrong. Please try again or reach out directly.
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <div className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </div>
            <div className="flex gap-3">
              {step > 1 && (
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="outline"
                  className="gap-2 bg-transparent"
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              )}
              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="gap-2"
                  disabled={
                    isSubmitting || (step === 1 && (!formData.businessName || !formData.businessType)) ||
                    (step === 2 && formData.services.length === 0)
                  }
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="gap-2 bg-primary hover:bg-primary/90"
                  disabled={isSubmitting || !formData.fullName || !formData.email || !formData.phone}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                  <Check className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
