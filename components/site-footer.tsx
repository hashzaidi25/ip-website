'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguageStore } from "@/store/language"
import Image from "next/image"
import Link from "next/link"
import { Mail } from 'lucide-react'

export function SiteFooter() {
  const { language } = useLanguageStore()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  const expertise = [
    { title: language === 'en' ? 'Patent Search' : 'البحث عن البراءات', href: '/services#patent-search' },
    { title: language === 'en' ? 'Patent Drafting' : 'صياغة البراءات', href: '/services#patent-drafting' },
    { title: language === 'en' ? 'Landscape Analysis' : 'تحليل المشهد', href: '/services#landscape-analysis' },
    { title: language === 'en' ? 'IP-Commercialization' : 'تسويق الملكية الفكرية', href: '/services#ip-commercialization' },
    { title: language === 'en' ? 'Infringement Analysis' : 'تحليل التعدي', href: '/services#infringement-analysis' },
  ]

  const quickLinks = [
    { title: language === 'en' ? 'About Us' : 'معلومات عنا', href: '/about' },
    { title: language === 'en' ? 'Contacts' : 'جهات الاتصال', href: '/contact' },
    { title: language === 'en' ? 'Trademark Services' : 'خدمات العلامات التجارية', href: '/services#trademark' },
    { title: language === 'en' ? 'Services' : 'خدمات', href: '/services' },
  ]

  const offices = {
    head: {
      title: language === 'en' ? 'Head Office' : 'المكتب الرئيسي',
      address: language === 'en' ? 'Riyadh, Saudi Arabia' : 'الرياض، المملكة العربية السعودية'
    },
    sub: [
      {
        title: language === 'en' ? 'Jeddah, Saudi Arabia' : 'جدة، المملكة العربية السعودية'
      },
      {
        title: language === 'en' ? 'Dubai, UAE' : 'دبي، الإمارات العربية المتحدة'
      }
    ]
  }

  return (
    <footer className="mt-auto bg-black text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center text-center md:text-left">
          {/* Newsletter */}
          <div className="space-y-4 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-[#B8860B]">
              {language === 'en' ? 'Newsletter' : 'النشرة الإخبارية'}
            </h3>
            <p className="text-sm text-gray-400">
              {language === 'en' ? (
                'Stay Updated with Almazroa IP - Subscribe to Our Newsletter Today!'
              ) : (
                'ابق على اطلاع مع المزروع للملكية الفكرية - اشترك في نشرتنا الإخبارية اليوم!'
              )}
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder={language === 'en' ? "Enter Your Email" : "أدخل بريدك الإلكتروني"}
                className="bg-white/10 border-[#B8860B]/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="bg-[#B8860B] text-black hover:bg-[#B8860B]/90">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#B8860B]">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@almazroa-ip.com" className="text-sm hover:text-[#B8860B]/80">
                info@almazroa-ip.com
              </a>
            </div>
          </div>

          {/* Expertise */}
          <div className="space-y-4 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-[#B8860B]">
              {language === 'en' ? 'Expertise' : 'خبراتنا'}
            </h3>
            <ul className="space-y-2">
              {expertise.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#B8860B] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-[#B8860B]">
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#B8860B] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Office */}
          <div className="space-y-4 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-[#B8860B]">
              {language === 'en' ? 'Our Office' : 'مكتبنا'}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">{offices.head.title}</h4>
                <p className="text-sm text-gray-400">{offices.head.address}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#B8860B]">
                  {language === 'en' ? 'Sub Offices' : 'المكاتب الفرعية'}
                </h4>
                <ul className="space-y-1">
                  {offices.sub.map((office, index) => (
                    <li key={index} className="text-sm text-gray-400">
                      {office.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#B8860B]/20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/aip-logo.svg"
                alt="Almazroa Intellectual Property"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 text-center">
              {language === 'en' ? (
                <>SAIP License No. ALN202400972 © 2024 Almazroa Intellectual Property. All Rights Reserved</>
              ) : (
                <>رخصة الهيئة السعودية للملكية الفكرية رقم ALN202400972 © 2024 المزروع للملكية الفكرية. جميع الحقوق محفوظة</>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

