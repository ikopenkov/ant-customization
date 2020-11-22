module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-class-properties',

        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        'lodash',

        // autoimport styles for corresponding ant component
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            },
            'antd', // define name with third parameter, to use different import plugin configs for different modules
        ],

        [
            'babel-plugin-styled-components',
            {
                ssr: false,
            },
        ],
    ],
};
