import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.green
      },

      screens: {
        'lg-max': { 'max': '1399px' },
        'md-max': { 'max': '991px' },
        'sm-max': { 'max': '756px' },
      }
    }
  }
}