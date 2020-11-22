const noUnusedVars = [
    'error',
    { ignoreRestSiblings: true, argsIgnorePattern: '^_.*$' },
];

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
            jsx: true,
            modules: true,
        },
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['src', './src']],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
        'simple-import-sort',
    ],
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'silence/react',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    env: {
        node: true,
        browser: true,
        jest: true,
        es6: true,
    },
    rules: {
        complexity: ['error', 10],
        'sonarjs/cognitive-complexity': ['error', 10],
        'max-lines': [
            'error',
            { max: 200, skipBlankLines: true, skipComments: true },
        ],

        'no-unused-vars': noUnusedVars,
        'no-unused-expressions': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'new-cap': [
            'off',
        ],
        'spaced-comment': [
            'error',
            'always',
            { markers: ['#region'], exceptions: ['#endregion'] },
        ],
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'no-prototype-builtins': 'off',
        'no-throw-literal': 'off',
        'no-var': 'error',
        'prefer-promise-reject-errors': 'off',
        'no-shadow': 'off',
        'prefer-template': 'error',
        'require-await': 'error',
        curly: 'error',

        'react/jsx-fragments': 'error',
        'react/sort-comp': [
            'error',
            {
                order: [
                    'type-annotations',
                    'defaultProps',
                    'state',
                    'instance-variables',
                    'constructor',
                    'getters',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'instance-variables',
                    'render',
                ],
            },
        ],

        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',

        '@typescript-eslint/class-name-casing': 'off',
        'no-useless-constructor': 'off', // see @typescript-eslint/no-useless-constructor
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': noUnusedVars,
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/camelcase': 'error',

        'unicorn/no-nested-ternary': 'warn',

        'import/named': 'off',

        'simple-import-sort/sort': 'error',
    },
};
