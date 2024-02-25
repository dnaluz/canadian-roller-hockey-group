import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      padding: {
        hero: '46.5%',
      },
      height: {
        hamburger: '3px',
      },
      zIndex: {
        '200': '200',
      },
      fontSize: {
        title: '4rem',
      },
      spacing: {
        '-9': '-9px',
        full: '100%',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      transitionDelay: {
        900: '900ms',
        1100: '1100ms',
        1300: '1300ms',
        1500: '1500ms',
        1700: '1700ms',
      },
    },
  },
  plugins: [],
}
export default config
