import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },

            parserOptions: {
                project: ['tsconfig.eslint.json'],
                projectService: true,
                tsconfigRootDir: '.',
            },
        },
    },
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    importPlugin.flatConfigs.recommended,
    {
        rules: {
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                },
            ],
        },
    },
    {
        settings: {
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
    },
    {
        files: ['**/*.mjs', '**/*.js'],
        extends: [tseslint.configs.disableTypeChecked],
    },
)
