var path = require('path');

module.exports = {
    mode: 'development',
    entry: './ReduxProvider.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ReduxProvider.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}