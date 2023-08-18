/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      violet: '#865DFF',
      light_violet: '#bf8bff',
      light_purple: '#e5d0ff',
      white: '#FFFFFF',
      transparent: 'transparent',
      black: '#000000',
      card_border: '#404040',
      card_bg: '#202020',
      background: '#131216',
      sidebar: '#bf8bff',
      gray: '#606060'
    },
    extend: {
      keyframes: {
        pulse: {
          '0%': { opacity: 0},
          '25%': { opacity: 1},
          '50%': { opacity: 0},
          '75%': { opacity: 1},
          '100%': { opacity: 0},
        },
        moving_text: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moving_text2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        pulse: 'pulse 1s ease-in-out',
        pulse2: 'pulse 1.25s ease-in-out',
        pulse3: 'pulse 1.50s ease-in-out',
        pulse4: 'pulse 1.75s ease-in-out',
        pulse5: 'pulse 2s ease-in-out',
        moving_text: 'moving_text 25s linear infinite',
        moving_text2: 'moving_text2 25s linear infinite'
      }
    },
  },
  plugins: [],
}

