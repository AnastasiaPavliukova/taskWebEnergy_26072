import * as browserSyncFactory from 'browser-sync';
export const sync = browserSyncFactory.create();

export function browserSync(cb) {
    sync.init({
        server: {
            baseDir: './dist'
        }
    });
    cb();
}

export function reload(cb) {
    sync.reload();
    cb();
}

