"use client"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const NewsCardNR = ({ title, date, description, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 p-6 flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
          <h3 className="text-xl font-bold text-secondary-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <Link
            to={link}
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium mt-auto group"
          >
            <span>View Details</span>
            <motion.div className="ml-2 transform group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>
        <div className="md:w-1/3">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  )
}

export default NewsCardNR

