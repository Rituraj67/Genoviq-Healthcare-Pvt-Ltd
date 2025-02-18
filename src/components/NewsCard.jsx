"use client"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const NewsCard = ({ image, date, title, description, link, category }) => {
  return (
    <motion.div
      className="h-full bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        {/* Date Strip */}
        <div className="absolute bottom-0 left-0 bg-primary-500 text-white px-4 py-2 flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">{date}</span>
        </div>
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 right-4 bg-white/90 text-primary-500 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-secondary-900 mb-3 line-clamp-2 flex-shrink-0">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200 mt-auto"
        >
          <span>Read More</span>
          <motion.div
            className="ml-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}

export default NewsCard

