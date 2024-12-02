'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguageStore } from "@/store/language"
import { Mail } from 'lucide-react'
import { motion } from "framer-motion"

export function ContactFaqSection() {
  const { language } = useLanguageStore()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const faqs = [
    {
      question: language === 'en' ? "Why Patents are important?" : "لماذا البراءات مهمة؟",
      answer: language === 'en' 
        ? "Patents are vital for fostering a culture of innovation and technological advancement, driving economic growth, and providing a framework for protecting and sharing new ideas."
        : "البراءات ضرورية لتعزيز ثقافة الابتكار والتقدم التكنولوجي، ودفع النمو الاقتصادي، وتوفير إطار لحماية ومشاركة الأفكار الجديدة."
    },
    {
      question: language === 'en' ? "Can AI-based inventions be patented?" : "هل يمكن تسجيل براءات اختراع للابتكارات القائمة على الذكاء الاصطناعي؟",
      answer: language === 'en'
        ? "Yes, AI-based inventions can be patented if they meet the standard patentability criteria: novelty, non-obviousness, and usefulness. However, specific requirements vary by jurisdiction."
        : "نعم، يمكن تسجيل براءات اختراع للابتكارات القائمة على الذكاء الاصطناعي إذا استوفت معايير قابلية البراءة القياسية: الجدة وعدم البداهة والفائدة. ومع ذلك، تختلف المتطلبات المحددة حسب الولاية القضائية."
    },
    {
      question: language === 'en' ? "Can I sell or license my patent?" : "هل يمكنني بيع أو ترخيص براءة اختراعي؟",
      answer: language === 'en'
        ? "Yes, patents are intellectual property assets that can be sold, licensed, or transferred. You can monetize your patent through exclusive or non-exclusive licensing agreements."
        : "نعم، البراءات هي أصول ملكية فكرية يمكن بيعها أو ترخيصها أو نقلها. يمكنك تحقيق عائد مادي من براءة اختراعك من خلال اتفاقيات الترخيص الحصرية أو غير الحصرية."
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black p-6 md:p-8 rounded-lg"
          >
            <div className="mb-8">
              <div className="inline-block rounded-lg border border-dashed border-[#B8860B] px-3 py-1 text-sm text-[#B8860B] mb-4">
                {language === 'en' ? "CONTACT US" : "اتصل بنا"}
              </div>
              <h2 className="text-3xl font-bold text-[#B8860B]">
                {language === 'en' ? "Get A Free Quote" : "احصل على عرض سعر مجاني"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder={language === 'en' ? "Name" : "الاسم"}
                className="bg-black/50 border-[#B8860B]/20 text-white placeholder:text-gray-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder={language === 'en' ? "Email" : "البريد الإلكتروني"}
                className="bg-black/50 border-[#B8860B]/20 text-white placeholder:text-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                type="tel"
                placeholder={language === 'en' ? "Phone" : "الهاتف"}
                className="bg-black/50 border-[#B8860B]/20 text-white placeholder:text-gray-400"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Textarea
                placeholder={language === 'en' ? "Write a Message" : "اكتب رسالة"}
                className="bg-black/50 border-[#B8860B]/20 text-white placeholder:text-gray-400 min-h-[150px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button className="w-full bg-[#B8860B] text-black hover:bg-[#B8860B]/90">
                {language === 'en' ? "Request Consultation" : "طلب استشارة"}
              </Button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-8 rounded-lg"
          >
            <div className="mb-8">
              <div className="inline-block rounded-lg border border-dashed border-[#B8860B] px-3 py-1 text-sm text-[#B8860B] mb-4">
                {language === 'en' ? "GENERAL QUESTIONS" : "أسئلة عامة"}
              </div>
              <h2 className="text-3xl font-bold text-black">
                {language === 'en' ? "Frequently Asked Question." : "الأسئلة المتكررة."}
              </h2>
              <p className="mt-2 text-gray-600">
                {language === 'en' 
                  ? "Have questions about our services? Here are the answers to some of the most common inquiries we receive."
                  : "هل لديك أسئلة حول خدماتنا؟ إليك الإجابات على بعض الاستفسارات الأكثر شيوعًا التي نتلقاها."
                }
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Contact Info Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-black text-white p-8 rounded-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#B8860B]">
                {language === 'en' ? "Let's Get Started with Almazroa IP." : "لنبدأ مع المزروع للملكية الفكرية."}
              </h3>
              <p className="text-[#B8860B]/60">
                {language === 'en' ? "Connect With Us Now!" : "تواصل معنا الآن!"}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#B8860B]">
              <Mail className="h-6 w-6" />
              <a href="mailto:info@almazroa-ip.com" className="hover:text-[#B8860B]/80">
                info@almazroa-ip.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 