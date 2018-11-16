const { mix } = require('laravel-mix');

mix.browserSync({
	proxy: 'api.woo.test',
	watch: true,
	files: [
		'httpdocs/**/*',
	],
})

mix.js('src/js/app.js', 'httpdocs/assets/js')
   .sass('src/scss/style.scss', 'httpdocs/assets/css');
