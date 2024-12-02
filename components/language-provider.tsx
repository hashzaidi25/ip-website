'use client'

import { useLanguageStore } from "@/store/language"
import { useEffect, useState } from "react"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguageStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  if (!mounted) {
    return null
  }

  return <>{children}</>
} 