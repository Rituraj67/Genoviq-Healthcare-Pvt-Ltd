import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../assets/GHPL.png"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Newsroom", href: "/newsroom" },
  { name: "Careers", href: "/career" },
  { name: "Contact", href: "/contact" },
]

function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();

  useEffect(() => {
    // Get the current path from the URL
    const currentPath = "/"+ window.location.pathname.split("/")[1];
    console.log(currentPath);
    
    // Find the matching nav item
    const matchingItem = navItems.find((item) => currentPath == item.href);
    console.log(matchingItem);
    // Update the active state if a match is found
    if (matchingItem) {
      setActiveItem(matchingItem.name);
    } else {
      setActiveItem(""); // Reset if no match is found
    }
  }, [location]);
  

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Genoviq Healthcare Logo"
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} className="relative group" onClick={() => setActiveItem(item.name)}>
                <span className="text-gray-600 hover:text-primary-500 transition-colors duration-200">{item.name}</span>
                {activeItem === item.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-500"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <div className="absolute inset-x-0 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-gray-100 rounded-md">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                onClick={() => {
                  setActiveItem(item.name)
                  setIsMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

