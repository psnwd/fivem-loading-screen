import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(158.02% 50% at 50% 50%, rgba(29, 32, 44, 0) 0%, rgba(14, 16, 21, 0.96) 100%)",
        "custom-button-radial":
          "radial-gradient(234.78% 142.5% at 50% -5%, #00f8b9 0%, rgba(0, 248, 185, 0) 100%)",
      },
      dropShadow: {
        custom: "0px 0px calc(0.092592592vh * 3) #00f8b9",
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primaryForeground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondaryForeground)",
        },
        destructive: {
          DEFAULT: "var(--destructive))",
          foreground: "var(--destructiveForeground)",
        },
        muted: {
          DEFAULT: "var(--muted))",
          foreground: "var(--mutedForeground)",
        },
        accent: {
          DEFAULT: "var(--accent))",
          foreground: "var(--accentForeground)",
        },
        popover: {
          DEFAULT: "var(--popover))",
          foreground: "var(--popoverForeground)",
        },
        card: {
          DEFAULT: "var(--card))",
          foreground: "var(--cardForeground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
