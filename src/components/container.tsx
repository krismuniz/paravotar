import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
  tag?: string
  className?: string
  tabIndex?: number
  ref?: React.RefObject<HTMLElement>
}

export default function Container({
  children,
  className = "",
  tag = "section",
  tabIndex,
  ref,
}: Props) {
  return React.createElement(
    tag,
    {
      className: `max-w-6xl mx-auto ${className}`,
      tabIndex,
      ref,
    },
    children
  )
}
