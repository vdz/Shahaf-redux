module.exports = {
    entry : './index.js',
    output : {
        path: __dirname + '/../public/js',
        filename: 'index.js',
        sourceMapFilename : '[file].map'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015-webpack2', 'stage-2']
                }
            }
        ]
    }
};