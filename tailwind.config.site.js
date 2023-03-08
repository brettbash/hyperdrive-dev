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
                primary: {
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

                secondary: {
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

                tertiary: {
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

                neutral: {
                    DEFAULT: colors.slate['500'],
                    ...colors.slate
                },

                transparent: 'transparent',
                black: '#000000',
                white: '#ffffff'
            },

            // cursor: { none: 'none' },

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


                /* :: Forms
                {+} ---------------------------------- */
                "[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select": {
                        padding: '0 1rem',
                        background: theme('colors.transparent'),
                        border: '0',
                        border: '1px solid',
                        borderColor: theme('colors.gray.300'),
                        borderRadius: '0 !important',
                        fontSize: '0.875rem',
                        fontFamily: theme('fontFamily.mono'),
                        transition: 'all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955)'
                    },

                [`@media (min-width: ${theme('screens.lg')})`]: {
                    "[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select":
                        { fontSize: '0.75rem' },

                    'a, button, input, label, textarea': { cursor: 'none' }
                },

                textarea: { resize: 'none' },

                "[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus": {
                    borderColor: theme('colors.gold.DEFAULT'),
                    outline: 'none',
                    boxShadow: 'none !important'
                },

                '::selection': {
                    backgroundColor: theme('colors.primary.DEFAULT'),
                    color: theme('colors.secondary.DEFAULT')
                },

                '::-moz-selection': {
                    backgroundColor: theme('colors.primary.DEFAULT'),
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
