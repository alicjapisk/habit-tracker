/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { lg: "2.5rem", md: "0rem" },
    },
    screens: {
      lg: { min: "1600px", max: "" },
      md: { min: "1280px", max: "1599px" },
      sm: { min: "", max: "1279px" },
    },
    extend: {
      fontSize: {
        //1920x
        "1920x/H1": "50px",
        "1920x/H2": "40px",
        "1920x/H4": "32px",
        "1920x/H5": "24px",
        "1920x/A1": "20px",
        "1920x/T1": "16px",
        "1920x/S1": "12px",

        //1440x
        "1440x/H1": "40px",
        "1440x/H2": "35px",
        "1440x/H4": "27px",
        "1440x/H5": "22px",
        "1440x/A1": "18px",
        "1440x/T1": "14px",
        "1440x/S1": "12px",

        //360x
        "360x/H1": "26px",
        "360x/H2": "24px",
        "360x/H4": "21px",
        "360x/H5": "19px",
        "360x/A1": "16px",
        "360x/T1": "13px",
        "360x/S1": "12px",
      },
      lineHeight: {
        //1920x
        "1920x/H1": "55px",
        "1920x/H2": "45px",
        "1920x/H4": "40px",
        "1920x/H5": "30px",
        "1920x/A1": "28px",
        "1920x/T1": "24px",
        "1920x/S1": "18px",

        //1440x
        "1440x/H1": "45px",
        "1440x/H2": "40px",
        "1440x/H4": "32px",
        "1440x/H5": "28px",
        "1440x/A1": "26px",
        "1440x/T1": "22px",
        "1440x/S1": "18px",

        //360x
        "360x/H1": "31px",
        "360x/H2": "29px",
        "360x/H4": "26px",
        "360x/H5": "24px",
        "360x/A1": "24px",
        "360x/T1": "20px",
        "360x/S1": "18px",
      },
      fontFamily: {
        "sour-gummy": ["var(--font-sour-gummy)", "sans-serif"],
      },
    },
  },
};
