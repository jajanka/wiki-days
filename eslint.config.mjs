import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'next', 'prettier'],
  }),
  {
    ignores: [".next/*", "node_modules/*"],
  },
]
export default eslintConfig