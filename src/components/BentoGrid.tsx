"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  children,
  index = 0,
}: {
  className?: string
  children: React.ReactNode
  index?: number
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.015,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "h-full rounded-2xl transition-all duration-300 group flex flex-col",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
