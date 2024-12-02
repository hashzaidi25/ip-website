'use client'

import { useLanguageStore } from "@/store/language"
import Image from "next/image"
import { Shield, Globe, Scale } from 'lucide-react'

export function FeaturesSection() {
  const { language } = useLanguageStore()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/ip-protection.png"
                alt="IP Protection illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <Shield className="h-12 w-12 text-golden" />
            <h2 className="text-xl font-bold text-golden">
              {language === 'en' ? "IP Protection" : "حماية الملكية الفكرية"}
            </h2>
            <p className="text-muted-foreground">
              {language === 'en' ? 
                "Comprehensive protection for your intellectual property assets" :
                "حماية شاملة لأصول الملكية الفكرية الخاصة بك"
              }
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="relative w-full h-48 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Global Coverage illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <Globe className="h-12 w-12 text-golden" />
            <h2 className="text-xl font-bold text-golden">
              {language === 'en' ? "Global Coverage" : "تغطية عالمية"}
            </h2>
            <p className="text-muted-foreground">
              {language === 'en' ?
                "International IP registration and protection services" :
                "خدمات تسجيل وحماية الملكية الفكرية الدولية"
              }
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center sm:col-span-2 lg:col-span-1">
            <div className="relative w-full h-48 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Legal Expertise illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <Scale className="h-12 w-12 text-golden" />
            <h2 className="text-xl font-bold text-golden">
              {language === 'en' ? "Legal Expertise" : "خبرة قانونية"}
            </h2>
            <p className="text-muted-foreground">
              {language === 'en' ?
                "Expert legal counsel for IP-related matters" :
                "استشارات قانونية متخصصة في مجال الملكية الفكرية"
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 