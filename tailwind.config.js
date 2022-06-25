module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Microsoft JhengHei', 'sans-serif']
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        primary: '#004ea6'
      }
    }
  },
  plugins: []
}
