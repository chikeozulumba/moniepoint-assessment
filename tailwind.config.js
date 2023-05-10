/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-grey": "rgba(17, 17, 17, 0.1)",
        "custom-grey-2": "rgb(243, 243, 242)",
        "custom-grey-3": "rgb(113, 113, 113)",
        "custom-grey-4": "rgba(17, 17, 17, 0.2)",
        "custom-red": "rgb(255, 56, 92)",
        "custom-red-2": "rgb(212, 59, 81)",
        "custom-text": "rgb(17, 17, 17)",
        "custom-text-black": "#111111",
        "custom-text-grey": "#717171",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
