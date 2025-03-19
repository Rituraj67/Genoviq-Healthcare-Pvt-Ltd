import "./LightningLoader.css";
import { useEffect, useState } from "react";

export default function LightningLoader({ isLoading, size = "xl" }) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const [showLoader, setShowLoader] = useState(isLoading);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setExit(true);
      const timer = setTimeout(() => {
        setShowLoader(false);
        setExit(false);
      }, 800); // Match with exit animation duration

      return () => clearTimeout(timer);
    } else {
      setShowLoader(true);
    }
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <div className={`lightning-overlay ${exit ? "loader-exit" : ""}`}>
      <div className={`lightning-loader-container animate-multicolor`}>
        <div className={`lightning-circle ${exit ? "circle-exit" : ""}`}></div>

        <div className={`lightning-bolt ${exit ? "bolt-exit" : ""}`}>
          <svg
            className="lightning-svg"
            viewBox="0 0 64 64"
            
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 2 L14 34 H28 L22 62 L50 26 H34 L42 2 Z"
              fill="currentColor"
              stroke="silver"
              strokeWidth="0.7"
              strokeLinejoin="round"
            />
          </svg>

          <div className="lightning-glow"></div>
        </div>

        <div className={`lightning-particles ${exit ? "particle-exit" : ""}`}>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
    </div>
  );
}
