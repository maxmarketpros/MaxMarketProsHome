import { Zap, Database, Mail, Calendar, CreditCard, BarChart } from "lucide-react"

export function IntegrationsSection() {
  const integrations = [
    { name: "Zapier", icon: Zap, description: "Automate workflows" },
    { name: "Salesforce", icon: Database, description: "CRM integration" },
    { name: "Mailchimp", icon: Mail, description: "Email marketing" },
    { name: "Google Calendar", icon: Calendar, description: "Schedule sync" },
    { name: "Stripe", icon: CreditCard, description: "Payment processing" },
    { name: "Google Analytics", icon: BarChart, description: "Track performance" },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Integrations</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            <span className="relative inline-block">
              Seamless
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C50 1 150 1 200 4"
                  stroke="url(#gradient-integrations)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-integrations" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Integrations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with the tools you already use. Our platform integrates seamlessly with your favorite business
            applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <integration.icon className="w-8 h-8 text-blue-600 group-hover:text-cyan-600 transition-colors duration-300" />
                </div>
                <span className="text-sm font-semibold text-center mb-1">{integration.name}</span>
                <span className="text-xs text-muted-foreground text-center">{integration.description}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">And many more integrations to power your business growth</p>
        </div>
      </div>
    </section>
  )
}
