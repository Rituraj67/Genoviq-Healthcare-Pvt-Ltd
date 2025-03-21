"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import JobApplication from "./JobApplication"

export default function JobCard({ job }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Get badge color based on employment type
  const getBadgeColor = (type) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800"
      case "Part-time":
        return "bg-blue-100 text-blue-800"
      case "Internship":
        return "bg-purple-100 text-purple-800"
      case "Contract":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden border"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
        layout
      >
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getBadgeColor(job.employmentType)}`}>
                  {job.employmentType}
                </span>
                <span className="text-sm text-gray-500">Posted on {formatDate(job.createdAt)}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{job.title}</h3>
              <div className="flex md:items-center flex-col md:flex-row gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1a237e] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#8e1c1c] transition-colors duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "0px", overflow: "hidden" }}
            className="overflow-hidden"
          >
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Job Description</h4>
              <p className="text-gray-600">{job.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Qualifications</h4>
              <p className="text-gray-600">{job.qualifications}</p>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-secondary-500 hover:text-primary/80 flex items-center gap-1"
          >
            {isExpanded ? "Show less" : "Show more"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Job Application Modal */}
      <JobApplication isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} jobTitle={job.title} />
    </>
  )
}

