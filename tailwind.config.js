/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#13161B',
        lightBlack: '#1A1D22',
        lightGreen: '#77FE85',
        sidebarText: '#6C7175',
        searchbarBorder: '#2f2f31',
        marketColor: '#14161B',
        marketBoxColor: '#222B32',
        marketInfoText: '#9FA8AF',
        marketInfoDetail: '#7a8291',
        marketInfoBorder: '#2a333a',
        green: '#359b74',
        red: '#a42c39',
        darkWhite: '#dedede',
        darkWhiteBox: '#c5c5c5',
        darkSearchbarBorder: '#97979b',
      }
    },
  },
  plugins: [],
}
