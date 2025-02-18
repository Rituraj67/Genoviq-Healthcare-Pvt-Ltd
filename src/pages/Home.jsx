import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesSection from "../components/ServicesSections";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { Helmet } from "react-helmet-async";
import banner from "../assets/HomeBG1.webp"
import NewsSection from "../components/NewsSection";
const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SliderContent = ({ heading, description }) => (
  <motion.div
    className="text-center px-4 py-12 md:py-24"
    initial="hidden"
    animate="visible"
    variants={slideVariants}
  >
    <h2 className="text-3xl md:text-4xl font-rubik font-semibold mb-4 text-primary-900">
      {heading}
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
  </motion.div>
);

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slides = [
    {
      heading: " Delivering Quality Medicines with Trust",
      description:
        "We don’t just market medicines; we build trust between manufacturers, healthcare providers, and patients.",
    },
    {
      heading:
        "Empowering Healthcare Through Effective Pharmaceutical Distribution",
      description:
        "Bringing life-saving medications closer to those in need through ethical and effective marketing.",
    },
    {
      heading: "Expanding the Reach of Medicines, Enhancing Lives Everywhere",
      description:
        "When it comes to pharmaceutical marketing, trust, quality, and commitment are at the heart of what we do.",
    },
    {
      heading: "Where Trust Meets Innovation in Pharmaceutical Marketing",
      description:
        "Making healthcare accessible by ensuring the right medicines reach the right people, at the right time.",
    },
    {
      heading:
        "Connecting Healthcare Providers with the Best Pharmaceutical Solutions",
      description:
        "We connect innovation with demand, ensuring that healthcare providers always have access to the best solutions.",
    },
  ];

  const statistics = [
    { number: 5000, label: "Employees" },
    { number: 500, label: "Products" },
    { number: 50, label: "States" },
  ];

  return (
    <>
      <Helmet>
        <title>Genoviq Group of Companies</title>
      </Helmet>

      <div className="relative ">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
        <div
          className="absolute top-20 inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${banner}')`,
            
          }}
        />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-50 to-primary-50 opacity-50" />
          <div className="container relative pt-24 pb-24 md:pt-32 md:pb-40">
            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-gradient ">Trusted Pharmaceuticals</span>
                <br />
                for a Healthier Tomorrow.
              </h1>
              <p className="text-lg font-serif md:text-xl text-gray-700 max-w-2xl">
                Delivering breakthrough medicines and transforming millions of
                lives through cutting-edge pharmaceutical research and
                development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/products" className="btn-primary">
                  Discover Our Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-secondary-50 border-y border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary-900">
              Genoviq in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
              {statistics.map((stat, index) => (
                <CountUp
                  key={index}
                  end={stat.number}
                  label={stat.label}
                  duration={2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Slider Content Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto">
            <Slider {...sliderSettings}>
              {slides.map((slide, index) => (
                <SliderContent
                  key={index}
                  heading={slide.heading}
                  description={slide.description}
                />
              ))}
            </Slider>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* About Section*/}
        <AboutSection />

         {/* News Section */}
      <NewsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </div>
    </>
  );
}

export default Home;
