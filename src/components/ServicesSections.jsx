import { motion } from "framer-motion"
import ServiceCard from "./ServiceCard"

const services = [
  {
    type: "healthcare",
    title: "HEALTHCARE",
    description:
      "Health care or healthcare is the improvement of health via the prevention, diagnosis, treatment, amelioration or cure of disease, illness, injury, and other physical and mental impairments in people.",
  },
  {
    type: "institutions",
    title: "INSTITUTIONS",
    description:
      "Deals with the supply and sale of medicines to government institutions. This segment primarily operates through contracts and tenders with government bodies and public sector organizations.",
  },
  {
    type: "oncology",
    title: "ONCOLOGY",
    description: "Medicine that deals with the study, treatment, diagnosis and prevention of cancer.",
  },
  {
    type: "pharma",
    title: "PHARMA",
    description:
      "The pharmaceutical industry discovers, develops, produces, and markets drugs or pharmaceutical drugs for use as medications to be administered to patients.",
  },
]

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold tracking-wider uppercase">OUR SERVICE</span>
          <h2 className="text-4xl font-bold font-roboto text-secondary-900 mt-2">OUR PORTFOLIO OF CARE</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.type} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

