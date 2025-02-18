import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [ "./index.html","./src/**/*.{js,jsx,ts,tsx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '520px',  // Extra Small Screens
        'sm': '640px',  // Small (Default Tailwind)
        'md': '768px',  // Medium (Default Tailwind)
        'lg': '1024px', // Large (Default Tailwind)
        'xl': '1280px', // Extra Large (Default Tailwind)
        '2xl': '1536px', // Default Tailwind
        'custom': '1100px', // Custom Breakpoint
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],

      },
      colors: {
        primary: {
          50: "#FFF5F6",
          100: "#FFE1E5",
          200: "#FFB3BC",
          300: "#FF8594",
          400: "#FF566B",
          500: "#E31837", // Logo red
          600: "#CC1431",
          700: "#B31029",
          800: "#990D23",
          900: "#800A1D",
        },
        secondary: {
          50: "#F0F6FF",
          100: "#E5F0FF",
          200: "#B3D1FF",
          300: "#80B3FF",
          400: "#4D94FF",
          500: "#004AAD", // Logo blue
          600: "#004299",
          700: "#003A85",
          800: "#003270",
          900: "#002A5C",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
