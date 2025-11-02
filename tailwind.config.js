/** @type {import('tailwindcss').Config} */
export default{
    content:['./src/**/*.{astro,html,js,jsx}'],
    theme:{
        extend:{
            fontFamily: {
                static:['static'],
                freesans:['freesans'],
                lunchtype:['lunchtype']
            },
            screens: {
                'xs': '430px' //iPhone 14 (this is for my friends)
            }
        },
    },
};