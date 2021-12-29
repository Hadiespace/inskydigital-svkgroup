const gulp = require('gulp');
const del = require('del');
const browsersync = require('browser-sync');
const rename = require('gulp-rename');
const sourcemap = require('gulp-sourcemaps');
const coloralfa = require('postcss-color-alpha');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const postcss = require('gulp-postcss');
const groupMediaQueries = require('gulp-group-css-media-queries');
const webpack = require('webpack');
const webp = require('gulp-webp');
const webpackStream = require('webpack-stream');
const pug = require('gulp-pug');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');
const sass = require('gulp-sass')(require('sass'));

const html = () => gulp.src(['src/pug/pages/*.pug'])
	.pipe(pug({ pretty: true }))
	.pipe(gulp.dest('dist'))
	.pipe(browsersync.stream());
exports.html = html;

const css = () => gulp.src('src/scss/style.scss')
	.pipe(sass.sync())
	.pipe(groupMediaQueries())
	.pipe(postcss([coloralfa, autoprefixer, csso]))
	.pipe(rename('style.css'))
	.pipe(sourcemap.write('.'))
	.pipe(gulp.dest('dist/css'))
	.pipe(browsersync.stream());
exports.css = css;

const js = () => gulp.src('src/js/*.js')
	.pipe(webpackStream({
		mode: 'development',
		entry: './src/js/main.js',
		output: {
			filename: './js/bundle.js',
			pathinfo: false,
			publicPath: '',
		},
		devtool: 'source-map',
		devServer: {
			hot: false
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: ['babel-loader']
				}
			]
		},
	}), webpack)
	.pipe(gulp.dest('dist'));
exports.js = js;

const images = () => gulp.src('src/assets/images/**/*', { base: 'src/assets' })
	.pipe(gulp.dest('dist'));
exports.images = images;

const assets = () => gulp.src([
	'src/assets/docs/*',
	'src/assets/favicons/*',
	'src/assets/fonts/*',
	'src/assets/videos/*',
	'src/assets/js/*',
], { base: 'src/assets' })
	.pipe(gulp.dest('dist'));
exports.assets = assets;

const spriteMono = () => gulp.src('src/assets/icons/mono/*.svg', { base: 'src/assets/icons' })
	.pipe(svgSprite({
		mode: {
			symbol: {
				sprite: '../sprite-mono.svg',
			},
		},
		shape: {
			transform: [
				{
					svgo: {
						plugins: [
							{
								removeAttrs: {
									attrs: ['class', 'data-name', 'fill', 'stroke.*'],
								},
							},
						],
					},
				},
			],
		},
	}))
	.pipe(gulp.dest('dist/images'));
exports.spriteMono = spriteMono;

const spriteMulti = () => gulp.src('src/assets/icons/multi/*.svg', { base: 'src/assets/icons' })
	.pipe(svgSprite({
		mode: {
			symbol: {
				sprite: '../sprite-multi.svg',
			},
		},
		shape: {
			transform: [
				{
					svgo: {
						plugins: [
							{
								removeAttrs: {
									attrs: ['class', 'data-name'],
								},
							},
							{
								removeUselessStrokeAndFill: false,
							},
							{
								inlineStyles: true,
							},
						],
					},
				},
			],
		},
	}))
	.pipe(gulp.dest('dist/images'));
exports.spriteMulti = spriteMulti;

const svg = () => gulp.src('assets/images/**/*.svg')
	.pipe(svgo({ plugins: [{ removeViewBox: true }, { cleanupIDs: false }] }))
	.pipe(gulp.dest('src/images'));
exports.svg = svg;

const convertWebp = () => gulp.src('dist/images/**/*.{jpg,png}')
	.pipe(webp({ quality: 100 }))
	.pipe(gulp.dest('dist/images'));
exports.convertWebp = convertWebp;

const clean = () => del('dist');
exports.clean = clean;

const refresh = (done) => {
	browsersync.reload();
	done();
};
exports.refresh = refresh;

const server = () => {
	browsersync.init({
		server: 'dist/',
		notify: false,
		open: false,
		cors: false,
		ui: false,
	});

	gulp.watch('src/pug/**/*.pug', gulp.series(html, refresh));
	gulp.watch('src/scss/**/*.scss', gulp.series(css));
	gulp.watch('src/js/**/*.js', gulp.series(js, refresh));
	gulp.watch('src/assets/images/**/*.{jpg,png}', gulp.series(images, convertWebp, refresh));
	gulp.watch('src/assets/images/**/*.svg', gulp.series(svg, refresh));
	gulp.watch('src/assets/docs/*', gulp.series(assets, refresh));
	gulp.watch('src/assets/favicons/*', gulp.series(assets, refresh));
	gulp.watch('src/assets/fonts/*', gulp.series(assets, refresh));
	gulp.watch('src/assets/videos/*', gulp.series(assets, refresh));
	gulp.watch('src/assets/js/*', gulp.series(assets, refresh));
	gulp.watch('src/assets/icons/mono/*', gulp.series(spriteMono, refresh));
	gulp.watch('src/assets/icons/multi/*', gulp.series(spriteMulti, refresh));
};
exports.server = server;

const build = gulp.series(
	clean,
	gulp.parallel(html, css, js, images, svg, assets),
	gulp.parallel(spriteMono, spriteMulti),
	convertWebp,
);
exports.build = build;

const start = gulp.series(
	build,
	server,
);
exports.start = start;
