import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, Johnson Plumbing",
      content:
        "Max Market Pros transformed our online presence. We've seen a 300% increase in qualified leads within just 3 months.",
      rating: 5,
      image: "/professional-woman-business-owner.png",
    },
    {
      name: "Mike Rodriguez",
      role: "CEO, Rodriguez HVAC",
      content:
        "The team's expertise in local SEO is unmatched. We're now ranking #1 for all our target keywords in our service area.",
      rating: 5,
      image: "/professional-businessman.png",
    },
    {
      name: "Emily Chen",
      role: "Director, Chen Landscaping",
      content:
        "Their CRM system has streamlined our entire operation. We're closing more deals and our customers are happier than ever.",
      rating: 5,
      image: "/professional-woman-director.png",
    },
  ]

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Testimonials</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            <span className="relative inline-block">
              Trusted
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C50 1 150 1 200 4"
                  stroke="url(#gradient-testimonials)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-testimonials" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Local Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what our clients have to say about their growth journey with Max Market Pros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card p-8 rounded-2xl border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
