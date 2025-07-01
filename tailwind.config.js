module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: { extend: {
    colors: {
      lightHover: '#f4e1fc',
      darkHover: '#2a004a',
      darkTheme: '#11001F',
    },
    fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
    },
    boxShadow: {
      'black' : '4px 4px 0 #000',
      'white' : '4px 4px 0 #fff',
    },
    gridTemplateColumns: {
      'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
    }
  },
 },
  plugins: [],
}