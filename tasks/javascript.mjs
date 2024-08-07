import { src, dest } from 'gulp';
import { sync } from './browsersync.mjs';
import webpack from 'webpack-stream';

export function generateJS(cb) {
    src('./src/js/main.mjs')
        .pipe(webpack({
            output: {
                filename: 'main.min.mjs'
            },
            mode: 'development'
        }))
        .pipe(dest('dist'))
        .pipe(sync.stream());
    cb();
}

export function buildJS(cb) {
    src('./src/js/main.mjs')
        .pipe(webpack({
            output: {
                filename: 'main.min.mjs'
            },
            mode: 'production'
        }))
        .pipe(dest('dist'))
        .pipe(sync.stream());
    cb();
}