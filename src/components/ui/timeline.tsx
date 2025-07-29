
"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItem {
  title: string
  company: string
  period: string
  description: string
  technologies?: string[]
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative flex items-start mb-8 last:mb-0"
        >
          <div className="absolute left-2 w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-md z-10"></div>
          
          <div className="ml-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {item.period}
              </span>
            </div>
            
            <h4 className="text-lg font-medium text-gray-700 mb-3">{item.company}</h4>
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            {item.technologies && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
