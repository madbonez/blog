import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'color-blue': '#3294f8',
      'color-title': '#e7edf4',
      'color-subtitle': '#c4d4e3',
      'color-text': '#afc2d4',
      'color-span': '#7b96b2',
      'color-label': '#3a536b',
      'color-border': '#1c2f41',
      'color-post': '#112131',
      'color-profile': '#0b1b2b',
      'color-background': '#071422',
      'color-input': '#040f1a',
    }
  },
  plugins: [],
}
export default config
