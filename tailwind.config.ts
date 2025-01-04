import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#948bff',
        secondary: '#04bf7b',
        accent: '#feffbe',
        background: '#Afe9ff',
      },
      fontFamily: {
        'sedan': ['Sedan SC', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-out-rotate': 'fade-out-rotate 6s forwards',
        'samurai-1': 'samurai-1 6s forwards',
        'samurai-2': 'samurai-2 6s forwards',
        'samurai-3': 'samurai-3 6s forwards',
      },
      borderWidth: {
        DEFAULT: '0',
      },
      borderColor: {
        DEFAULT: 'transparent',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
    base: false,
    styled: true,
  }
}

export default config