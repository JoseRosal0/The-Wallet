/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/work/index.html","./views/form/index.html","./views/home/*{html,js}"],
  theme: {
    extend: {
      height:{
        "500px":"500px",
        "700px":"650px"
      }
    },
  },
  plugins: [],
}

