import js from '@eslint/js';
import * as tseslint from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Add any custom rules here
      '@typescript-eslint/no-unused-vars': 'warn',
      // TypeScript compiler already checks for undefined variables
      'no-undef': 'off',
    },
  },
];
