import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rye: {
          DEFAULT: "#2B2521", // Rye Husk (Primary Dark)
          dark: "#1B1714",
          light: "#3E3631",
          muted: "#5A4F48",
        },
        hearth: {
          DEFAULT: "#F7F4EE", // Stone Hearth (Neutral Light)
          soft: "#FAF8F5",
          paper: "#F2EFE8",
        },
        bramble: {
          DEFAULT: "#7A283C", // Wild Bramble (Accent Vibrant)
          hover: "#641F30",
          light: "#9A384F",
          subtle: "#F5E9EC",
        },
        crust: {
          DEFAULT: "#C88A42", // Toasted Crust (Accent Warm)
          hover: "#B37834",
          light: "#DF9F53",
          subtle: "#FBF3E8",
        },
        oatmeal: {
          DEFAULT: "#EAE4D9", // Oatmeal (Muted Surface)
          light: "#F2EDE4",
          dark: "#DDD5C7",
        },
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "Cambria", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
