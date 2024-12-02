'use client'

import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/store/language"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Globe } from 'lucide-react'

export function SiteHeader() {
  const { language, setLanguage } = useLanguageStore()
  const [mounted, setMounted] = useState(false)

  // Handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle language changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = language
    }
  }, [language, mounted])

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <div className="relative h-24">
        <div className="absolute inset-0">
          {/* Golden strip */}
          <div 
            className="absolute top-0 left-0 w-[50%] h-4" 
            style={{
              background: '#B8860B',
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'
            }}
          />
          {/* Black strip */}
          <div 
            className="absolute bottom-0 right-0 w-[50%] h-4" 
            style={{
              background: '#000000',
              clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <div className={`w-[180px] z-10 mb-6 ${
              language === 'ar' 
                ? 'mr-0 ml-8 mt-4' 
                : 'ml-0 mr-8 mt-10'
            }`}>
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/aip-logo.svg"
                  alt="Almazroa Intellectual Property"
                  width={300}
                  height={50}
                  className="h-auto w-auto"
                  priority
                />
              </Link>
            </div>
            
            <nav className="flex-1 text-center z-10">
              <div className="flex items-center justify-center space-x-8">
                {[
                  [language === 'en' ? 'Home' : 'الرئيسية', '/'],
                  [language === 'en' ? 'Services' : 'خدماتنا', '/services'],
                  [language === 'en' ? 'About Us' : 'من نحن', '/about'],
                  [language === 'en' ? 'Contact' : 'اتصل بنا', '/contact'],
                ].map(([title, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium text-[#B8860B] hover:text-[#DAA520] transition-colors"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="w-[180px] flex justify-end z-10">
              <Button
                variant="ghost"
                className="text-sm font-medium text-[#B8860B] hover:text-[#DAA520] hover:bg-transparent"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              >
                <Globe className="mr-2 h-4 w-4" />
                {language === 'en' ? 'Language' : 'اللغة'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

