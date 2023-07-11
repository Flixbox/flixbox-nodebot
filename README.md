# flixbox-nodebot

https://github.com/Flixbox/flixbox-nodebot

[![Build and Test](https://github.com/Flixbox/flixbox-nodebot/actions/workflows/run.yml/badge.svg)](https://github.com/Flixbox/flixbox-nodebot/actions/workflows/run.yml)

The lightbot solver is built on top of Vite 4.x and TypeScript. It generates a hybrid package - both support for CommonJS and ESM modules.

## Credits

- Most of the regex is from Bing AI.
- The individual levels have been downloaded from https://github.com/haan/Lightbot/blob/master/resources/maps/maps.txt

## Caveats

- Only a few levels have been implemented. The startig y-coordinates were garbled in the original data, and I only had the chance to fix a few of them.
- There is a limited amount of tests and no negative test yet. Feel free to add more by adding the text files in ./test and adding them to test/commands.ts

## Usage

Install via npm, then simply run `npm run test` to run the tests.

The repo contains the following scripts:

- `build` - generates the following bundles: CommonJS (`.cjs`) ESM (`.mjs`) and IIFE (`.iife.js`). The name of bundle is automatically taken from `package.json` name property
- `test` - starts vitest and runs all tests
- `test:coverage` - starts vitest and run all tests with code coverage report
- `lint:scripts` - lint `.ts` files with eslint
- `lint:styles` - lint `.css` and `.scss` files with stylelint
- `format:scripts` - format `.ts`, `.html` and `.json` files with prettier
- `format:styles` - format `.cs` and `.scss` files with stylelint
- `format` - format all with prettier and stylelint
- `prepare` - script for setting up husky pre-commit hook
- `uninstall-husky` - script for removing husky from repository
