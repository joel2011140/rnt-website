/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      screens: {
        sm: '640px', // Mobile/tablet
        md: '768px', // Tablet
        lg: '1024px', // Desktop
        xl: '1280px', // Large screens
        '2xl': '1536px', // Extra large screens
      },
      colors: {
        'aqua-rnt': {
          light: '#E0F2FE', // Aqua RNT -
          DEFAULT: '#38BDF8', // Aqua RNT
          dark: '#0EA5E9', // Aqua RNT +
          darker: '#0369A1', // Aqua RNT ++
        },
        douala: {
          light: '#FEF3C7', // Douala -
          DEFAULT: '#FBBF24', // Douala
          dark: '#D97706', // Douala +
          darker: '#B45309', // Douala ++
          darkest: '#92400E', // Douala +++
        },
        'aqua-secondary': {
          light: '#BFDBFE', // Aqua RNT secondary -
          DEFAULT: '#3B82F6', // Aqua RNT secondary
          dark: '#1D4ED8', // Aqua RNT secondary +
          darker: '#1E40AF', // Aqua RNT secondary ++
        },
        chumbo: {
          light: '#F3F4F6', // Chumbo -
          DEFAULT: '#9CA3AF', // Chumbo
          dark: '#6B7280', // Chumbo +
          darker: '#4B5563', // Chumbo ++
          darkest: '#374151', // Chumbo +++
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        // Headings (responsive based on image)
        'heading-44': ['2.75rem', { lineHeight: '3.25rem' }], // ~44px for 2xl
        'heading-36': ['2.25rem', { lineHeight: '2.75rem' }], // ~36px for lg-xl
        'heading-28': ['1.75rem', { lineHeight: '2.25rem' }], // ~28px for md
        'heading-24': ['1.5rem', { lineHeight: '2rem' }], // ~24px for sm-md
        'heading-20': ['1.25rem', { lineHeight: '1.75rem' }], // ~20px
        'heading-16': ['1rem', { lineHeight: '1.5rem' }], // ~16px
        'heading-14': ['0.875rem', { lineHeight: '1.25rem' }], // ~14px
        // Body text
        'body-20': ['1.25rem', { lineHeight: '1.75rem' }],
        'body-16': ['1rem', { lineHeight: '1.5rem' }],
        'body-14': ['0.875rem', { lineHeight: '1.25rem' }],
        'body-12': ['0.75rem', { lineHeight: '1rem' }],
      },
      // Extend with utility classes for actions (buttons, links)
      extend: {
        text: {
          'heading-44': 'font-montserrat font-bold text-heading-44 md:text-heading-36 2xl:text-heading-44',
          'heading-36': 'font-montserrat font-bold text-heading-36 md:text-heading-28 2xl:text-heading-36',
          'heading-28': 'font-montserrat font-bold text-heading-28 md:text-heading-24 2xl:text-heading-28',
          'heading-24': 'font-montserrat font-semibold text-heading-24 md:text-heading-20 2xl:text-heading-24',
          'heading-20': 'font-montserrat font-semibold text-heading-20 md:text-heading-16 2xl:text-heading-20',
          'heading-16': 'font-montserrat font-medium text-heading-16 md:text-heading-14 2xl:text-heading-16',
          'heading-14': 'font-montserrat font-medium text-heading-14 md:text-heading-14 2xl:text-heading-16',
          'body-20': 'font-montserrat text-body-20 md:text-body-20 2xl:text-body-24',
          'body-16': 'font-montserrat text-body-16 md:text-body-16 2xl:text-body-20',
          'body-14': 'font-montserrat text-body-14 md:text-body-14 2xl:text-body-16',
          'body-12': 'font-montserrat text-body-12 md:text-body-12 2xl:text-body-14',
        },
        backgroundColor: {
          'button-lg': 'bg-aqua-rnt',
          'button-md': 'bg-aqua-rnt',
          'button-sm': 'bg-aqua-rnt',
        },
        padding: {
          'button-lg': 'px-6 py-3',
          'button-md': 'px-4 py-2',
          'button-sm': 'px-3 py-1',
        },
        rounded: {
          'button-lg': 'rounded-lg',
          'button-md': 'rounded-md',
          'button-sm': 'rounded-sm',
        },
        textColor: {
          'button-lg': 'text-body-16 font-bold text-white',
          'button-md': 'text-body-14 font-medium text-white',
          'button-sm': 'text-body-12 font-medium text-white',
        },
        hover: {
          'button-lg': 'hover:bg-aqua-rnt-dark',
          'button-md': 'hover:bg-aqua-rnt-dark',
          'button-sm': 'hover:bg-aqua-rnt-dark',
        },
        underline: {
          'link-lg': 'underline',
          'link-lg-bold': 'underline font-bold',
        },
        textColor: {
          'link-lg': 'text-aqua-rnt hover:text-aqua-rnt-dark',
          'link-lg-bold': 'text-aqua-rnt hover:text-aqua-rnt-dark',
        },
      },
    },
  },
  plugins: [],
};