import { src, dest, watch, series } from 'gulp';
import { browserSync } from './tasks/browsersync.mjs';
import { generateCSS } from './tasks/sass.mjs';
import { watcher } from './tasks/watch.mjs';

export function dev(cb) {
    series(browserSync, generateCSS, watcher)(cb);
}



