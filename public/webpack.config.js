const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {

    },
    output: {

    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    option: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new WebpackPwaManifest({
            fingerprints: false,
            name: '',
            short_name: '',
            description: '',
            background_color: '#01579b',
            theme_color: '#ffffff',
            'theme-color': '#ffffff',
            start_url: '/',
            icons: [
                {
                    src: path.resolve(''),
                    sizes: [],
                    destination: path.join ('',''),
                },
            ],
        }),
    ],
};

module.exports= config;