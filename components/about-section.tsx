'use client'

import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/store/language"
import Image from "next/image"
import Link from "next/link"
import { Check } from 'lucide-react'

export function AboutSection() {
  const { language } = useLanguageStore()

  const stats = [
    {
      value: "980",
      label: language === 'en' ? "Total Completed Case" : "إجمالي الحالات المكتملة",
      description: language === 'en' ? 
        "Team of dedicated patent professionals" : 
        "فريق من المتخصصين المتفانين في مجال البراءات"
    },
    {
      value: "820",
      label: language === 'en' ? "Happy Customers" : "عملاء سعداء",
      description: language === 'en' ? 
        "Team of dedicated patent professionals" : 
        "فريق من المتخصصين المتفانين في مجال البراءات"
    },
    {
      value: "99",
      suffix: "%",
      label: language === 'en' ? "Case Success Rate" : "معدل نجاح القضية",
      description: language === 'en' ? 
        "Team of dedicated patent professionals" : 
        "فريق من المتخصصين المتفانين في مجال البراءات"
    }
  ]

  const features = [
    language === 'en' ? "Expertise in Patent Protection" : "خبرة في حماية البراءات",
    language === 'en' ? "Commitment to Excellence" : "الالتزام بالتميز",
    language === 'en' ? "Collaborative Partnership" : "شراكة تعاونية"
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block rounded-lg border border-[#B8860B] bg-white px-3 py-1 text-sm text-[#B8860B]">
                {language === 'en' ? "ABOUT US" : "معلومات عنا"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                {language === 'en' ? (
                  "Our Story In Intellectual Property"
                ) : (
                  "قصتنا في الملكية الفكرية"
                )}
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                {language === 'en' ? (
                  "We are a team of dedicated patent professionals, united by our commitment to excellence in patent services. With years of collective experience across diverse industries team of this dedicated patent professionals, united by our"
                ) : (
                  "نحن فريق من المتخصصين المتفانين في مجال البراءات، متحدون بالتزامنا بالتميز في خدمات البراءات. مع سنوات من الخبرة الجماعية عبر مختلف الصناعات"
                )}
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#B8860B]" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <Link href="/about">
                <Button className="bg-[#B8860B] text-white hover:bg-[#DAA520]">
                  {language === 'en' ? "Find Out More" : "اكتشف المزيد"}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[600px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                alt={language === 'en' ? "Team of professionals working together" : "فريق من المحترفين يعملون معًا"}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black text-[#B8860B] p-4 rounded-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">
                  {language === 'en' ? "Years of Experiences" : "سنوات من الخبرات"}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center space-y-2 border-l border-[#B8860B] px-4 first:border-0"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#B8860B]">{stat.value}</span>
                {stat.suffix && <span className="text-4xl font-bold text-[#B8860B]">{stat.suffix}</span>}
                <span className="text-xl font-bold text-[#B8860B]">+</span>
              </div>
              <div className="text-lg font-medium text-black">{stat.label}</div>
              <p className="text-center text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 