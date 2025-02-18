import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import {
  Building2,
  Users,
  Microscope,
  FlaskRoundIcon as Flask,
  HeartPulse,
  Award,
  Globe,
  Sparkles,
  Pill,
  GraduationCap,
  ArrowRight,
  Shield,
  Target,
  Heart,
  Lightbulb,
  CheckCircle2,
  Network,
  Truck,
  FileCheck,
  DollarSign,
} from "lucide-react"
import { useEffect, useState } from "react"
import banner from "../assets/AboutBG.webp"

const quickFacts = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Incorporated",
    value: "1935",
    delay: 0.2,
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Employees",
    value: "25,000+",
    delay: 0.4,
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Turnover",
    value: "$ 2.8 Billion",
    delay: 0.6,
  },
]

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="min-h-screen top-20 relative">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner})`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-4"
          >
            ADVANCING HEALTHCARE,
            <br />
            TRANSFORMING LIVES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center max-w-3xl"
          >
            Innovation for a Healthier Tomorrow
          </motion.p>
        </div>
        {/* Animated scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#1a237e] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-[#8e1c1c] rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4">About Us</h2>
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-1 bg-[#8e1c1c]"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                At Genoviq Healthcare, we are pioneering the future of pharmaceutical excellence. With over eight
                decades of unwavering commitment to healthcare innovation, we have established ourselves as a global
                leader in developing and delivering life-changing medical solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our state-of-the-art research facilities and dedicated team of experts work tirelessly to discover
                breakthrough treatments that address the world's most pressing health challenges. We believe in making
                quality healthcare accessible to all, driving positive change in communities worldwide.
              </p>

              {/* Animated stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Globe, label: "Global Presence", value: "100+" },
                  { icon: GraduationCap, label: "Research Papers", value: "500+" },
                  { icon: Award, label: "Awards Won", value: "50+" },
                  { icon: Pill, label: "Products", value: "200+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                  >
                    <stat.icon className="w-6 h-6 text-[#1a237e] mb-2" />
                    <div className="text-2xl font-bold text-[#8e1c1c]">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Animated features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Microscope,
                    title: "Research Excellence",
                    description: "Cutting-edge research facilities and innovative methodologies",
                  },
                  {
                    icon: HeartPulse,
                    title: "Patient-Centric",
                    description: "Committed to improving patient outcomes worldwide",
                  },
                  {
                    icon: Flask,
                    title: "Innovation",
                    description: "Pioneering breakthrough medical solutions",
                  },
                  {
                    icon: Sparkles,
                    title: "Quality Assurance",
                    description: "Highest standards in pharmaceutical manufacturing",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-100"
                  >
                    <div className="bg-[#1a237e]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1a237e] mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -top-8 -right-8 w-16 h-16 border-4 border-[#1a237e]/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -bottom-8 -left-8 w-20 h-20 border-4 border-[#8e1c1c]/20 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>


      <GroupCompanies />


      {/* Quick Facts Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a237e] to-[#8e1c1c]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
           <h2 className="text-4xl font-bold  mb-4">Quick Facts</h2>
            <div className="flex justify-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-white"
            />
          </div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: fact.delay }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-xl p-8 text-center transform transition-all duration-300"
              >
                <div className="bg-[#1a237e] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
                  {fact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a237e]">{fact.title}</h3>
                <p className="text-2xl font-bold text-[#8e1c1c]">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1a237e] mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Our Leadership</h2>
            <div className="flex justify-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-[#8e1c1c]"
            />
          </div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Founder (1898-1972)", name: "Dr. K.A. Hamied" },
              { title: "Chairman", name: "Dr. Y.K. Hamied" },
              { title: "Vice-Chairman", name: "Mr. M.K. Hamied" },
            ].map((leader, index) => (
              <motion.div
                key={leader.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#1a237e] mb-2">{leader.title}</h3>
                <p className="text-xl text-[#8e1c1c]">{leader.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New sections added here */}
      <Milestones />
      <Awards />
      <Quality />
      <CoreValues />
    </div>
  )
}

const GroupCompanies = () => {
  const companies = [
    {
      name: "Genoviq Healthcare",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20(13)-n6dnZvWRAVkznazx2Nw87v4FGmlvns.png",
      description:
        "Leading pharmaceutical marketing and distribution company focused on innovative healthcare solutions.",
      established: "2019",
    },
    {
      name: "Novaxia Pharma",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Specialized in development and manufacturing of high-quality pharmaceutical products.",
      established: "2020",
    },
    {
      name: "Neopulse Lifesciences",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Research-driven biotechnology company advancing medical breakthroughs.",
      established: "2021",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Our Group</h2>
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-[#8e1c1c]"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <div className="h-20 flex items-center justify-center mb-6">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a237e] mb-4">{company.name}</h3>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Est. {company.established}</span>
                <Building2 className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Milestones = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const milestones = [
    {
      title: "Company Foundation",
      description: "Establishment of Genoviq Healthcare with a vision to transform healthcare accessibility.",
      image: "/placeholder.svg?height=200&width=300",
      year: "2019",
    },
    {
      title: "Market Expansion",
      description: "Successfully expanded operations to 10+ states across India.",
      image: "/placeholder.svg?height=200&width=300",
      year: "2020",
    },
    {
      title: "Product Portfolio Growth",
      description: "Reached milestone of 100+ products in various therapeutic segments.",
      image: "/placeholder.svg?height=200&width=300",
      year: "2021",
    },
    {
      title: "Digital Transformation",
      description: "Implemented cutting-edge digital solutions for better healthcare delivery.",
      image: "/placeholder.svg?height=200&width=300",
      year: "2022",
    },
  ]

  return (
    <section className="py-20 bg-[#1a237e] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Milestones</h2>
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-white"
            />
          </div>
        </motion.div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] mx-4"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                    <img
                      src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-semibold text-[#8e1c1c] bg-white/90 rounded-full px-3 py-1 inline-block mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{milestone.title}</h3>
                  <p className="text-gray-300 mb-6">{milestone.description}</p>
                  <button className="flex items-center text-white/80 hover:text-white transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Awards = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const awards = [
    {
      title: "Excellence in Healthcare",
      description: "Recognized for outstanding contribution to healthcare accessibility",
      image: "/placeholder.svg?height=200&width=200",
      year: "2023",
    },
    {
      title: "Best Growth Performance",
      description: "Awarded for exceptional business growth and market expansion",
      image: "/placeholder.svg?height=200&width=200",
      year: "2022",
    },
    {
      title: "Innovation Award",
      description: "Honored for innovative approaches in pharmaceutical marketing",
      image: "/placeholder.svg?height=200&width=200",
      year: "2021",
    },
    {
      title: "Innovation Award",
      description: "Honored for innovative approaches in pharmaceutical marketing",
      image: "/placeholder.svg?height=200&width=200",
      year: "2021",
    },
    {
      title: "Innovation Award",
      description: "Honored for innovative approaches in pharmaceutical marketing",
      image: "/placeholder.svg?height=200&width=200",
      year: "2021",
    },
    {
      title: "Innovation Award",
      description: "Honored for innovative approaches in pharmaceutical marketing",
      image: "/placeholder.svg?height=200&width=200",
      year: "2021",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Awards & Recognition</h2>
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-[#8e1c1c]"
            />
          </div>
        </motion.div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] mx-4"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="w-24 h-24 mx-auto mb-6">
                    <img
                      src={award.image || "/placeholder.svg"}
                      alt={award.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-sm font-semibold text-[#8e1c1c] mb-4">{award.year}</div>
                  <h3 className="text-xl font-bold text-[#1a237e] mb-4">{award.title}</h3>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Quality = () => {
  const qualityAspects = [
    {
      icon: Shield,
      title: "Quality Assurance / Quality Control",
      description: "Maintaining highest standards through rigorous quality management systems",
    },
    {
      icon: Network,
      title: "Vendor Management",
      description: "Strategic partnerships with certified and reliable vendors",
    },
    {
      icon: Building2,
      title: "Contract Manufacturing",
      description: "Collaboration with WHO-GMP certified manufacturing facilities",
    },
    {
      icon: Truck,
      title: "Distribution / Supply Chain",
      description: "Efficient and reliable distribution network ensuring timely delivery",
    },
    {
      icon: FileCheck,
      title: "Verification of Product",
      description: "Thorough verification process ensuring product authenticity",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a237e] to-[#8e1c1c] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Quality Excellence</h2>
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-white"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {qualityAspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <aspect.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{aspect.title}</h3>
              <p className="text-gray-200">{aspect.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Care",
      description: "Putting patient well-being at the heart of everything we do",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in all our endeavors",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously seeking new ways to improve healthcare",
    },
    {
      icon: CheckCircle2,
      title: "Integrity",
      description: "Maintaining ethical practices and transparency in all operations",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Our Core Values</h2>
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-[#8e1c1c]"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="bg-[#1a237e]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"
              >
                <value.icon className="w-8 h-8 text-[#1a237e]" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#1a237e] mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutPage

