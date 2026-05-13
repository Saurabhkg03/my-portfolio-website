"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PopoverProps {
  trigger: React.ReactNode
  content: React.ReactNode
  className?: string
}

export function Popover({ trigger, content, className }: PopoverProps) {
  const [open, setOpen] = React.useState(false)
  const popoverRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer inline-block">
        {trigger}
      </div>
      {open && (
        <div
          className={cn(
            "absolute z-50 mt-2 w-72 rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-xl p-4 text-zinc-100 shadow-2xl animate-in fade-in-0 zoom-in-95 left-1/2 -translate-x-1/2",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}
