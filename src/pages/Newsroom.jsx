"use client"

import { useState } from "react"
import NewsHero from "../components/NewsHero"
import NewsFilters from "../components/NewsFilters.jsx"

import NewsCardNR from "../components/NewsCardNR"

const newsData = [
  {
    id: 1,
    title: "Most Preferred Workplace 2022-23 Health & Wellness",
    date: "23 December, 2022",
    description:
      "Genoviq Healthcare has been recognized as one of the 'Most Preferred Workplace 2022-23 Health & Wellness' organized by Team Marksmen in association with India Today.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/news/preferred-workplace-2022",
    year: "2022",
  },
  {
    id: 2,
    title: "Emcurean September, 2022",
    date: "20 September, 2022",
    description:
      "The cover story features a conversation with our MD where he shares company's journey and the way forward.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/news/emcurean-september-2022",
    year: "2022",
  },
  // Add more news items...
]

const Newsroom = () => {
    const currentYear = new Date().getFullYear();
    console.log(currentYear); // Outputs the current year, e.g., 2025
    
  const [selectedYear, setSelectedYear] = useState("Choose Year")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredNews = newsData.filter((news) => {
    const matchesYear = news.year === selectedYear
    const matchesSearch =
      searchQuery === "" ||
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesYear && matchesSearch
  })

  return (
    <div className="min-h-screen top-20 relative bg-gray-50">
      {/* Hero Section */}
      <NewsHero />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-12">
          <NewsFilters selectedYear={selectedYear} onYearChange={setSelectedYear} onSearch={setSearchQuery} />
        </div>

        {/* News Cards */}
        <div className="space-y-8">
          {filteredNews.map((news) => (
            <NewsCardNR key={news.id} {...news} />
          ))}

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No news found for the selected criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Newsroom

