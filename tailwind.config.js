/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif']
      },
      fontSize: {
        '16': '1rem',     // 16px => 1rem
        '18': '1.125rem', // 18px => 1.125rem
        '24': '1.5rem',   // 24px => 1.5rem
        '32': '2rem',     // 32px => 2rem
        '40': '2.5rem',   // 40px => 2.5rem
        '56': '3.5rem',   // 56px => 3.5rem
      },
      lineHeight: {
        '24': '1.5rem',   // 24px => 1.5rem
        '26': '1.625rem', // 26px => 1.625rem
        '27': '1.6875rem',// 27px => 1.6875rem
        '28': '1.75rem',  // 28px => 1.75rem
        '38': '2.375rem', // 38px => 2.375rem
        '48': '3rem',     // 48px => 3rem
        '67.2': '4.2rem', // 67.2px => 4.2rem
      },
      colors: {
        'blue-900': '#13183F',
        'blue-600': '#666CA3',
        'pink-600': '#F74780',
        'pink-300': '#FFA7C3',
        'grey': '#83869A',
      },

      spacing: {
        '-28': '-1.75rem',   // -28px => -1.75rem
        '100': '0.5rem',     // 8px => 0.5rem
        '150': '0.75rem',    // 12px => 0.75rem
        '200': '1rem',       // 16px => 1rem
        '250': '1.25rem',    // 20px => 1.25rem
        '300': '1.5rem',     // 24px => 1.5rem
        '400': '2rem',       // 32px => 2rem
        '500': '2.5rem',     // 40px => 2.5rem
        '550': '2.75rem',    // 44px => 2.75rem
        '600': '3rem',       // 48px => 3rem
        '700': '3.5rem',     // 56px => 3.5rem
        '800': '4rem',       // 64px => 4rem
        '1000': '5rem',      // 80px => 5rem
        '1600': '8rem',      // 128px => 8rem
        '1800': '9rem',      // 144px => 9rem
      },
      lineHeight: {
        '24': '1.5rem',    // 24px => 1.5rem
        '27': '1.6875rem', // 27px => 1.6875rem
        '28': '1.75rem',   // 28px => 1.75rem
        '28.8': '1.8rem',  // 28.8px => 1.8rem
        '38.4': '2.4rem',  // 38.4px => 2.4rem
        '48': '3rem',      // 48px => 3rem
        '67.2': '67px',      // 48px => 3rem
      },
      borderRadius: {
        '28': '1.75rem',   // 28px => 1.75rem
        '15': '0.9375rem', // 15px => 0.9375rem
      },
      boxShadow: {
        card: '0px 25px 50px 0px rgba(6, 22, 141, 0.04)',
      },
      zIndex: {
        '-1': '-1',
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
