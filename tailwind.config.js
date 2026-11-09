/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03040a',
          900: '#05060f',
          850: '#070919',
          800: '#0c102b',
          750: '#11173d',
          700: '#1a2254',
          card: 'rgba(9, 13, 34, 0.72)',
          'card-hover': 'rgba(15, 22, 54, 0.88)',
          subtle: 'rgba(255, 255, 255, 0.04)',
        },
        neon: {
          cyan: '#22d3ee',
          cyanGlow: '#06b6d4',
          purple: '#a855f7',
          magenta: '#d946ef',
          pink: '#ec4899',
          blue: '#3b82f6',
          green: '#10b981',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.45)',
        'neon-cyan-lg': '0 0 35px rgba(34, 211, 238, 0.65)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.45)',
        'neon-purple-lg': '0 0 35px rgba(168, 85, 247, 0.65)',
        'neon-magenta': '0 0 20px rgba(217, 70, 239, 0.45)',
        'cyber-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(34, 211, 238, 0.25)',
        'cyber-card-hover': '0 20px 40px -15px rgba(34, 211, 238, 0.2), 0 0 2px 2px rgba(34, 211, 238, 0.5)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(217, 70, 239, 0.15) 100%)',
        'neon-radial': 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.15), transparent 70%)',
        'purple-radial': 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 22px rgba(168, 85, 247, 0.7))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

