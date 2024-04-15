import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default tseslint.config(
  eslint.configs.recommended,
  prettierConfig,
  ...tseslint.configs.recommendedTypeChecked,
  { languageOptions: { parserOptions: { project: true } } },
  {
    files: ['./src/**/*.ts'],
    ignores: ['dist', 'node_modules'],
    rules: {
      'no-debugger': 'warn',
      'no-console': 'warn',
      'import/no-default-export': 'warn',
      'prefer-const': 'warn',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        { assertionStyle: 'never' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
    overrides: [
      {
        files: ['build.config.ts'],
        rules: { 'import/no-default-export': 'off' },
      },
    ],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  { ignores: ['dist', 'node_modules', '.prettierrc.js'] },
);
