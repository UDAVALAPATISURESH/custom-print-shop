// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          card: "hsl(var(--card))",
          "card-foreground": "hsl(var(--card-foreground))",
          popover: "hsl(var(--popover))",
          "popover-foreground": "hsl(var(--popover-foreground))",
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            DEFAULT: "hsl(var(--primary))", // Optional: dynamic color
          },
          "primary-foreground": "hsl(var(--primary-foreground))",
          secondary: "hsl(var(--secondary))",
          "secondary-foreground": "hsl(var(--secondary-foreground))",
          muted: "hsl(var(--muted))",
          "muted-foreground": "hsl(var(--muted-foreground))",
          accent: "hsl(var(--accent))",
          "accent-foreground": "hsl(var(--accent-foreground))",
          destructive: "hsl(var(--destructive))",
          "destructive-foreground": "hsl(var(--destructive-foreground))",
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
        },
        borderRadius: {
          lg: "var(--radius)",
        },
      },
    },
    plugins: [],
  }
  