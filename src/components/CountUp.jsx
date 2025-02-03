import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

function CountUp({ end, duration = 2, label }) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / (duration * 1000), 1)

        setCount(Math.floor(end * percentage))

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      controls.start({ opacity: 1, y: 0 })

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [inView, end, duration, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-500">
        {count}
        {end >= 100 && "+"}
      </span>
      <span className="text-sm md:text-base text-gray-600 mt-2 uppercase tracking-wider">{label}</span>
    </motion.div>
  )
}

export default CountUp

