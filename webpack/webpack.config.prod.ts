import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';

import { getBasicWebpackConfig } from './webpack.config.base';

const config: webpack.Configuration = {
    mode: 'production',
    devtool: false,
    bail: true,
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en-gb/),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
            maxAsyncRequests: Infinity,
        },
    },
};

export const WebpackProdConfig = merge(getBasicWebpackConfig(), config);

export default WebpackProdConfig;
