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
import { Quote, Star } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"

export function TestimonialsSection() {
  const { language } = useLanguageStore()
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const testimonials = [
    {
      id: 1,
      text: language === 'en' 
        ? "Well done, you have done a very good job on the draft"
        : "أحسنت، لقد قمت بعمل جيد جداً في المسودة",
      author: language === 'en' ? "Lead IP, European-based firm" : "شركة رائدة في مجال الملكية الفكرية، مقرها أوروبا",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 2,
      text: language === 'en'
        ? "Exceptional service and attention to detail in patent applications"
        : "خدمة استثنائية واهتمام بالتفاصيل في طلبات البراءات",
      author: language === 'en' ? "Technology Director, US Corporation" : "مدير التكنولوجيا، شركة أمريكية",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 3,
      text: language === 'en'
        ? "Outstanding expertise in intellectual property protection"
        : "خبرة متميزة في حماية الملكية الفكرية",
      author: language === 'en' ? "Senior Patent Attorney, Asian Market" : "محامي براءات اختراع أول، السوق الآسيوي",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block border border-[#B8860B] px-3 py-1 text-sm text-[#B8860B] mb-4">
            {language === 'en' ? "TESTIMONIALS" : "آراء العملاء"}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#B8860B] mb-2">
            {language === 'en' ? "What Our Clients Say" : "ماذا يقول عملاؤنا"}
          </h2>
          <p className="text-xl text-white/80">
            {language === 'en' 
              ? "Trusted by Leading Organizations Worldwide" 
              : "موثوق به من قبل المؤسسات الرائدة في جميع أنحاء العالم"}
          </p>
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
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-4">
                  <Card className="bg-black border-[#B8860B]/20">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative p-6 md:p-12"
                    >
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-[#B8860B] rounded-full p-2">
                            <Quote className="w-6 h-6 text-black" />
                          </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-[#B8860B] fill-[#B8860B]"
                              />
                            ))}
                          </div>
                          <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-medium text-white mb-4"
                          >
                            {testimonial.text}
                          </motion.p>
                          <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-[#B8860B] font-semibold"
                          >
                            {testimonial.author}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-black" />
            <CarouselNext className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-black" />
          </div>
        </Carousel>
      </div>
    </section>
  )
} 