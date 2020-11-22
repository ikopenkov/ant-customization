// need polyfiils to work js code of CssVariables in node
// relative paths, bacuse cannot make this config to resolve ts aliases while all other ts config works
import '../src/core/polyfills';

import HtmlWebpackPlugin from 'html-webpack-plugin';
// @ts-ignore
import CleanCSSPlugin from 'less-plugin-clean-css';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { Configuration } from 'webpack';

import { CssVariablesKebabCase } from '../src/core/CssVariables';
import { AntAliasesEs } from './AntAliases';

export function getBasicWebpackConfig(
    params: {
        isDevelopment?: boolean;
    } = {},
): Configuration {
    return {
        entry: {
            app: path.resolve('src/index.tsx'),
        },

        output: {
            filename: '[name].bundle.js',
            chunkFilename: '[name].js',
            path: path.resolve('dist'),
            publicPath: '/',
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            alias: {
                src: path.resolve('src'),
                '@ant-design/icons/lib/dist$': path.resolve(
                    'src/components/antd/Icons.tsx',
                ),
                ...AntAliasesEs,
            },
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            query: {
                                cacheDirectory: true,
                            },
                        },
                        {
                            loader: 'ts-loader',
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.less$/,
                    include: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: params.isDevelopment,
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                                javascriptEnabled: true,
                                plugins: [
                                    new CleanCSSPlugin({ advanced: true }),
                                ],
                                modifyVars: CssVariablesKebabCase,
                            },
                        },
                    ],
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                chunks: 'all',
                hash: true,
            }),
            new MiniCssExtractPlugin({
                filename: 'styles/[name].css',
                chunkFilename: 'styles/[id].css',
            }),
        ],

        stats: 'errors-warnings',
    };
}
