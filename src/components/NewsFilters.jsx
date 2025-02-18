import React from "react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const NewsFilters = ({ selectedYear, onYearChange, onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("")
  const currentYear = new Date().getFullYear()

  // Generate years from current year to 2022
  const years = Array.from({ length: currentYear - 2021 }, (_, i) => currentYear - i)

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleYearChange = (value) => {
    // Allow switching back to "Select-Year"
    if (value === "Choose Year") {
      onYearChange(null) // Pass null or undefined to reset selection
    } else {
      onYearChange(value)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary-500 p-6 rounded-lg shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-48">
          <label className="block text-sm font-medium text-white mb-2">Choose Year</label>
          <Select   value={selectedYear || "Choose Year"} onValueChange={handleYearChange}>
            <SelectTrigger className="bg-white border-none">
              <SelectValue placeholder="Choose Year" />
            </SelectTrigger>
            <SelectContent  className="bg-white cursor-pointer">
              <SelectItem  value="Choose Year">Choose Year</SelectItem>
              {years.map((year) => (
                <SelectItem   key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-grow">
          <label className="block text-sm font-medium text-white mb-2">Search</label>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search news..."
              className="bg-white border-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={handleSearch} variant="secondary" className="whitespace-nowrap bg-white">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NewsFilters
