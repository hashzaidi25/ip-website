'use client'

import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/store/language"
import { FileSearch, BarChart2, FileEdit, Globe2, FileWarning, Target } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const { language } = useLanguageStore()

  const services = [
    {
      id: "01",
      icon: FileSearch,
      title: language === 'en' ? 'Patent Search' : 'البحث عن البراءات',
      description: [
        language === 'en' 
          ? 'Identification of prior arts to assess the novelty of the inventions/validity of the patent claims.'
          : 'تحديد الفن السابق لتقييم جدة الاختراعات/صحة مطالبات البراءة.',
        language === 'en'
          ? 'Prepare strong invalidity/validity arguments in close coordination with attorneys.'
          : 'إعداد حجج قوية للبطلان/الصلاحية بالتنسيق الوثيق مع المحامين.'
      ]
    },
    {
      id: "02",
      icon: BarChart2,
      title: language === 'en' ? 'Landscape Analytics' : 'تحليلات المشهد',
      description: [
        language === 'en'
          ? 'Scientific analysis of a technology domain to derive actionable insights.'
          : 'التحليل العلمي لمجال التكنولوجيا لاستخلاص رؤى قابلة للتنفيذ.',
        language === 'en'
          ? 'Involves examining patent data to identify trends, opportunities, potential risks, and the competitive landscape.'
          : 'يتضمن فحص بيانات البراءات لتحديد الاتجاهات والفرص والمخاطر المحتملة والمشهد التنافسي.'
      ]
    },
    {
      id: "03",
      icon: FileEdit,
      title: language === 'en' ? 'Patent Drafting & Illustrations' : 'صياغة البراءات والرسوم التوضيحية',
      description: [
        language === 'en'
          ? `We draft patent applications based on the IP rules of jurisdictions such as the US, and Europe PTO's.`
          : 'نقوم بصياغة طلبات البراءات وفقاً لقواعد الملكية الفكرية في الولايات المتحدة وأوروبا.',
        language === 'en'
          ? `Patent drafters create robust applications that stand up to scrutiny and protect the inventor's rights.`
          : 'يقوم محررو البراءات بإنشاء تطبيقات قوية تصمد أمام التدقيق وتحمي حقوق المخترع.'
      ]
    },
    {
      id: "04",
      icon: Globe2,
      title: language === 'en' ? 'IP-Commercialization' : 'تسويق الملكية الفكرية',
      description: [
        language === 'en'
          ? 'We provide all possible insights to the client based on the patent portfolios.'
          : 'نقدم جميع الرؤى الممكنة للعميل بناءً على محافظ البراءات.'
      ]
    },
    {
      id: "05",
      icon: FileWarning,
      title: language === 'en' ? 'Infringement Analysis' : 'تحليل التعدي',
      description: [
        language === 'en'
          ? 'Detailed analysis of existing products to identify probable infringement and scope of overlap with the patent.'
          : 'تحليل تفصيلي للمنتجات الحالية لتحديد التعدي المحتمل ونطاق التداخل مع البراءة.'
      ]
    },
    {
      id: "06",
      icon: Target,
      title: language === 'en' ? 'Market Research' : 'أبحاث السوق',
      description: [
        language === 'en'
          ? 'We help our clients in identifying major competitors in the market and seize upon new market opportunities.'
          : 'نساعد عملائنا في تحديد المنافسين الرئيسيين في السوق واغتنام فرص السوق الجديدة.'
      ]
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <span className="inline-block border border-[#B8860B] px-3 py-1 text-sm text-[#B8860B]">
            {language === 'en' ? "SERVICES" : "الخدمات"}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#B8860B]">
            {language === 'en' ? "Explore Creative Legal" : "استكشف الحماية"}
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white/80">
            {language === 'en' ? "Protections" : "القانونية الإبداعية"}
          </h3>
        </div>

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div 
                key={service.id}
                className="group relative overflow-hidden rounded-lg border border-[#B8860B]/20 bg-black/50 p-6 hover:border-[#B8860B]/40 transition-colors hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-[#B8860B]/40">{service.id}</span>
                  <div className="rounded-full bg-[#B8860B]/10 p-3">
                    <Icon className="h-6 w-6 text-[#B8860B]" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#B8860B]">{service.title}</h3>
                <div className="mt-2 space-y-2">
                  {service.description.map((desc, index) => (
                    <p key={index} className="text-sm text-white/70">{desc}</p>
                  ))}
                </div>
                <Link 
                  href={`/services#${service.id}`}
                  className="mt-4 inline-block text-sm text-[#B8860B] hover:text-[#DAA520]"
                >
                  {language === 'en' ? "Know More" : "اعرف المزيد"} →
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services">
            <Button className="bg-[#B8860B] text-white hover:bg-[#DAA520]">
              {language === 'en' ? "Find Out More" : "اكتشف المزيد"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 