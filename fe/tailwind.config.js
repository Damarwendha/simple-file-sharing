/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  "headwind.runOnSave": true,
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        sm: "578px",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        success: "var(--success)",
        link: "var(--link)",
        primary: {
          DEFAULT: "var(--primary)",
          20: "var(--primary-20)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
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
        "fall-in": {
          from: {
            opacity: "0%",
            top: "40%",
          },
          to: { opacity: "100%" },
        },
        "fall-out": {
          from: { opacity: "100%" },
          to: { opacity: "0%", top: "60%" },
        },
        "scale-in": {
          from: { scale: "96%" },
          to: { scale: "100%" },
        },
        "scale-out": {
          from: { scale: "100%" },
          to: { scale: "96%", opacity: "0%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fall-in": "fall-in 0.2s ease-out",
        "fall-out": "fall-out 0.2s ease-out",
        "scale-in": "scale-in 0.2s ",
        "scale-out": "scale-out 0.2s",
      },
    },
  },
  plugins: [],
};
