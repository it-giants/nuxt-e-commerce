import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.green
      },

      screens: {
        'sm-max': { 'max': '756px' },
        'md-max': { 'max': '991px' },
        'lg-max': { 'max': '1399px' },
      }
    }
  }
}