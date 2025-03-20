"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductsHero from "../components/ProductsHero"
import ProductCard from "../components/ProductCard"
import ProductFilters from "../components/ProductFilters"
import { useAppData } from "../context/AppDataContext"



const divisions = [
  "All",
  "Pain Management",
  "Antibiotics",
  "Nutritional Supplements",
  "Allergy Care",
  "Gastroenterology",
  "Diabetes Care",
  "Cardiovascular",
  "Respiratory",
  "Oncology",
  "Neurology",
  "Dermatology",
  "Psychiatry",
  "Infectious Diseases",
]

const medicineTypes = [
  "All",
  "Tablet",
  "Capsule",
  "Syrup",
  "Suspension",
  "Ointment",
  "Cream",
  "Lotion",
  "Inhaler",
  "Injectable",
  "Suppository",
  "Patch",
  "Drop",
  "Gel",
  "Mouthwash", // ✅ Added
];


const Products = () => {
  const [selectedDivision, setSelectedDivision] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const {products}= useAppData()

  const filteredProducts = products.filter((product) => {
    const matchesDivision = selectedDivision === "All" || product.division === selectedDivision
    const matchesType = selectedType === "All" || product.type === selectedType
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesDivision && matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductsHero />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <ProductFilters
            divisions={divisions}
            selectedDivision={selectedDivision}
            onDivisionChange={setSelectedDivision}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            medicineTypes={medicineTypes}
            onSearch={setSearchQuery}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No products found for the selected criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Products
