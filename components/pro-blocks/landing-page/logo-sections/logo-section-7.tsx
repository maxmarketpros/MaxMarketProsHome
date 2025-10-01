"use client"

import Image from "next/image"

export function LogoSection10() {
  const logos = [
    { src: "/logos/google-logo.webp", alt: "Google", width: 120, height: 40 },
    { src: "/logos/semrush-logo.png", alt: "SEMrush", width: 140, height: 40 },
    { src: "/logos/webflow-logo.svg", alt: "Webflow", width: 120, height: 40 },
    { src: "/logos/netlify-logo.png", alt: "Netlify", width: 120, height: 40 },
    { src: "/logos/google-my-business-logo.webp", alt: "Google My Business", width: 180, height: 40 },
    { src: "/logos/wix-logo.png", alt: "Wix", width: 100, height: 40 },
    { src: "/logos/relume-logo.png", alt: "Relume", width: 120, height: 40 },
    { src: "/logos/yelp-logo.png", alt: "Yelp", width: 100, height: 40 },
    { src: "/logos/highlevel-logo.png", alt: "HighLevel", width: 140, height: 40 },
  ]

  return (
    <section className="bg-background border-b py-12 lg:py-16 overflow-hidden">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">Featured Partners</p>
          </div>

          <div className="relative w-full">
            <div className="flex items-center gap-22 animate-scroll-seamless">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="flex items-center justify-center flex-shrink-0">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex items-center justify-center flex-shrink-0">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
