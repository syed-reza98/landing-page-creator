import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const categories = [
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "web-development", label: "Web Development" },
  { id: "seo", label: "SEO" },
  { id: "design", label: "Design" },
]

const faqData = {
  "digital-marketing": [
    {
      question: "What services do you offer in digital marketing?",
      answer: "We offer a comprehensive range of digital marketing services including social media marketing, content marketing, email marketing, PPC advertising, influencer marketing, and marketing automation. Our team creates customized strategies tailored to your business goals and target audience.",
    },
    {
      question: "How can digital marketing help my business?",
      answer: "Digital marketing helps businesses reach a wider audience, increase brand awareness, generate leads, and drive sales. It provides measurable results, allows for precise targeting, and offers better ROI compared to traditional marketing methods.",
    },
    {
      question: "How do you measure campaign success?",
      answer: "We measure campaign success through various KPIs including website traffic, conversion rates, engagement metrics, ROI, customer acquisition cost, and other metrics specific to your business goals. We provide detailed analytics reports to track performance.",
    },
    {
      question: "Do you offer local SEO?",
      answer: "Yes, we specialize in local SEO to help businesses improve their visibility in local search results. This includes Google My Business optimization, local citations, location-based keyword targeting, and local link building strategies.",
    },
  ],
}

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("digital-marketing")

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-6 py-3 rounded-xl transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/5 text-foreground hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {activeCategory === category.id && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                    {category.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqData[activeCategory as keyof typeof faqData]?.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
