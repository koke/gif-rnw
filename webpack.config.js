const config = require("./node_modules/@wordpress/scripts/config/webpack.config");

config.resolve.alias['react-native$'] = 'react-native-web';
config.resolve.alias['WebView'] = 'react-native-web-webview';

config.module.rules.unshift( {
    test: /postMock.html$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
        },
    },
} );

module.exports = config;
