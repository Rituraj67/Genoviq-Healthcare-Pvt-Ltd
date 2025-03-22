"use client";

import { motion } from "framer-motion";

const TestimonialCard = ({
  message,
  name,
  designation,
  profilePicture,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 0.8, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="bg-gray-500 border-y-4 border-t-primary-700 border-b-secondary-700 opacity-90 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Card content wrapper with fixed height and overflow */}
      <div className="flex flex-col h-full">
        {/* Message section with scrollable overflow */}
        <div className="flex-grow overflow-auto mb-4">
          <div className="relative">
            {/* Quote */}
            <p className="text-gray-700 mb-6 pt-3 relative z-10">
              <span className="absolute -top-2 -left-1 text-6xl text-wrap text-primary-500 opacity-60">
                "
              </span>
              <span className="text-white">{message}</span>
            </p>
          </div>
        </div>

        {/* Author Info - Now in a separate div that won't be affected by message overflow */}
        <div className="mt-auto pt-4 border-t border-gray-600">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative shrink-0"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500">
                <img
                  src={profilePicture || "/placeholder.svg?height=48&width=48"}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-500 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            <div className="min-w-0">
              <h4 className="font-semibold text-secondary-900 truncate">
                {name}
              </h4>
              <p className="text-sm text-primary-900 truncate">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
