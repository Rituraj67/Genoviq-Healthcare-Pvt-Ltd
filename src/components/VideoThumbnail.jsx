import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import image from "../assets/AboutSection.webp" // Thumbnail image

const VideoThumbnail = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoSrc = "https://res.cloudinary.com/df5mjcfzc/video/upload/v1742682565/Untitled_video_-_Made_with_Clipchamp_2_qap7qg.mp4"

  return (
    <div className="relative group cursor-pointer max-w-4xl mx-auto">
      <div className="aspect-video relative rounded-lg overflow-hidden bg-black">
        {!isPlaying ? (
          <div onClick={() => setIsPlaying(true)} className="w-full h-full relative">
            <img
              src={image}
              alt="Doctor explaining healthcare"
              className="w-full h-full object-cover"
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
        ) : (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  )
}

export default VideoThumbnail
