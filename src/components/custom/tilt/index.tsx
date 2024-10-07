"use client"
import { useEffect, useRef, type ReactNode } from "react"
import VanillaTilt, { type TiltOptions } from "vanilla-tilt"

interface TiltProps {
  options?: TiltOptions
  children: ReactNode
  className?: string
}

export const Tilt = ({ options, children, className, ...rest }: TiltProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tilt = useRef<HTMLDivElement | any>(null)

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt?.current, options)
    }

    return () => {
      tilt.current?.vanillaTilt.destroy()
    }
  }, [options])

  return (
    <div ref={tilt} {...rest} className={className}>
      {children}
    </div>
  )
}
