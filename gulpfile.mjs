import { series, parallel } from 'gulp';
import { browserSync } from './tasks/browsersync.mjs';
import { generateCSS, buildCSS } from './tasks/sass.mjs';
import { watcher } from './tasks/watch.mjs';
import { generateJS, buildJS } from './tasks/javascript.mjs';

export function dev(cb) {
    series(
        browserSync,
        parallel(generateCSS, generateJS),
        watcher
    )(cb);
}

export function build(cb) {
    series(
        buildCSS,
        buildJS
    )(cb);
}

export function live(cb) {
    browserSync(cb);
}