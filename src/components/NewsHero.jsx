"use client"
import { motion } from "framer-motion"
import bg from "../assets/newsroomBG.webp"

const NewsHero = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Healthcare News Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary-900/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Breadcrumb */}
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-primary-400">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/newsroom" className="hover:text-primary-400">
                  Newsroom
                </a>
              </li>
              <li>/</li>
              <li className="text-primary-400">News & PR</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & PR</h1>
          <p className="text-lg text-gray-200">
            Stay updated with the latest news, events, and announcements from Genoviq Group
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default NewsHero

