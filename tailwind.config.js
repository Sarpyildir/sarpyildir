/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          base: '#080808',
          surface: '#0F0F0F',
          card: '#161616',
          elevated: '#1E1E1E',
        },
        border: {
          subtle: '#1A1A1A',
          DEFAULT: '#252525',
          strong: '#333333',
        },
        ink: {
          primary: '#F0F0F0',
          secondary: '#8A8A8A',
          tertiary: '#4A4A4A',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          muted: 'rgba(59,130,246,0.12)',
          glow: 'rgba(59,130,246,0.25)',
        },
        emerald: {
          DEFAULT: '#10B981',
          muted: 'rgba(16,185,129,0.12)',
        },
      },
      backgroundImage: {
        'dot-grid': "radial-gradient(circle, #252525 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
