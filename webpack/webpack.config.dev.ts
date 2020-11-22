// @ts-ignore
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import Webpackbar from 'webpackbar';

import { getBasicWebpackConfig } from './webpack.config.base';

const config: webpack.Configuration = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new Webpackbar(),
        new CleanTerminalPlugin(),
    ],
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true,
    },
    cache: true,
};

export const WebpackDevConfig = merge(
    getBasicWebpackConfig({ isDevelopment: true }),
    config,
);

export default WebpackDevConfig;
