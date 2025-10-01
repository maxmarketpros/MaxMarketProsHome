import type React from "react"
import Image from "next/image"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Image
      src="/max-market-pros-logo.png"
      alt="Max Market Pros"
      width={200}
      height={50}
      className={className || "w-[160px] h-auto md:w-[200px]"}
      priority
    />
  )
}
