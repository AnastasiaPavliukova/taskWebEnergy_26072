import { src, dest } from 'gulp';
import * as nodeSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css'
import { sync } from './browsersync.mjs';

const sass = gulpSass(nodeSass);

export function generateCSS(cb) {
    src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist'))
        .pipe(sync.stream());
    cb();
}

export function buildCSS(cb) {
    src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(dest('dist'))
    cb();
}