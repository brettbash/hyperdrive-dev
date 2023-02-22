// 追い風 ----
// :: TAILWIND SITE CONFIGURATION ---------------------------::
// ____
/* Use this file to completely define the current sites design system by
 * adding and extending to Tailwinds default utility classes.
 */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        extend: {
            colors: {
                yellow: {
                    100: '#FFFCCB',
                    200: '#FFFAA1',
                    300: '#FFF766',
                    DEFAULT: '#fff202',
                    500: '#F5E902',
                    600: '#DED300',
                    700: '#C8BE00',
                    800: '#b4aa00',
                    900: '#a09600'
                },

                blue: {
                    100: '#379CFD',
                    200: '#3B8FE0',
                    300: '#3680C9',
                    400: '#3472AE',
                    500: '#2D6195',
                    600: '#214C76',
                    DEFAULT: '#183a5b',
                    800: '#0F2339',
                    900: '#08131F'
                },

                green: {
                    100: '#deffff',
                    200: '#caf3eb',
                    DEFAULT: '#B6DFD7',
                    400: '#a2cbc3',
                    500: '#8eb7af',
                    600: '#7aa39b',
                    700: '#668f87',
                    800: '#527b73',
                    900: '#3e675f'
                },

                gray: {
                    DEFAULT: colors.blueGray['500'],
                    ...colors.blueGray
                },

                transparent: 'transparent',
                black: '#000000',
                white: '#ffffff'
            },

            fontFamily: {
                mono: [
                    /* Use a custom mono font for this site by changing 'Anonymous' to the
                     * font name you want and uncommenting the following line. */
                    `'GT America Mono'`,
                    ...defaultTheme.fontFamily.mono
                ],
                sans: [
                    /* Use a custom mono font for this site by changing 'Gaultier' to the
                     * font name you want and uncommenting the following line. */
                    `'Space Cadet'`,
                    ...defaultTheme.fontFamily.sans
                ],
                serif: [
                    /* Use a custom mono font for this site by changing 'Lavigne' to the
                     * font name you want and uncommenting the following line. */
                    // 'Lavigne',
                    ...defaultTheme.fontFamily.serif
                ]
            },

            // Set default transition durations and easing when using the transition utilities.
            transitionDuration: { DEFAULT: '300ms' },
            transitionTimingFunction: { DEFAULT: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)' }
        }
    },

    plugins: [
        // π ----
        // :: BASE STYLES ---------------------------::
        // ____
        plugin(function ({ addBase, theme }) {
            addBase({
                /* :: Fonts
                {+} ---------------------------------- */

                // :: Space Cadet ------------ //
                '@font-face': {
                    fontFamily: 'Space Cadet',
                    src: `url('../../public/fonts/space-cadet.woff2') format('woff2'), url('../../public/fonts/space-cadet.woff') format('woff');`
                },

                // :: GT America Mono ------------ //
                '@font-face': {
                    fontFamily: 'GT America Mono',
                    src: `url('../../public/fonts/GTAmericaMono-RegularItalic.woff2') format('woff2'), url('../../public/fonts/GTAmericaMono-RegularItalic.woff') format('woff');`,
                    fontWeight: 'normal',
                    fontStyle: 'italic'
                },

                '@font-face': {
                    fontFamily: 'GT America Mono',
                    src: `url('../../public/fonts/GTAmericaMono-Regular.woff2') format('woff2'), url('../../public/fonts/GTAmericaMono-Regular.woff') format('woff');`,
                    fontWeight: 'normal',
                    fontStyle: 'normal'
                },

                // Default color transition on links unless user prefers reduced motion.
                '@media (prefers-reduced-motion: no-preference)': { a: { transition: 'color 0.3s ease-in-out' } },

                html: {
                    fontDisplay: 'swap',
                    color: theme('colors.blue.DEFAULT'),
                    //--------------------------------------------------------------------------
                    // Set sans, serif or mono stack with optional custom font as default.
                    //--------------------------------------------------------------------------
                    fontFamily: theme('fontFamily.mono')
                    // fontFamily: theme('fontFamily.sans'),
                    // fontFamily: theme('fontFamily.serif'),
                },
                '::selection': {
                    backgroundColor: theme('colors.yellow.DEFAULT'),
                    color: theme('colors.blue.DEFAULT')
                },

                '::-moz-selection': {
                    backgroundColor: theme('colors.yellow.DEFAULT'),
                    color: theme('colors.white')
                }
            });
        }),

        // π ----
        // :: CUSTOM COMPONENTS ---------------------------::
        // ____
        plugin(function ({ addComponents, theme }) {
            const components = {};
            addComponents(components);
        }),

        // π ----
        // :: CUSTOM UTILITIES ---------------------------::
        // ____
        plugin(function ({ addUtilities, theme, variants }) {
            const newUtilities = {};
            addUtilities(newUtilities);
        })
    ]
};
