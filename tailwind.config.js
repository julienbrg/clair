const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'b': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
      },
      colors: {
        raven: {
          100: 'rgba(0, 0, 0, 0.10)',
          300: 'rgba(0, 0, 0, 0.30)',
          500: 'rgba(0, 0, 0, 0.50)',
          700: 'rgba(0, 0, 0, 0.70)',
          800: 'rgba(0, 0, 0, 0.80)',
          840: 'rgba(0, 0, 0, 0.84)',
          900: 'rgba(0, 0, 0, 0.90)',
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
