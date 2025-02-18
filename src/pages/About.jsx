
import { motion } from "framer-motion";
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
  IndianRupee,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import banner from "../assets/AboutBG.webp"

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      icon: <IndianRupee className="w-8 h-8" />,
      title: "Turnover",
      value: "₹ 100 Crores",
      delay: 0.6,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Group of Companies</title>
      </Helmet>
      <div className="min-h-screen relative top-20">
        {/* Hero Section with Parallax */}
        <section className="relative h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-contain bg-center"
            style={{
              backgroundImage: `url('${banner}')`,
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
                  At Genoviq Healthcare, we are pioneering the future of
                  pharmaceutical excellence. With over eight decades of
                  unwavering commitment to healthcare innovation, we have
                  established ourselves as a global leader in developing and
                  delivering life-changing medical solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our state-of-the-art research facilities and dedicated team of
                  experts work tirelessly to discover breakthrough treatments
                  that address the world's most pressing health challenges. We
                  believe in making quality healthcare accessible to all,
                  driving positive change in communities worldwide.
                </p>

                {/* Animated stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: Globe, label: "Global Presence", value: "100+" },
                    {
                      icon: GraduationCap,
                      label: "Research Papers",
                      value: "500+",
                    },
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
                      icon: Microscope,
                      title: "Research Excellence",
                      description:
                        "Cutting-edge research facilities and innovative methodologies",
                    },
                    {
                      icon: HeartPulse,
                      title: "Patient-Centric",
                      description:
                        "Committed to improving patient outcomes worldwide",
                    },
                    {
                      icon: Flask,
                      title: "Innovation",
                      description: "Pioneering breakthrough medical solutions",
                    },
                    {
                      icon: Sparkles,
                      title: "Quality Assurance",
                      description:
                        "Highest standards in pharmaceutical manufacturing",
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
              Quick Facts
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

        {/* Leadership Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-[#1a237e] mb-16"
            >
              Our Leadership
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
                  <h3 className="text-lg font-semibold text-[#1a237e] mb-2">
                    {leader.title}
                  </h3>
                  <p className="text-xl text-[#8e1c1c]">{leader.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
