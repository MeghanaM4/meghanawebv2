/** @type {import('tailwindcss').Config} */
export default{
    content:['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    theme:{
        extend:{
            fontFamily: {
                static:['static'],
                freesans:['freesans'],
                lunchtype:['lunchtype'],
                instrument:['instrument']
            }
        },
    },
};