// 追い風 ----
// :: TAILWIND CONFIGURATION ---------------------------::
// ____
/* Use the Tailwind configuration to completely define the current sites
 * design system by adding and extending to Tailwinds default utility
 * classes. Various aspects of the config are split in multiple files.
 */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    /* :: Config Files
    {+} ---------------------------------- */
    presets: [
        require('tailwindcss/defaultConfig'),
        require('./tailwind.config.typography.js'),
        require('./tailwind.config.core.js'),
        require('./tailwind.config.site.js')
    ],

    /* :: Dark Mode
    {+} ---------------------------------- */
    // Uncomment the next line to enable class based dark mode
    // darkMode: 'class',

    /* :: JIT
    {+} ---------------------------------- */
    mode: 'jit',

    /* :: Purge CSS
    {+} ---------------------------------- */
    purge: {
        content: ['./resources/views/**/*.html', './resources/js/**/*.js'],
        layers: ['components', 'utilities']
    }
};
