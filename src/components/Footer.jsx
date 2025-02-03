import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
} from "lucide-react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-secondary-100 text-secondary-900">
      {/* Upper section with logo */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Genoviq Healthcare Logo"
            className="h-48 w-auto "
          />
          <p className="text-sm text-secondary-600 text-center max-w-md">
            "Genoviq, Healthcare Pvt Ltd is a fast -growing Pharmaceutical
            Organization."
          </p>
        </div>
      </div>

      {/* Lower section with contact info and links */}
      <div className="bg-secondary-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-300">
                Contact Info
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="w-16 mr-2 text-primary-400" />
                  <span className="text-secondary-200">
                    Genoviq Healthcare Private Limited Plot No.64, Room 1 & 2,
                    Kamlabad, Badauli, Behind Seva Hospital, Tahsil- BKT,
                    Lucknow-226201
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary-400" />
                  <a
                    href="mailto:info@genoviq.com"
                    className="text-secondary-200 hover:text-primary-300 transition-colors"
                  >
                    info.genoviq@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary-400" />
                  <a
                    href="tel:+1234567890"
                    className="text-secondary-200 hover:text-primary-300 transition-colors"
                  >
                    +91 - 9919248944
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-300">
                Useful Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-secondary-200 hover:text-primary-300 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-secondary-200 hover:text-primary-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-secondary-200 hover:text-primary-300 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="text-secondary-200 hover:text-primary-300 transition-colors"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-secondary-200 hover:text-primary-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-300">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-secondary-200 hover:text-primary-300 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-secondary-200 hover:text-primary-300 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-secondary-200 hover:text-primary-300 transition-colors"
                >
                  <LinkedIn className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-300">
                Stay Updated
              </h3>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-secondary-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-secondary-700 text-center text-sm text-secondary-400">
            © {new Date().getFullYear()} Genoviq Healthcare. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
