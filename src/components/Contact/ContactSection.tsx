import { ContactCard } from "./ContactCard"
import { ContactForm } from "./ContactForm"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <ContactCard />
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
