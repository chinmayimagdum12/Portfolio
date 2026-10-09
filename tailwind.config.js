/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0a0f',
          dark: '#0d0d15',
          card: '#12121c',
          border: '#1a1a2e',
          cyan: '#00ffd5',
          green: '#39ff14',
          purple: '#b537f2',
          blue: '#3b82f6',
          text: '#e0e0e0',
          muted: '#8892b0',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
