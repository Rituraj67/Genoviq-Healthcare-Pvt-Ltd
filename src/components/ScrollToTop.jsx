import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

const ScrollToTop = () => {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === "POP") {
      // On back/forward navigation — do nothing (let browser restore scroll)
    } else {
      // On direct navigation or link clicks — scroll to top
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

 export default ScrollToTop