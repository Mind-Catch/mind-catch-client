module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: [],
  rules: {
    // Possible Errors
    'no-cond-assign': ['error', 'always'],
    'no-console': ['error'],
    'no-debugger': ['error'],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-template-curly-in-string': ['error'],
    'no-unsafe-optional-chaining': ['error'],
    'require-atomic-updates': ['error'],

    // Best Practices
    'array-callback-return': ['error'],
    'curly': ['error', 'multi-line'],
    'default-case': ['error'],
    'default-case-last': ['error'],
    'default-param-last': ['off'],
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'smart'],
    'no-alert': ['warn'],
    'no-caller': ['error'],
    'no-constructor-return': ['error'],
    'no-else-return': ['error'],
    'no-empty-function': ['error'],
    'no-eval': ['error'],
    'no-floating-decimal': ['error'],
    'no-implied-eval': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-multi-spaces': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-nonoctal-decimal-escape': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['error'],
    'no-proto': ['error'],
    'no-return-assign': ['error'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-compare': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-useless-concat': ['error'],
    'no-with': ['error'],
    'require-await': ['error'],

    // Variables
    'no-shadow': ['error'],
    'no-use-before-define': ['error'],
    'array-bracket-newline': ['error'],
    'array-bracket-spacing': ['error', 'never', { objectsInArrays: false }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['error', { ignoreImports: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error'],
    'comma-style': ['error'],
    'computed-property-spacing': ['error'],
    'eol-last': ['error'],
    'func-call-spacing': ['error'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error'],
    'implicit-arrow-linebreak': ['error'],
    'indent': ['error', 2],
    'jsx-quotes': ['error'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 2,
        comments: 140,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'multiline-comment-style': ['error', 'bare-block'],
    'no-lonely-if': ['error'],
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': ['error'],
    'no-negated-condition': ['error'],
    'no-nested-ternary': ['error'],
    'no-plusplus': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': ['error'],
    'nonblock-statement-body-position': ['error'],
    'object-curly-newline': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'operator-assignment': ['error'],
    'operator-linebreak': [
      'error',
      'none',
      {
        overrides: {
          '?': 'ignore',
          ':': 'ignore',
        },
      },
    ],
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'semi-style': ['error'],
    'space-before-blocks': ['error'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error'],
    'space-infix-ops': ['error'],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': ['error'],

    // ECMAScript 6
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error'],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'no-confusing-arrow': ['error'],
    'no-duplicate-imports': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-destructuring': ['error', { array: false }],
    'prefer-template': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error'],
    'yield-star-spacing': ['error', 'before'],

    // React
    'react/no-array-index-key': ['error'],
    'react/no-danger': ['error'],
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-curly-spacing': ['error'],
    'react/jsx-equals-spacing': ['error'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'react/jsx-fragments': ['error'],
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-useless-fragment': ['error'],
    'react/jsx-props-no-multi-spaces': ['error'],
    'react/jsx-tag-spacing': ['error'],

    // jsx-a11y
    'jsx-a11y/no-onchange': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/interactive-supports-focus': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/no-autofocus': ['off'],
  },
};
