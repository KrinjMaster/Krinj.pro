/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      violet: '#865DFF',
      white: '#FFFFFF',
    },
    extend: {
      keyframes: {
        pulse: {
          '0%': { opacity: 0},
          '25%': { opacity: 1},
          '50%': { opacity: 0},
          '75%': { opacity: 1},
          '100%': { opacity: 0},
        }
      },
      animation: {
        pulse: 'pulse 1s ease-in-out',
        pulse2: 'pulse 1.25s ease-in-out',
        pulse3: 'pulse 1.50s ease-in-out',
        pulse4: 'pulse 1.75s ease-in-out',
        pulse5: 'pulse 2s ease-in-out',
      }
    },
  },
  plugins: [],
}

