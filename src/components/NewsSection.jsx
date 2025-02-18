"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import NewsCarousel from "./NewsCarousel"

const newsData = [
  {
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 15, 2024",
    title: "Genoviq Launches Revolutionary Cancer Treatment",
    description:
      "Breakthrough therapy shows promising results in clinical trials, marking a significant advancement in oncology treatment.",
    category: "Product Launch",
    link: "/news/cancer-treatment-launch",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 10, 2024",
    title: "Global Healthcare Summit 2024",
    description:
      "Join us for the annual Global Healthcare Summit where industry leaders discuss the future of healthcare.",
    category: "Event",
    link: "/news/healthcare-summit",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 05, 2024",
    title: "Research Breakthrough in Diabetes Management",
    description: "Our research team has made significant progress in developing new diabetes management solutions.",
    category: "Research",
    link: "/news/diabetes-research",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    date: "Jan 28, 2024",
    title: "Genoviq Receives Excellence in Innovation Award",
    description: "Recognized for outstanding contributions to pharmaceutical innovation and patient care.",
    category: "Achievement",
    link: "/news/innovation-award",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    date: "Jan 20, 2024",
    title: "New Research Facility Opening",
    description: "State-of-the-art research facility opens doors to advance pharmaceutical research and development.",
    category: "Company News",
    link: "/news/facility-opening",
  },
]

const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-500 text-sm font-semibold tracking-wider uppercase"
            >
              Media Corner
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mt-2"
            >
              Latest News & Updates
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <Link
              to="/newsroom"
              className="inline-flex items-center px-6 py-2 border-2 border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-colors duration-200"
            >
              View All
            </Link>
          </motion.div>
        </div>

        <NewsCarousel news={newsData} />
      </div>
    </section>
  )
}

export default NewsSection

