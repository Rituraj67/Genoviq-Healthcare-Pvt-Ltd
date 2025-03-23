import { useEffect, useState } from "react";
import NewsHero from "../components/NewsHero";
import NewsFilters from "../components/NewsFilters.jsx";

import NewsCardNR from "../components/NewsCardNR";
import { useAppData } from "../context/AppDataContext.jsx";
import { Helmet } from "react-helmet-async";

const Newsroom = () => {
  const { news } = useAppData();

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = news.filter((item) => {
    const newsYear = new Date(item.date).getFullYear().toString(); // extract year from date
    const matchesYear = newsYear === selectedYear;

    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesYear && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Newsroom</title>
      </Helmet>
      <div className="min-h-screen top-24  relative bg-gray-50">
        {/* Hero Section */}
        <NewsHero />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Filters */}
          <div className="mb-12">
            <NewsFilters
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
              onSearch={setSearchQuery}
            />
          </div>

          {/* News Cards */}
          <div className="space-y-8">
            {filteredNews.map((item, index) => (
              <NewsCardNR
                key={index}
                cardIndex={index}
                title={item.title}
                date={item.date}
                description={item.description}
                image={item.image}
              />
            ))}

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  🔍 No news articles match your current filters.
                  <br />
                  Please adjust your search or date selection and try again.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsroom;
