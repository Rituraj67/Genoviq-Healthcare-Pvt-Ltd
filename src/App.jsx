import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import "./App.css"
import Newsroom from "./pages/Newsroom"
import LightningLoader from "./utils/loaders/LightningLoader"
import { useAppData } from "./context/AppDataContext"
import ScrollToTop from "./components/ScrollToTop"



function App() {
  const {isLoading}= useAppData()

  
  return (
    <Router>
    <ScrollToTop/>
    <LightningLoader isLoading={isLoading}/>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsroom" element={<Newsroom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

