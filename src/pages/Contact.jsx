import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone, MapPinHouse } from "lucide-react";
import contactbg from "../assets/ContactBG.png";
import GoogleMapPreview from "../components/GoogleMapPreview";
import { Helmet } from "react-helmet-async";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 container relative pt-20 pb-24 md:pt-32 md:pb-40 to-gray-100">
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
                <div>
                  <label className="block pl-1 text-sm font-medium text-gray-700">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-x rounded-b-xl border-gray-300 shadow-md focus:border-[#1a237e] focus:ring-[#1a237e]"
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
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#1a237e] text-white py-2 px-4 rounded-b-xl hover:bg-[#8e1c1c] transition-colors duration-300"
              >
                Submit
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
              <p className="text-gray-600">123 Business Street, Suite 500</p>
              <p className="text-gray-600">New York, NY 10001, USA</p>
              <h3 className="text-xl font-semibold my-4 text-primary-900">
                {" "}
                Registered Office Address:
              </h3>
              <p className="text-gray-600">123 Business Street, Suite 500</p>
              <p className="text-gray-600">New York, NY 10001, USA</p>

              <div className="mt-4">
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-5 h-5 text-[#1a237e]" /> +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5 text-[#8e1c1c]" />{" "}
                  contact@company.com
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
    </>
  );
};

export default ContactPage;
