module.exports = {
    'root': true,
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {'jsx': true}
    },
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': ['off'],
        'no-console': 'off',
        'no-restricted-syntax': [
            'error',
            {
                'selector': 'CallExpression[callee.object.name="console"][callee.property.name!=/^(log|warn|error|info|trace)$/]',
                'message': 'Unexpected property on console object was called'
            }
        ]
    }
};
