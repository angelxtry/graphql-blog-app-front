module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['react-hooks', 'simple-import-sort'],
  extends: ['airbnb', 'plugin:react/recommended'],
  rules: {
    'no-unused-vars': 'error',
    'no-nested-ternary': 'off',
    'no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-console': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-curly-spacing': 'off',
    'no-multiple-empty-lines': 'off',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript'],
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': 'off',
      },
    },
  ],
};
