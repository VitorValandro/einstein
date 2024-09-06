/** @type {import('tailwindcss').Config} */

const BLACK = "#111111";
const WHITE = "#FFFFFF";
const GRAY = "#C0C0C0";
const PRIMARY = "#CEEBF1";
const SECONDARY = "#408AD5";
const TERTIARY = "#011E30"

const hexPercentage = (value) => {
  const intVal = Math.round(value * 255);
  const hexVal = intVal.toString(16);

  return hexVal.length == 1 ? "0" + hexVal : hexVal;
};

const FULL_SCALE = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const generateTransparentColors = (scale, color) => {
  return scale.reduce((acc, opacity) => {
    const percentage = opacity / 1000;

    return {
      ...acc,
      [opacity]:
        percentage === 1
          ? `${color}`
          : `${color}${hexPercentage(opacity / 1000)}`,
    };
  }, {});
};


export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          white: WHITE,
          dark: generateTransparentColors(FULL_SCALE, BLACK),
          light: generateTransparentColors(FULL_SCALE, GRAY),
        },
        brand: {
          primary: generateTransparentColors(FULL_SCALE, PRIMARY),
          secondary: generateTransparentColors(FULL_SCALE, SECONDARY),
          tertiary: generateTransparentColors(FULL_SCALE, TERTIARY),
        }
      }
    },
  },
  plugins: [],
};