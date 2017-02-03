module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: `${__dirname}/dist/`,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    }
};
