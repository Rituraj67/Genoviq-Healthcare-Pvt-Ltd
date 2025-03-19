"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";

const NewsCard = ({ image, date, title, description, link, category }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleReadMore = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
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
            <span className="text-sm font-medium">{formatDate(date)}</span>
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
          <h3 className="text-xl font-bold text-secondary-900 mb-3 line-clamp-2 flex-shrink-0">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
          <button
            onClick={handleReadMore}
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
          </button>
        </div>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl w-full max-w-3xl relative flex flex-col max-h-[90vh] overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button INSIDE the Card */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleClosePopup}
                  className="text-gray-600 hover:text-black transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                  {title}
                </h2>

                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{formatDate(date)}</span>
                </div>

                {category && (
                  <div className="mb-4 text-sm font-medium text-primary-600 bg-primary-100 inline-block px-3 py-1 rounded-full">
                    {category}
                  </div>
                )}

                {/* Full Image */}
                <img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-auto object-contain rounded-md mb-4"
                />

                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {description}
                </p>

                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    View Original Source →
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewsCard;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
