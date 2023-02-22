// π ----
// :: TAILWIND TYPOGRAPHY CONFIGURATION ---------------------------::
// ____
/* Here you may overwrite the default Tailwind Typography (prosé) styles.
 * Some defaults are provided.
 * More info: https://github.com/tailwindlabs/tailwindcss-typography.
 */

const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        extend: {
            typography: theme => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.DEFAULT'),
                        '[class~="lead"]': { color: theme('colors.gray.DEFAULT') },
                        a: {
                            color: theme('colors.yellow.DEFAULT'),
                            '&:hover': { color: theme('colors.yellow.DEFAULT') }
                        },
                        'a.no-underline': { textDecoration: 'none' },
                        'h1, h2, h3, h4': { color: theme('colors.gray.DEFAULT') },
                        blockquote: { borderColor: theme('colors.yellow.DEFAULT') },
                        hr: { borderColor: theme('colors.gray.DEFAULT') },
                        'ul > li::before': { backgroundColor: theme('colors.gray.DEFAULT') },
                        'ol > li::before': { color: theme('colors.gray.DEFAULT') },
                        'ul > li p, ol > li p': {
                            marginTop: '0em !important',
                            marginBottom: '0em !important'
                        },
                        pre: { whiteSpace: 'pre-wrap' },
                        strong: { color: theme('colors.gray.DEFAULT') }
                    }
                }
            })
        }
    },
    plugins: [require('@tailwindcss/typography')({ modifiers: [] })]
};
