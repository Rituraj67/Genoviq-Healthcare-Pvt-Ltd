import {
  Building2,
  Users,
  Briefcase,
  FlaskRoundIcon as Flask,
  HeartPulse,
  Award,
  Globe,
  Sparkles,
  Pill,
  MapPin,
  GraduationCap,
  ArrowRight,
  Shield,
  Target,
  Heart,
  Lightbulb,
  CheckCircle2,
  Network,
  Scale,
  Truck,
  FileCheck,
  DollarSign,
  IndianRupeeIcon,
} from "lucide-react";
import banner from "../assets/AboutBG.webp";
import { Helmet } from "react-helmet-async";
import { useAppData } from "../context/AppDataContext";
import { useState, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

const AboutPage = () => {
  const { products } = useAppData();
  
  const quickFacts = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Incorporated",
      value: "2019",
      delay: 0.2,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employees",
      value: "50+",
      delay: 0.4,
    },
    {
      icon: <IndianRupeeIcon className="w-8 h-8" />,
      title: "Turnover",
      value: "₹50 Crore",
      delay: 0.6,
    },
  ];

    const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="min-h-screen top-24 relative">
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
              Empowering Healthcare, Nationwide
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4">
                About Us
              </h2>
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
                  At Genoviq Healthcare, we specialize in driving pharmaceutical
                  growth through strategic marketing excellence. With years of
                  experience in the healthcare domain, we have established
                  ourselves as a trusted partner for pharmaceutical brands
                  looking to expand their reach and impact.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Our team of experts crafts innovative marketing solutions,
                  builds strong brand identities, and ensures effective
                  communication between pharmaceutical companies, healthcare
                  professionals, and patients. At Genoviq, we are committed to
                  making quality healthcare more visible, accessible, and
                  impactful through tailored marketing strategies and deep
                  industry insights.
                </p>

                {/* Animated stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      icon: MapPin,
                      label: "States Covered",
                      value: "10+",
                    },
                    {
                      icon: Building2,
                      label: "Institutional Clients",
                      value: "3+",
                    },
                    {
                      icon: Award,
                      label: "Awards Won",
                      value: "50+",
                    },
                    {
                      icon: Pill,
                      label: "Products",
                      value: `${Math.floor(products.length / 10) * 10}+`,
                    },
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
                      <div className="text-2xl font-bold text-[#8e1c1c]">
                        {stat.value}
                      </div>
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
                      icon: HeartPulse,
                      title: "Patient-Centric",
                      description:
                        "Committed to improving patient outcomes through ethical marketing and support",
                    },
                    {
                      icon: Sparkles,
                      title: "Quality Assurance",
                      description:
                        "Offering top-quality pharmaceutical brands with verified safety and efficacy",
                    },
                    {
                      icon: Briefcase, // Replace with an icon suitable for business or contracts
                      title: "Institutional Expertise",
                      description:
                        "Specialized in institutional sales, especially government tenders and hospital contracts",
                    },
                    {
                      icon: Building2, // Represents partnership / marketing / business presence
                      title: "Trusted Partnerships",
                      description:
                        "Strong network with healthcare professionals, hospitals, and government institutions",
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
                      <h3 className="text-lg font-semibold text-[#1a237e] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
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
        {/* Quick Facts Section */}
        <section className="py-20 bg-gradient-to-b from-[#1a237e] to-[#8e1c1c]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
            >
              <div className="text-4xl font-bold  mb-4">Quick Facts</div>
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
                  <h3 className="text-xl font-semibold mb-2 text-[#1a237e]">
                    {fact.title}
                  </h3>
                  <p className="text-2xl font-bold text-[#8e1c1c]">
                    {fact.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CoreValues />

        <BoardOfDirectors />

        {/* Leadership Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-[#1a237e] mb-16"
            >
              <div className="text-4xl font-bold text-[#1a237e] mb-4">
                Our Leadership
              </div>
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
                { title: "National Sales Head", name: "Mr. Anand Singh", url:"https://res.cloudinary.com/df5mjcfzc/image/upload/v1742671391/Genoviq_1742671391503_jpm2gr.jpg" },
                { title: "Director", name: "Mrs. Saumya Singh", url:"https://res.cloudinary.com/df5mjcfzc/image/upload/v1742671309/Genoviq_1742671309011_odtwj9.jpg" },
                { title: "Vice-President", name: "Mr. Brijesh Prasad", url:"https://res.cloudinary.com/df5mjcfzc/image/upload/v1742671528/Genoviq_1742671528389_omh8ca.jpg" },
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
                  <div className="w-24 h-24 relative rounded-full bg-gray-200 mx-auto mb-4" >
<img src={leader.url} alt="" srcset="" className=" w-24 h-24 object-cover rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a237e] mb-2">
                    {leader.title}
                  </h3>
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
      </div>
    </>
  );
};

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
      description:
        "Specialized in development and manufacturing of high-quality pharmaceutical products.",
      established: "2020",
    },
    {
      name: "Neopulse Lifesciences",
      logo: "/placeholder.svg?height=100&width=200",
      description:
        "Research-driven biotechnology company advancing medical breakthroughs.",
      established: "2021",
    },
  ];

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
              <h3 className="text-xl font-bold text-[#1a237e] mb-4">
                {company.name}
              </h3>
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
  );
};

const Milestones = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { milestones } = useAppData();
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const modalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedMilestone(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* Carousel */}
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
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {milestone.description}
                  </p>
                  <button
                    className="flex items-center text-white/80 hover:text-white transition-colors"
                    onClick={() => setSelectedMilestone(milestone)}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMilestone && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl max-w-lg w-full text-white relative shadow-lg max-h-[90vh] overflow-y-auto"
            >
              {/* Sticky Close Button */}
              <div className="sticky top-0 z-10 flex justify-end pb-2">
                <button
                  onClick={() => setSelectedMilestone(null)}
                  aria-label="Close Modal"
                  className="text-white text-xl bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white mb-4">
                  <img
                    src={selectedMilestone.image || "/placeholder.svg"}
                    alt={selectedMilestone.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {selectedMilestone.title}
                </h3>
                <div className="text-sm font-semibold text-[#8e1c1c] bg-white/90 rounded-full px-3 py-1 inline-block mb-4">
                  {selectedMilestone.year}
                </div>
                <p className="text-white/90 text-sm">
                  {selectedMilestone.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

import { X } from "lucide-react";

const Awards = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: false, containScroll: "trimSnaps" },
    [Autoplay()]
  );
  const { awards } = useAppData();

  const [selectedAward, setSelectedAward] = useState(null);
  const modalRef = useRef();

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedAward(null);
      }
    };
    if (selectedAward) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedAward]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">
            Awards & Recognition
          </h2>
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

        {/* Embla Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="flex gap-x-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="basis-[90%] md:basis-[45%] lg:basis-[30%] shrink-0"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-24 h-24 mx-auto mb-6">
                      <img
                        src={award.image || "/placeholder.svg"}
                        alt={award.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-semibold text-[#8e1c1c] mb-4 text-center">
                      {award.year}
                    </div>
                    <h3 className="text-xl font-bold text-[#1a237e] mb-4 text-center">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 text-center">
                      {award.description}
                    </p>
                  </div>

                  <div className="mt-4 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#1a237e] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#8e1c1c] hover:text-white transition-colors duration-300"
                      onClick={() => setSelectedAward(award)}
                    >
                      View Detail
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white max-w-lg w-[90%] p-6 rounded-xl relative shadow-2xl"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
              onClick={() => setSelectedAward(null)}
            >
              <X size={24} />
            </button>
            <div className="w-24 h-24 mx-auto mb-6">
              <img
                src={selectedAward.image || "/placeholder.svg"}
                alt={selectedAward.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1a237e] mb-2 text-center">
              {selectedAward.title}
            </h3>
            <p className="text-sm text-[#8e1c1c] mb-4 text-center">
              {selectedAward.year}
            </p>
            <p className="text-gray-700 text-center whitespace-pre-line">
              {selectedAward.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

const Quality = () => {
  const qualityAspects = [
    {
      icon: Shield,
      title: "Quality Assurance / Quality Control",
      description:
        "Maintaining highest standards through rigorous quality management systems",
    },
    {
      icon: Network,
      title: "Vendor Management",
      description: "Strategic partnerships with certified and reliable vendors",
    },
    {
      icon: Building2,
      title: "Contract Manufacturing",
      description:
        "Collaboration with WHO-GMP certified manufacturing facilities",
    },
    {
      icon: Truck,
      title: "Distribution / Supply Chain",
      description:
        "Efficient and reliable distribution network ensuring timely delivery",
    },
    {
      icon: FileCheck,
      title: "Verification of Product",
      description:
        "Thorough verification process ensuring product authenticity",
    },
    {
      icon: Scale, // Make sure to import this icon from your icon set (like Lucide or Phosphor)
      title: "Regulatory Compliance",
      description:
        "Adherence to national and state-level regulatory standards and documentation",
    },
  ];

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
  );
};

const CoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Care",
      description:
        "Putting patient well-being at the heart of everything we do",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in all our endeavors",
    },
    {
      icon: Users, // replace with an appropriate icon from your icon set
      title: "Collaboration",
      description:
        "Building strong partnerships with institutions and healthcare providers",
    },
    {
      icon: CheckCircle2,
      title: "Integrity",
      description:
        "Maintaining ethical practices and transparency in all operations",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">
            Our Core Values
          </h2>
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
              <h3 className="text-xl font-bold text-[#1a237e] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Modal = ({ director, onClose }) => {
  const modalRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center px-4 py-6 sm:px-6 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl w-full max-w-md text-white relative shadow-xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          {/* Sticky Close Button Container */}
          <div className="sticky top-0 z-10 flex justify-end   pb-2">
            <button
              onClick={onClose}
              aria-label="Close Modal"
              className="text-white text-xl bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Profile Content */}
          <div className="flex flex-col items-center text-center mt-2">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white mb-4">
              <img
                src={director.profilePicture || "/placeholder.svg"}
                alt={director.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">{director.name}</h3>
            <p className="text-sm text-white/80 mb-4">{director.designation}</p>
            <p className="text-sm text-white/90 whitespace-pre-line">
              {director.description || "No description available."}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BoardOfDirectors = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay(),
  ]);
  const { directors } = useAppData();
  const [selectedDirector, setSelectedDirector] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a237e] to-[#8e1c1c] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Board of Directors</h2>
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
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={director.profilePicture || "/placeholder.svg"}
                      alt={director.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{director.name}</h3>
                    <p className="text-gray-300 mb-4">{director.designation}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-[#1a237e] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#8e1c1c] hover:text-white transition-colors duration-300"
                      onClick={() => setSelectedDirector(director)}
                    >
                      Know More
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedDirector && (
        <Modal
          director={selectedDirector}
          onClose={() => setSelectedDirector(null)}
        />
      )}
    </section>
  );
};

export default AboutPage;
