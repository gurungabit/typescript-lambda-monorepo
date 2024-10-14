import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['lambdas/**/src/tests/**/*.test.ts'],
    globals: true,
  },
});
