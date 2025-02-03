import { motion } from "framer-motion"
import { Play } from "lucide-react"
import image from "../assets/AboutSection.webp"

const VideoThumbnail = ({ onPlay }) => {
  return (
    <div className="relative group cursor-pointer" onClick={onPlay}>
      <div className="absolute -left-8 -top-8 w-full h-full bg-primary-500/20 -z-10" />
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt="Doctor explaining healthcare"
          className="w-full h-auto object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-8 h-8 text-white fill-current" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default VideoThumbnail

