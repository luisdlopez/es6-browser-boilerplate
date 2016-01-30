# es6-browser-starter-kit
Starter kit for developing browser scripts with ES6, **with heavy emphasis in testing**.
Run `npm install` and start coding in ES6 right away.

### Bundling
Main dependencies used for packaging are:

- [Babel](https://babeljs.io/)
- [Browserify](http://browserify.org/)

### Testing
Main dependencies used for testing are:

- [Karma](https://karma-runner.github.io/0.13/index.html)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
- [Sinon](http://sinonjs.org/)

### npm scripts
Generates bundle in ./dist/ folder
```
npm run build
npm run build-watch
```

Run simple test with mocha framework (using chrome). Single run set to false (i.e. tests are on auto-watch).
```
npm test
```
Run tests with mocha + full coverage reports in both text and html formats (html generated in ./coverage/ folder)
```
npm run test-coverage
```
#####Additional notes on testing:

Code coverage does not run when --debug flag is set on testing (istanbul and isparta can't seem to read the code properly and reports are not properly generated)

