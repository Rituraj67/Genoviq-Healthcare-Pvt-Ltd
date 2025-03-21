"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function JobApplication({ isOpen, onClose, jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    introduction: "",
    resume: null,
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fileName, setFileName] = useState("")
  const fileInputRef = useRef(null)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    }
  }

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.type !== "application/pdf") {
        setFormErrors({
          ...formErrors,
          resume: "Please upload a PDF file",
        })
        setFileName("")
        setFormData({
          ...formData,
          resume: null,
        })
        return
      }

      setFormData({
        ...formData,
        resume: file,
      })
      setFileName(file.name)

      // Clear error if there was one
      if (formErrors.resume) {
        setFormErrors({
          ...formErrors,
          resume: "",
        })
      }
    }
  }

  // Validate form
  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) errors.name = "Name is required"

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!formData.introduction.trim()) errors.introduction = "Please introduce yourself"

    if (!formData.resume) errors.resume = "Please upload your resume"

    return errors
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Auto close after 3 seconds
      setTimeout(() => {
        handleReset()
        onClose()
      }, 3000)
    }, 1500)
  }

  // Reset form state
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      introduction: "",
      resume: null,
    })
    setFileName("")
    setFormErrors({})
    setIsSubmitted(false)
  }

  // Close modal handler
  const handleClose = () => {
    if (!isSubmitting) {
      handleReset()
      onClose()
    }
  }

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !isSubmitting && e.target.classList.contains("modal-overlay")) {
        handleClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, isSubmitting])

  // Handle escape key to close
  useEffect(() => {
    const handleEscKey = (e) => {
      if (isOpen && !isSubmitting && e.key === "Escape") {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, isSubmitting])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold">Apply for {jobTitle}</h2>
            {!isSubmitting && (
              <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-4 sm:py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:h-10 sm:w-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl font-bold text-green-600 mb-2"
                >
                  Application Submitted!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 text-center text-sm sm:text-base"
                >
                  Thank you for your application. We'll review it and get back to you soon.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isSubmitting}
                  />
                  {formErrors.name && <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base ${
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isSubmitting}
                  />
                  {formErrors.phone && <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="introduction" className="block text-sm font-medium text-gray-700 mb-1">
                    Brief Introduction *
                  </label>
                  <textarea
                    id="introduction"
                    name="introduction"
                    rows="3"
                    value={formData.introduction}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base ${
                      formErrors.introduction ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us a bit about yourself and why you're interested in this position..."
                    disabled={isSubmitting}
                  ></textarea>
                  {formErrors.introduction && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.introduction}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF only) *</label>
                  <div className="flex items-center">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={isSubmitting}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className={`px-3 py-2 text-sm border rounded-md mr-2 ${
                        formErrors.resume ? "border-red-500" : "border-gray-300"
                      }`}
                      disabled={isSubmitting}
                    >
                      Choose File
                    </button>
                    <span className="text-xs sm:text-sm text-gray-500 truncate flex-1">
                      {fileName || "No file chosen"}
                    </span>
                  </div>
                  {formErrors.resume && <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.resume}</p>}
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    className="w-full bg-[#1a237e] text-white py-2 rounded-md hover:bg-[#8e1c1c] transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

