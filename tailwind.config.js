/* @type {import('tailwindcss').Config} */
/*

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)


*/
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{jsx,js}",
  ],
  theme: {

    extend:{
      colors:{
        "primary":"red",
        'light-gray':"hsl(0, 0%, 98%)",
        'light-gray-blue':"hsl(236, 33%, 92%)",
        'dark-gray-blue':"hsl(236, 9%, 61%)",
        'dark-gray-blue-darker':"hsl(236, 9%, 61%)",
        'darkest-blue':"hsl(235, 21%, 11%)",
        'darkest-blue-desaturated':"hsl(235, 24%, 19%)"
      },
      backgroundImage:{
        "mobile-bg-light":"url('./Components/Layout/Assets/bg-mobile-light.jpg')",
        "mobile-bg-dark":"url('./Components/Layout/Assets/bg-mobile-dark.jpg')",
        "desktop-bg-light":"url('./Components/Layout/Assets/bg-desktop-light.jpg')",
        "desktop-bg-dark":"url('./Components/Layout/Assets/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
}
