import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import formsPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
      },
    },
  },
  plugins: [formsPlugin],
} satisfies Config;
