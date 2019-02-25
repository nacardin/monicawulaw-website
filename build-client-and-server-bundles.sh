#!/usr/bin/env bash
ng run monicawulaw-website:build:production-en && \
ng run monicawulaw-website:build:production-zh && \
ng run monicawulaw-website:server:production && \
cp dist/browser/en/favicon.ico dist/browser/