import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const MyTheme = {
  colors: {
    pictonBlue: {
      DEFAULT: '#2e9b6c',
      '50': '#effaf4',
      '100': '#d8f3e2',
      '200': '#b5e5ca',
      '300': '#84d1ab',
      '400': '#52b788',
      '500': '#2e9b6c',
      '600': '#1f7c56',
      '700': '#196347',
      '800': '#164f39',
      '900': '#134130',
      '950': '#0a241b',
    },
    gray: {
      DEFAULT: '#666666',
      '50': '#f6f6f6',
      '100': '#e7e7e7',
      '200': '#d1d1d1',
      '300': '#b0b0b0',
      '400': '#888888',
      '500': '#666666',
      '600': '#5d5d5d',
      '700': '#4f4f4f',
      '800': '#454545',
      '900': '#3d3d3d',
      '950': '#262626',
    },
  },
}

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        primary: MyTheme.colors.pictonBlue,
        dark: MyTheme.colors.gray,
        background: '#ffffff',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      borderRadius: {
        30: '1.875rem',
        40: '2.5rem',
      },
      boxShadow: {
        container: '0px 0px 40px -10px rgba(0,0,0,.2)',
        header: '0px 0px 10px 0px rgba(0,0,0,.08)',
        menu: '0px 0px 70px 0px rgba(0,0,0,.08)',
        button: '0px 10px 10px -8px rgba(0,0,0,.22)',
        avatar: '0px 0px 25px 0px rgba(0, 0, 0, 0.1)',
        card: '0 12px 17px rgba(0,0,0,.12)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      keyframes: {
        flipInLeft: {
          from: {
            transform: 'translateZ(-1000px) rotateY(-90deg)',
            opacity: '0.2',
          },
        },
      },
      animation: {
        flipInLeft: 'flipInLeft .5s both ease-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
