import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

const ProductFilters = ({
  divisions,
  selectedDivision,
  onDivisionChange,
  medicineTypes,
  selectedType,
  onTypeChange,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
    >
      <div className="flex flex-col gap-8">
        {/* Division Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Division</h3>
          <div className="flex flex-wrap gap-2">
            {divisions.map((division) => (
              <button
                key={division}
                onClick={() => onDivisionChange(division)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedDivision === division
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {division}
              </button>
            ))}
          </div>
        </div>

        {/* Medicine Type Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Medicine Type</h3>
          <div className="flex flex-wrap gap-2">
            {medicineTypes.map((type) => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedType === type
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Search Products</h3>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search by name or composition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductFilters
