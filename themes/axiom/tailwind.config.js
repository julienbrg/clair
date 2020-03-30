const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'b': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
      },
      colors: {
        // HSL to RGB HEX
        // H-0, S-0, L-n
        raven: {
          100: '#e6e6e6', // L-90
          200: '#cccccc', // L-80
          300: '#b3b3b3', // L-70
          400: '#999999', // L-60
          500: '#808080', // L-50
          600: '#666666', // L-40
          700: '#4d4d4d', // L-30
          800: '#333333', // L-20
          900: '#1a1a1a', // L-10
          '900a': 'rgba(0, 0, 0, 0.84)', // L-10
        },
      },
      fontFamily: {
        'content-serif': ['font-content-serif', ...defaultTheme.fontFamily.serif],
        'content-sans': ['font-content-sans', ...defaultTheme.fontFamily.sans],
        'content-title': ['font-content-title', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        smp: '0.9375rem',
        '2xlp': '1.625rem',
        '4xlp': '2.5rem',
      },
      letterSpacing: {
        'default': 'normal',
        'tightly': '-0.015em',
      },
      lineHeight: {
        'tightly': '1.15',
      },
      maxWidth: {
        '2xlp': '42.5rem',
      },
      spacing: {
        '05': '0.1875rem',
        '9': '2.25rem',
        '14': '3.5rem',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first'],
    padding: ['responsive', 'first'],
  },
  plugins: []
}
