module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], 
      },
      colors: {
        primary:{
          25:'#F8F8F8',
          50:'#D5D5D5',
          100:'#9D9D9D',
          150:'#666666',
          200:'#333333',
          300: '#151515',
          bg:'#090909'
          
        },
        
      },
      backgroundImage: {
        'portalized': "url('/public/assets/hero.svg')",
        'portalizedcta': "url('/public/assets/img.svg')",
        'dotmap': "url('/public/assets/mappattren.svg')",
        'download': "url('/public/assets/downloadframe.png')",
      },
      maxWidth: {
        '8xl': '90rem', 
        '9xl': '96rem', 
        '10xl': '104rem', 
        'custom': '120rem', 
      },
    },
  },
  plugins: [],
}

