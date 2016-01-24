module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['browserify', 'mocha', 'chai', 'sinon'],
        singleRun: false,
        colors: true,
        port: 9876,
        reporters: ['mocha'],
        browsers: ['Chrome'],
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [
                ['babelify', {presets: ['es2015']}]
            ]
        }
    });
};
