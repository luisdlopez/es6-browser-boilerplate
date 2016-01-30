var reporters = [];
var transform = [];
var coverageReporter = null;

function isDebug(argument) {
    return argument === '--debug';
}

function isCoverage(argument) {
    return argument === '--coverage';
}

// use coverage only if flag --coverage is set
// does not set coverage if --debug flag set
if (!process.argv.some(isDebug) && process.argv.some(isCoverage)) {
    // setup coverage analysis
    reporters.push('coverage');
    transform = [
        require('browserify-istanbul')({
            instrumenter: require('isparta'),
            defaultIgnore: true
        })
    ];
    // generates html coverage (in coverage folder) + summary printed in console
    coverageReporter = {
        reporters: [
            {type: 'text'},
            {type: 'html', dir: 'coverage/'}
        ]
    };
}

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['browserify', 'mocha', 'chai', 'sinon'],
        singleRun: false,
        colors: true,
        port: 9876,
        reporters: ['mocha'].concat(reporters), // default reporter mocha
        browsers: ['Chrome'],
        files: [
            'src/**/*.js',
            'tests/**/*.js'
        ],
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'tests/**/*.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: transform.concat([['babelify']]) // default transform babelify
        },
        coverageReporter: coverageReporter
    });
};
