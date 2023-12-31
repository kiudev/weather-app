/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#181818',
                light: '#eeeeee'
            },
            dropShadow: {
                bg: '0 5px 5px rgba(0, 0, 0, 0.5)'
            }
            
        },
    },
    plugins: [],
}
