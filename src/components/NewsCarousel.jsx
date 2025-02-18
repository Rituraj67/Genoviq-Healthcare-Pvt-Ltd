"use client"

import { useState } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import NewsCard from "./NewsCard"

const NewsCarousel = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const controls = useAnimation()

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const getItemsPerPage = () => {
    if (typeof window === "undefined") return itemsPerPage.desktop
    if (window.innerWidth < 640) return itemsPerPage.mobile
    if (window.innerWidth < 1024) return itemsPerPage.tablet
    return itemsPerPage.desktop
  }

  const totalPages = Math.ceil(news.length / getItemsPerPage())

  const nextSlide = () => {
    if (isDragging) return
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    if (isDragging) return
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const threshold = 50
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    } else {
      controls.start({ x: 0 })
    }
  }

  const visibleNews = news.slice(currentIndex * getItemsPerPage(), (currentIndex + 1) * getItemsPerPage())

  return (
    <div className="relative px-4 md:px-8 lg:px-12">
      <div className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          animate={controls}
          className="flex gap-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex gap-6 w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {visibleNews.map((item, index) => (
                <div
                  key={index}
                  className="w-full min-w-[calc(100%/3-1rem)] sm:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)]"
                >
                  <NewsCard {...item} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
      >
        <ChevronLeft className="w-6 h-6 text-secondary-900" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
      >
        <ChevronRight className="w-6 h-6 text-secondary-900" />
      </motion.button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary-500 w-8" : "bg-gray-300 w-2 hover:bg-primary-300"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsCarousel

