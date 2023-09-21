import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          900: '#104677',
          800: '#13518b',
          700: '#1868b3',
          DEFAULT: '#1b74c7',
          500: '#3282cd',
          400: '#4990d2',
          300: '#5f9ed8',
          200: '#a4c7e9',
          100: '#d1e3f4',
          50: '#e8f1f9',
        },

        text: '#373737',
        black: {
          100: '#000000',
          80: '#000000CC',
          60: '#00000099',
          40: '#00000066',
          30: '#0000004D',
          20: '#00000033',
          10: '#0000001A',
          8: '#00000014',
          4: '#0000000A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          80: '#FFFFFFCC',
          60: '#FFFFFF99',
          40: '#FFFFFF66',
          20: '#FFFFFF33',
          10: '#FFFFFF1A',
          8: '#FFFFFF14',
          4: '#FFFFFF0A',
        },

        success: {
          light: '#E3F5E9',
          base: '#31BF60',
          dark: '#103D1F',
        },
        error: {
          light: '#FFD4D4',
          base: '#F81E1E',
          dark: '#570A0A',
        },
        info: {
          light: '#E5F8FC',
          base: '#25C7E5',
          dark: '#0A353D',
        },
        warning: {
          light: '#FDF6E4',
          base: '#F6C74E',
          dark: '#3D3213',
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
