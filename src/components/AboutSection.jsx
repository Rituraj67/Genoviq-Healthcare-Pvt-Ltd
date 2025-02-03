import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import DotPattern from "./DotPattern"
import VideoThumbnail from "./VideoThumbnail"

const AboutSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <VideoThumbnail onPlay={() => console.log("Play video")} />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-0 right-0 bg-white p-6 rounded-lg shadow-xl"
            >
              <div className="text-4xl font-bold text-primary-500">4+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Year Experience</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="relative">
            <DotPattern />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <span className="text-primary-500 text-sm font-semibold tracking-wider uppercase">About</span>
              <h2 className="text-4xl font-rubik font-semibold text-secondary-900 mt-2 mb-6">WHO WE ARE</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Genoviq, we are humanly working towards providing access to High Quality & Innovative Healthcare
                  solutions for the Patients that will improve Human Wellbeing. Genoviq Healthcare Pvt Ltd is a
                  fast-growing Pharmaceutical Organization, standing on the corner stone of Humanity & Innovation.
                </p>
                <p>
                  It is rightly said that when the storms do come, you can only allow them to slow them to slow you
                  down, but don't let them stop you. There will be delays, detours & disappointments, but you must keep
                  pushing through it. The Zeal & determination took us to the newer goal pushing.
                </p>
              </div>

              <motion.div
                className="mt-8"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

