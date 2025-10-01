"use client"
import { Mail, Phone, MapPin, Sparkles } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
              <Sparkles className="w-4 h-4 text-cyan-500" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Get in{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Touch
                </span>
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 -rotate-1" />
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to transform your local business? Reach out to us and let's start your growth journey today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-lg">Email Us</p>
                    <a
                      href="mailto:contact@maxmarketpros.com"
                      className="text-muted-foreground hover:text-cyan-500 transition-colors"
                    >
                      contact@maxmarketpros.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-lg">Call Us</p>
                    <a href="tel:+19496030389" className="text-muted-foreground hover:text-cyan-500 transition-colors">
                      (949) 603-0389
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-lg">Visit Us</p>
                    <p className="text-muted-foreground">
                      2600 Michelson Dr, Floor 16
                      <br />
                      Irvine, CA 92612
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl bg-card border border-border overflow-hidden shadow-xl min-h-[500px]">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/OZrUcEJvPcZ5PRLgcRBF"
                  style={{ width: "100%", height: "500px", border: "none" }}
                  id="inline-OZrUcEJvPcZ5PRLgcRBF"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="WebSite Form Template"
                  data-height="418"
                  data-layout-iframe-id="inline-OZrUcEJvPcZ5PRLgcRBF"
                  data-form-id="OZrUcEJvPcZ5PRLgcRBF"
                  title="WebSite Form Template"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </section>
  )
}
