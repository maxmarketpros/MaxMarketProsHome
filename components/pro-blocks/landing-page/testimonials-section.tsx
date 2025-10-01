import { Quote, Star } from "lucide-react"

const GOOGLE_REVIEWS_URL = "https://share.google/bj5apvYUzwWs5muDL"

const avatarColors = ["bg-[#1a73e8]", "bg-[#ea4335]", "bg-[#34a853]", "bg-[#fbbc05]"]

const testimonials = [
  {
    name: "Aubrey Taylor",
    role: "Local Guide - 19 reviews - 3 photos",
    relativeTime: "5 months ago",
    content:
      "Absolutely great company and more than happy to have their help at a fairly reasonable price. At the price they charge, the definitely over deliver! Within two weeks of working with them, they all ready were able to get me listed on Google, set up with a website and even land me my first job through Google. Amazing team and Brandon Lopez has top tier customer service!",
    rating: 5,
  },
  {
    name: "Kevin Trumbull",
    role: "1 review",
    relativeTime: "1 year ago",
    content:
      "We have had several web designs that I would consider to be failures. Joey and his team at Max Market Pros has raise the bar in web design that gets results. Let's face it without new business any company won't survive. A strong active, well written website is a game changer. Do yourself a favor, make a appointment with Max Market Pro Today.",
    rating: 5,
  },
  {
    name: "Axel Duran",
    role: "4 reviews",
    relativeTime: "3 weeks ago",
    badge: "New",
    content:
      "I came across Max Market Pros in a local business group and decided to give them a try for my florist shop's online promotion. They were really friendly, jumped right in, and put together some social media ads that brought in a ton of new orders. I'm so happy with how it's turned out and would absolutely recommend them to other small business folks. They even took the time to go over the results with me to make sure I was set!",
    rating: 5,
  },
]

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#4285F4"
        d="M21.35 11.1h-9.17v2.92h5.29c-.23 1.36-.98 2.52-2.09 3.29l3.37 2.62c1.98-1.84 3.14-4.55 3.14-7.83 0-.63-.05-1.23-.14-1.8z"
      />
      <path
        fill="#34A853"
        d="M12.18 22c2.84 0 5.22-.94 6.96-2.55l-3.37-2.62c-.93.64-2.12 1.03-3.59 1.03-2.76 0-5.09-1.86-5.92-4.37H2.72v2.74C4.46 19.48 8 22 12.18 22z"
      />
      <path
        fill="#FBBC05"
        d="M6.26 13.49c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9v-2.74H2.72A9.83 9.83 0 0 0 2 11.59c0 1.52.35 2.95.72 4.04l3.54-2.14z"
      />
      <path
        fill="#EA4335"
        d="M12.18 5.42c1.54 0 2.92.53 4 1.58l2.98-2.98C17.37 1.87 15 1 12.18 1 8 1 4.46 3.52 2.72 7.01l3.54 2.14c.83-2.51 3.16-4.37 5.92-4.37z"
      />
    </svg>
  )
}

function LetterAvatar({ name, index }: { name: string; index: number }) {
  const letter = name.trim().charAt(0).toUpperCase() || "M"
  const colorClass = avatarColors[index % avatarColors.length]

  return (
    <div className={`${colorClass} flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white`}>
      {letter}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 h-72 w-72 animate-pulse rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-96 w-96 animate-pulse rounded-full bg-cyan-500/5 blur-3xl delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1a73e8] shadow-sm">
            <GoogleIcon className="h-5 w-5" />
            <span>Google Reviews</span>
          </div>
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm font-medium uppercase tracking-wider text-blue-600">Testimonials</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
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
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            See what our clients have to say about their growth journey with Max Market Pros.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <a
              key={testimonial.name}
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <article
                className="group relative h-full overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 transition-all duration-300 group-hover:from-blue-500/5 group-hover:to-cyan-500/5" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                      <Quote className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-[#e8f0fe] px-3 py-1 text-xs font-medium text-[#1a73e8]">
                      <GoogleIcon className="h-4 w-4" />
                      <span>Google</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#fbbc05]" fill="currentColor" strokeWidth={1.5} />
                      ))}
                    </div>
                    {testimonial.badge ? (
                      <span className="rounded-full bg-[#e6f4ea] px-3 py-1 text-xs font-semibold text-[#188038]">
                        {testimonial.badge}
                      </span>
                    ) : null}
                    <span className="text-xs font-medium text-muted-foreground">{testimonial.relativeTime}</span>
                  </div>

                  <p className="mt-4 text-pretty text-sm leading-6 text-muted-foreground">
                    "{testimonial.content}"
                  </p>

                  <div className="mt-6 flex items-center gap-4 border-t pt-4">
                    <LetterAvatar name={testimonial.name} index={index} />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#1a73e8] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#1558c0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            See more reviews
          </a>
        </div>
      </div>
    </section>
  )
}
