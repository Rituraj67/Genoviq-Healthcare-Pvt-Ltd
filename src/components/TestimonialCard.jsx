import { motion } from "framer-motion";

const TestimonialCard = ({ quote, name, position, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 0.8, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="bg-gray-500 border-y-4 border-t-primary-700 border-b-secondary-700  opacity-90 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      <div className="relative ">
        {/* Quote */}
        <p className="text-gray-700 mb-6 relative z-10">
          <span className="absolute -top-4 -left-2 sm:text-5xl text-wrap text-primary-500 opacity-60">"</span>
          <span className="text-white">{quote}</span>
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.1 }} className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500">
            <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          </div>
          <motion.div
            className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <div>
          <h4 className="font-semibold text-secondary-900">{name}</h4>
          <p className="text-sm text-primary-900">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;