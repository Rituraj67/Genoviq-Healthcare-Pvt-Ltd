import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Info, X } from "lucide-react";
import Tooltip from "./Tooltip";

const ProductCard = ({ product, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowDetails(false);
      }
    };

    if (showDetails) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [showDetails]);

  // Auto-rotate images
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % product.images.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, product.images.length]);

  // Close popup when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowDetails(false);
      }
    };

    if (showDetails) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDetails]);

  const nextImage = (e) => {
 

    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = (e) => {
   
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isImageModalOpen) return;

      if (e.key === "Escape") {
        setIsImageModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        setModalImageIndex((prev) =>
          prev === 0 ? product.images.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setModalImageIndex((prev) =>
          prev === product.images.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageModalOpen, product.images.length]);

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
      >
        {/* Image Slider */}
        <div
          className="relative h-64 bg-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="w-full h-full cursor-zoom-in z-10 relative"
            onClick={() => {
              setModalImageIndex(currentImageIndex);
              setIsImageModalOpen(true);
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={product.images[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Arrow Buttons */}
          {product.images.length > 1 && (
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-between px-2 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Ensure e is the MouseEvent
                  prevImage(e);
                }}
                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </motion.button>

              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage(e);
                }}
                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </motion.button>
            </motion.div>
          )}

          {/* Dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20">
              {product.images.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    i === currentImageIndex ? "bg-primary-500" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="p-5 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-secondary-900">
              {product.name}
            </h3>
            {product.type && (
              <span className="px-3 py-1 text-xs rounded-full bg-primary-100 text-primary-600 font-semibold">
                {product.type}
              </span>
            )}
          </div>

          <div className="space-y-2 flex-grow text-sm">
            <div className="flex gap-2">
              <span className="text-gray-500 font-medium w-24">
                Composition:
              </span>
              <Tooltip content={product.composition} />
            </div>

            <div className="flex gap-2">
              <span className="text-gray-500 font-medium w-24">Packaging:</span>
              <span className="text-gray-800 px-2 py-0.5 rounded-md">
                {product.packaging}
              </span>
            </div>

            <div className="flex gap-2">
              <span className="text-gray-500 font-medium w-24">Division:</span>
              <span className="text-blue-800 px-2 py-0.5 rounded-md">
                {product.division}
              </span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowDetails(true)}
            className="mt-4 w-full py-2 bg-secondary-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-secondary-600 transition-colors"
          >
            <Info className="w-4 h-4" />
            <span>View Details</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Full Screen Modal */}
      <AnimatePresence mode="wait">
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
          >
            {/* Left Arrow */}
            {product.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalImageIndex((prev) =>
                    prev === 0 ? product.images.length - 1 : prev - 1
                  );
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
              >
                <ChevronLeft className="text-white w-6 h-6" />
              </button>
            )}

            {/* Full Image */}
            <motion.img
              src={product.images[modalImageIndex]}
              alt="Full Image"
              className="max-h-[90vh] max-w-full rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Right Arrow */}
            {product.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalImageIndex((prev) =>
                    prev === product.images.length - 1 ? 0 : prev + 1
                  );
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
              >
                <ChevronRight className="text-white w-6 h-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
              className="bg-white rounded-xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 relative">
                <button
                  onClick={() => setShowDetails(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                  {product.name}
                </h2>

                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Medicine Type:</strong> {product.type}
                  </p>
                  <p>
                    <strong>MRP:</strong> ₹ {product.mrp}
                  </p>
                  <p>
                    <strong>Composition:</strong> {product.composition}
                  </p>
                  <p>
                    <strong>Packaging:</strong> {product.packaging}
                  </p>
                  <p>
                    <strong>Division:</strong> {product.division}
                  </p>
                  <p>
                    <strong>Description:</strong>
                  </p>
                  <p className="text-gray-700 whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;
