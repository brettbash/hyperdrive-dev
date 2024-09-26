const mix = require('laravel-mix')

mix.alias({
    '@': 'resources/js',
    '@templates': 'resources/js/templates',
    '@blocks': 'resources/js/blocks',
    '@modules': 'resources/js/modules',
    '@components': 'resources/js/components',
    '@stores': 'resources/js/stores',
})

mix.js('resources/js/site.js', 'public/js/site.js').extract(['alpinejs', 'gsap']).sourceMaps(false)

mix.postCss('resources/css/site.css', 'public/css/site.css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-focus-visible'),
    require('autoprefixer'),
])

mix.options({ cssNano: { minifyFontValues: false } })

mix.browserSync({
    proxy: process.env.APP_URL,
    files: ['resources/views/**/*.html', 'public/**/*.(css|js)', 'content/**/*', 'resources/**/*.yaml'],
    // Option to open in non default OS browser.
    // browser: "firefox",
    notify: false,
})

mix.webpackConfig({
    stats: {
        children: true,
    },
})

mix.version()
