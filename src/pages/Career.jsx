import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Globe,
  Heart,
  Building2,
  FileClock,
} from "lucide-react";

import React, { useState } from "react";
import banner from "../assets/CareerBG1.webp";
import { Helmet } from "react-helmet-async";
import { useAppData } from "../context/AppDataContext";
import JobCard from "../components/JobCard";

const Career = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const jobCategories = [
    "All",
    "Sales",
    "Marketing",
    "Management",
    "Business Development",
    "Supply Chain & Logistics",
    "Finance & Accounting",
    "Human Resources (HR)",
    "IT & Technical Support",
    "Administrative Support",
    "Training & Medical Education",
  ];
  const { jobs } = useAppData();
  

  return (
    <>
      <Helmet>
        <title>Careers - Genoviq Healthcare</title>
      </Helmet>
      <div className="min-h-screen top-24 relative">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${banner}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Come work with us
                <br />
                <span className="text-[#8e1c1c]">at Genoviq</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                A healthier world starts with a strong team. Join Genoviq
                Healthcare and be a catalyst for change in the pharmaceutical
                industry.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1a237e] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#8e1c1c] transition-colors duration-300"
              >
                <a href="#curr_openings">View Current Opportunities</a>
              </motion.button>
            </motion.div>
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

        {/* Why Join Us Section */}
        <section className="py-20 bg-gradient-to-b from-[#1a237e]/5 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1a237e] mb-4">
                Why Join Us?
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Briefcase,
                  title: "Career Growth",
                  description:
                    "Opportunities to grow within a dynamic and evolving industry",
                },
                {
                  icon: GraduationCap,
                  title: "Continuous Learning",
                  description:
                    "Access to world-class training and development programs",
                },
                {
                  icon: Heart,
                  title: "Great Benefits",
                  description: "Comprehensive healthcare and wellness programs",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-xl p-8 text-center"
                >
                  <div className="bg-[#1a237e]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-[#1a237e]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a237e] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-[#1a237e] text-white relative overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#8e1c1c] rounded-full opacity-20 blur-3xl"
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Culture</h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Join a team that values innovation, collaboration, and personal
                growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { value: "4.8/5", label: "Employee Satisfaction" },
                { value: "92%", label: "Retention Rate" },

                { value: "10+", label: "States" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Opportunities Section */}
        <section id="curr_openings" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1a237e] mb-4">
                Current Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find your perfect role in our growing team
              </p>
            </motion.div>

            {/* Job Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {jobCategories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${
                    activeCategory === category
                      ? "bg-[#1a237e] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Job Listings */}
            {jobs.length==0?<NoOpeningsMessage/> :<div className="grid gap-6 max-w-4xl mx-auto">
              {jobs.filter(
                (job) =>
                  activeCategory === "All" || job.department === activeCategory
              ).length > 0 ? (
                jobs
                  .filter(
                    (job) =>
                      activeCategory === "All" ||
                      job.department === activeCategory
                  )
                  .map((job, index) => <JobCard key={index} job={job} />)
              ) : (
                <div className="w-full max-w-2xl mx-auto my-12 p-6 bg-white shadow-lg rounded-2xl text-center border border-gray-200">
                <div className="text-primary-900">
                We're not hiring at the moment for this perticular profile, but we're always looking for
          passionate professionals eager to make an impact in healthcare and
          pharma.
                </div>
                </div>
              )}
            </div>}
          </div>
        </section>
      </div>
    </>
  );
};

export default Career;


const NoOpeningsMessage = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-6 bg-white shadow-lg rounded-2xl text-center border border-gray-200">
      <div className="flex flex-col items-center space-y-4">
        <FileClock className="w-12 h-12 text-gray-500" />
        <h2 className="text-2xl font-semibold text-gray-800">
          No Current Openings
        </h2>
        <p className="text-gray-600">
          We're not hiring at the moment, but we're always looking for
          passionate professionals eager to make an impact in healthcare and
          pharma.
        </p>
        <p className="text-gray-600">
          🚀 Stay tuned — exciting opportunities are just around the corner.
        </p>
        <p className="text-gray-600">
          💌 Drop your resume at{" "}
          <a
            href="mailto:careers@genoviq.com"
            className="text-blue-600 hover:underline font-medium"
          >
            careers@genoviqhealthcare.com
          </a>{" "}
          to stay on our radar.
        </p>
      </div>
    </div>
  );
};
