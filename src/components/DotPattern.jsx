import { motion } from "framer-motion"

const DotPattern = () => {
  return (
    <div className="absolute right-0 top-0 grid grid-cols-12 gap-4 opacity-10">
      {Array(144)
        .fill(null)
        .map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: i * 0.01,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            className="w-2 h-2 rounded-full bg-secondary-500"
          />
        ))}
    </div>
  )
}

export default DotPattern

