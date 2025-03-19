import { motion } from "framer-motion"
import { ArrowRight, SquareActivity, FlaskRoundIcon as Flask,Landmark, ShieldPlus, HeartPulse } from "lucide-react"
import { Link } from "react-router-dom"


const iconMap = {
  healthcare: SquareActivity,
  institutions: Landmark,
  oncology: ShieldPlus,
  pharma: HeartPulse,
}


const ServiceCard = ({ title, description, type, index }) => {
  const Icon = iconMap[type.toLowerCase()]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 mb-6 rounded-lg bg-primary-50 flex items-center justify-center"
      >
        <Icon className="w-8 h-8 text-primary-500" />
      </motion.div>

      <h3 className="text-xl font-bold mb-4 text-secondary-900">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>

      <Link
        to={`/services/${type.toLowerCase()}`}
        className="group inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors duration-200"
      >
        Learn More
        <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard

