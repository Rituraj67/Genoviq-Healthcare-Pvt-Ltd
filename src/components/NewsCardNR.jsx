"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ArrowRight, X } from "lucide-react"
import { useState } from "react"

const NewsCardNR = ({ title, date, description, image, cardIndex = 0 }) => {
  const [showModal, setShowModal] = useState(false)
  const [zoomed, setZoomed] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleCloseModal = () => {
    setZoomed(false)
    setShowModal(false)
    setImageLoaded(false)
  }

  // Alternate layout after md
  const flexDirection = cardIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"

  return (
    <>
      {/* News Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 h-full"
      >
        <div className={`flex flex-col ${flexDirection} h-full md:h-64`}>
          {/* Left Section */}
          <div className="md:w-2/3 p-6 flex flex-col">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(date)}
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-4">{title}</h3>
            <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium mt-auto group"
            >
              <span>View Details</span>
              <motion.div className="ml-2 transform group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/3 h-64 md:h-full">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover md:rounded-none md:rounded-r-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Close Button */}
              <div className="sticky top-0 z-10 bg-white flex justify-end p-4 border-b border-gray-200">
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(date)}
                </div>

                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{title}</h3>

                {!imageLoaded && (
                  <div className="w-full h-64 mb-4 rounded animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                )}

                <motion.img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  onLoad={() => setImageLoaded(true)}
                  onClick={() => setZoomed(true)}
                  className={`w-full max-h-[400px] object-contain rounded mb-4 cursor-zoom-in transition duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />

                <p className="text-gray-700 whitespace-pre-wrap">{description}</p>
              </div>
            </motion.div>

            {/* Lightbox Zoom */}
            <AnimatePresence>
              {zoomed && (
                <motion.div
                  className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
                  onClick={() => setZoomed(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.img
                    src={image}
                    alt={title}
                    className="max-w-full max-h-full object-contain cursor-zoom-out rounded-lg shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NewsCardNR

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
