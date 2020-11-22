import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';

import prodConfig from './webpack.config.prod';

export default merge(prodConfig, {
    plugins: [new BundleAnalyzerPlugin()],
});
