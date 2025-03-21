import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
const AppDataContext = createContext();

// Provider component
export const AppDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [news, setNews] = useState([]);
  const [awards, setAwards] = useState([]);
  const [jobs, setjobs] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      try {
        const [
          productsRes,
          testimonialsRes,
          directorsRes,
          milestonesRes,
          newsRes,
          awardsRes,
          jobsRes
        ] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BASE_ADDRESS}/products/`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BASE_ADDRESS}/testimonial/`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BASE_ADDRESS}/director/`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BASE_ADDRESS}/milestone/`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BASE_ADDRESS}/news/`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BASE_ADDRESS}/award/`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BASE_ADDRESS}/jobs/`, {
            withCredentials: true,
          }),
        ]);



        setProducts(productsRes.data);
        setTestimonials(testimonialsRes.data);
        setDirectors(directorsRes.data);
        setMilestones(milestonesRes.data);
        setNews(newsRes.data);
        setAwards(awardsRes.data);
        setjobs(jobsRes.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        products,
        testimonials,
        directors,
        milestones,
        news,
        awards,
        jobs,
        isLoading,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

// Custom hook to use the context easily
export const useAppData = () => useContext(AppDataContext);
