import { removeSync, ensureDirSync, copySync } from 'fs-extra';
import { publish } from 'gh-pages';


ensureDirSync('dist/gh-pages');

copySync('dist/browser', 'dist/gh-pages');

publish('dist/gh-pages', function (err) {
    if (err) {
        console.error(err);
        return;
    }
    removeSync('dist/gh-pages');
});
