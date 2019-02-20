import { removeSync, ensureDirSync, copySync } from 'fs-extra';
import { sync as replaceInFilesSync } from 'replace-in-file';
import { publish } from 'gh-pages';


ensureDirSync('dist/gh-pages');

copySync('dist/browser', 'dist/gh-pages');


replaceInFilesSync({
    files: 'dist/gh-pages/**/index.html',
    from: /\<base href\="\//g,
    to: '<base href="/monicawulaw-website/',
});

publish('dist/gh-pages', function (err) {
    if (err) {
        console.error(err);
        return;
    }
    removeSync('dist/gh-pages');
});
