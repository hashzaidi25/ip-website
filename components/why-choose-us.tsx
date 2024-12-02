'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLanguageStore } from "@/store/language"
import { Users, Lightbulb, Award } from 'lucide-react'
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"

export function WhyChooseUs() {
  const { language } = useLanguageStore()
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const reasons = [
    {
      icon: Users,
      title: language === 'en' ? "Unmatched Expertise" : "خبرة لا مثيل لها",
      description: language === 'en' 
        ? "We have multiple groups of experts with rich experience in handling IP matters in various domains"
        : "لدينا مجموعات متعددة من الخبراء ذوي الخبرة الغنية في التعامل مع قضايا الملكية الفكرية في مختلف المجالات"
    },
    {
      icon: Lightbulb,
      title: language === 'en' ? "Tailored Solutions" : "حلول مخصصة",
      description: language === 'en'
        ? "We have regular recalling sessions of IP laws that helps our professionals to keep updated with all the important laws."
        : "لدينا جلسات مراجعة منتظمة لقوانين الملكية الفكرية التي تساعد محترفينا على البقاء على اطلاع بجميع القوانين المهمة"
    },
    {
      icon: Award,
      title: language === 'en' ? "Proven Track Record" : "سجل حافل مثبت",
      description: language === 'en'
        ? "Our team has successfully handled numerous IP cases with a high success rate and client satisfaction."
        : "نجح فريقنا في التعامل مع العديد من قضايا الملكية الفكرية بمعدل نجاح عالٍ ورضا العملاء"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg border border-dashed border-[#B8860B] bg-white px-3 py-1 text-sm text-[#B8860B]">
            {language === 'en' ? "WHY CHOOSE US" : "لماذا ت��تارنا"}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {language === 'en' ? "Reason To Choose Us" : "سبب اختيارنا"}
          </h2>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <CarouselItem key={index} className="md:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 h-full"
                  >
                    <Card className="p-6 text-center space-y-4 border-[#B8860B]/20 hover:border-[#B8860B] transition-colors h-[320px] flex flex-col justify-between">
                      <div>
                        <div className="relative mx-auto w-20 h-20 mb-6">
                          <div className="absolute inset-0 border-2 border-dashed border-[#B8860B] rounded-full" />
                          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                            <Icon className="h-8 w-8 text-[#B8860B]" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#B8860B] mb-4">{reason.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-black" />
            <CarouselNext className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-black" />
          </div>
        </Carousel>
        
        <div className="flex justify-center gap-2 mt-8">
          {reasons.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full border border-[#B8860B]"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 