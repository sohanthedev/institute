/** @type {import('tailwindcss').Config} */
export default {
 
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    
    extend: {
      colors: {
        primary: '#bfe5ff',
        secondary: '#d9ecfa',
        textColor:'#111827',
        darkModeTextColor:'#f8fafc',
        buttonColor:'#1c3d5a',
        backgroundColor:'#f1f5f9',
        darkModeBackgroundColor:'#18181b',
        hover:'#d2c1f5',
        darkModeHover:'#6c2fed',
        cardColor:'#fff',
        sidebarTitleBackgroundColor:'#ebf7f1',
        darkModeSidebarTitleBackgroundColor:'#083a3b',
        sidebarTitleText:'#011a0d',
        darkModeSidebarTitleText:'#dce0f5',
      }
    },
  },
   plugins: [require("daisyui")],
    daisyui: {
    themes: [false],
  },
 
}

