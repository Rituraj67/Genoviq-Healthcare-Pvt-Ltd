import { motion } from "framer-motion"
import TestimonialCarousel from "./TestimonialCarousel"
import img from "../assets/TestimonialBG.webp"

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{
            scale: 1.0,
            y: [0, -15, 0],
          }}
          transition={{
            scale: { duration: 1 },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" },
          }}
          className="w-full h-full"
        >
          <img
            src={img}
            alt="Life at Genoviq"
            className="w-full h-full object-cover brightness-50"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Life at Genoviq</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join our team of passionate professionals dedicated to advancing healthcare through innovation
          </p>
        </motion.div>

        <TestimonialCarousel />

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  )
}

export default TestimonialsSection

