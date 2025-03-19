import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone, MapPinHouse } from "lucide-react";
import contactbg from "../assets/ContactBG.png";
import GoogleMapPreview from "../components/GoogleMapPreview";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_ADDRESS}/contact/send-query`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000); // Hide after 3 seconds
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact - Genoviq Healthcare</title>
      </Helmet>
      <div className="min-h-screen  bg-gradient-to-b from-gray-50 container relative top-24 pt-20 pb-24 md:pt-32 md:pb-40 to-gray-100">
        {/* Background Image */}
        <div
          className="fixed inset-0 opacity-50 z-0"
          style={{
            backgroundImage: `url('${contactbg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold">
              <span className="text-[#1a237e]">Get </span>
              <span className="text-[#8e1c1c]">In Touch</span>
            </h1>
            <p className="mt-4 text-gray-600">Write to us</p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block pl-1 text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-b-xl border-b border-x border-gray-300 shadow-md focus:border-[#1a237e] focus:ring-[#1a237e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block pl-1 text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-x rounded-b-xl border-gray-300 shadow-md focus:border-[#1a237e] focus:ring-[#1a237e]"
                  />
                </div>
                <div>
                  <label className="block pl-1 text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-x rounded-b-xl border-gray-300 shadow-md focus:border-[#1a237e] focus:ring-[#1a237e]"
                  />
                </div>
              </div>

              <div>
                <label className="block pl-1 text-sm font-medium text-gray-700">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 text-sm py-2 px-2 block w-full border-b border-x rounded-b-xl border-gray-300 shadow-md focus:border-[#1a237e] focus:ring-[#1a237e]"
                >
                  <option value="">Select Subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block pl-1 text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full outline-none border-b border-x rounded-b-xl border-gray-300 shadow-md focus:border-[#1a237e] focus:ring-[#1a237e]"
                />
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-b-xl transition-colors duration-300
    ${
      isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#1a237e] hover:bg-[#8e1c1c] text-white"
    }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact & Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          >
            {/* Left Block - Contact Info */}
            <div className="bg-white shadow-lg rounded-2xl border-x-4 border-primary-700 p-6">
              <MapPinHouse className=" text-primary-800 scale-150" />
              <h3 className="text-xl font-semibold my-4 text-primary-900">
                {" "}
                Corporate Office Address:
              </h3>

              <p className="text-gray-600">
                Genoviq Healthcare Private Limited
              </p>
              <p className="text-gray-600">
                Plot No.64, Room 1 & 2, Kamlabad, Badauli, Behind Seva Hospital
              </p>
              <p className="text-gray-600">
                Tahsil- BKT, Lucknow, Uttar Pradesh, India - 226201
              </p>
              {/* <h3 className="text-xl font-semibold my-4 text-primary-900">
                {" "}
                Registered Office Address:
              </h3>
              <p className="text-gray-600">123 Business Street, Suite 500</p>
              <p className="text-gray-600">New York, NY 10001, USA</p> */}

              <div className="mt-12">
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-5 h-5 text-[#1a237e]" /> +91 9919248944
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5 text-[#8e1c1c]" />{" "}
                  contact@genoviqhealthcare.com
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-[#1a237e]" /> Visit us today!
                </p>
              </div>
            </div>

            {/* Right Block - Google Map */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <GoogleMapPreview />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <PopUp showModal={showModal} />
    </>
  );
};

export default ContactPage;

const PopUp = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl"
          >
            {/* Circle with checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-[#1a237e]"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a237e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="checkmark"
              >
                <motion.path
                  d="M4 12l5 5L20 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.svg>
            </motion.div>

            {/* Message */}
            <p className="text-center text-lg font-semibold text-[#1a237e] mt-4">
              Query Submitted Successfully!
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
