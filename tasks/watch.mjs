import { watch } from 'gulp';
import { generateCSS } from './sass.mjs';
import { reload } from './browsersync.mjs';

export function watcher(cb) {
    watch('./src/sass/**/*.scss', generateCSS);
    watch('./dist/*.html', reload);
    cb();
}