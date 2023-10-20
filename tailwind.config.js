/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'banner-hero': "url('/image/background_banner.png')"
       
      },

      height: {
        '128': '32rem',
        '197': '16rem',
      },

      margin: {
        '100': '35rem',
      },

      colors: {
        'purple-black': '#26063C',
        'purple-gray': '#8D2083',
      },

    


    }
    
    ,
  },
  plugins: [],
}

