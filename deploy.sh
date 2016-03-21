#!/bin/bash
set -e

cd dist
rm -fr .git
git init

git add .
git commit -m "Deploy to GitHub Pages" > /dev/null

git push --force "git@github.com:nacardin/monicawulaw-website.git" master:gh-pages
