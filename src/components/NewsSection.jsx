"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NewsCarousel from "./NewsCarousel";
import { useAppData } from "../context/AppDataContext";

const NewsSection = () => {
  const { news } = useAppData();

  const getLatestFiveNews = news
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-500 text-sm font-semibold tracking-wider uppercase"
            >
              Media Corner
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mt-2"
            >
              Latest News & Updates
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <Link
              to="/newsroom"
              className="inline-flex items-center px-6 py-2 border-2 border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-colors duration-200"
            >
              View All
            </Link>
          </motion.div>
        </div>

        <NewsCarousel news={getLatestFiveNews} />
      </div>
    </section>
  );
};

export default NewsSection;
