'use client'

import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/store/language"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const { language } = useLanguageStore()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-golden text-white relative">
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Intellectual Property concept image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-30"
      />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {language === 'en' ? (
                "Protecting Your Intellectual Property Rights"
              ) : (
                "حماية حقوق الملكية الفكرية الخاصة بك"
              )}
            </h1>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
              {language === 'en' ? (
                "Professional IP services for patents, trademarks, and copyrights"
              ) : (
                "خدمات احترافية للملكية الفكرية للبراءات والعلامات التجارية وحقوق النشر"
              )}
            </p>
          </div>
          <div className="space-x-4 rtl:space-x-reverse">
            <Link href="/contact">
              <Button className="bg-white text-golden hover:bg-white/90">
                {language === 'en' ? "Get Started" : "ابدأ الآن"}
                <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 