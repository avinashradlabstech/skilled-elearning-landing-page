/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif']
      },
      fontSize: {
        '16': '16px',
        '18': "18px",
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '56': '56px'
      },
      lineHeight: {
        '24': '1.5rem',
        '26': '1.625rem',
        '27': '1.6875rem',
        '28': '1.8rem',
        '38': '2.4rem',
        '48': '3rem',
        '67.2': '4.2rem',
      },
      colors: {
        'blue-900': '#13183F',
        'blue-600': '#666CA3',
        'pink-600': '#F74780',
        'pink-300': '#FFA7C3',
        'grey': '#83869A',        
      },

      spacing: {
        '-28': '-28px',
        '100': '8px',
        '150': '12px',
        '200': '16px',
        '250': '20px',
        '300': '24px',
        '400': '32px',
        '500': '40px',
        '550': '44px',
        '600': '48px',
        '700': '56px',
        '800': '64px',
        '1000': '80px',
        '1600': '128px',
        '1800': '144px',
      },
      lineHeight: {
        '120': '48px',
        '150': '27px',
      },
      borderRadius: {
        '28': '1.75rem',
        '15': '0.9375rem',
      },
      boxShadow: {
        card: '0px 25px 50px 0px rgba(6, 22, 141, 0.04)',
      },
      backgroundImage: {
        'gradient-white': 'linear-gradient(180deg, #FFF 0%, #F0F1FF 100%)',
        'gradient-pink': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)',
        'gradient-pink-hover': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)',
        'gradient-orange': 'linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)',
        'gradient-orange-hover': 'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)',
        'gradient-purple': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)',
        'gradient-purple-hover': 'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)',
      },
      screens: {
        sm: '490px',
        md: '744px',
        '2md': '1024px',
        lg: '1280px',
        xl: '1920px',
      },
    },
  },
  plugins: [],
}

