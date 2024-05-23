/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vitest"],
      dts: true, // generate TypeScript declaration
    }),
  ],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'istanbul',
    },
    setupFiles: 'tests/setup.ts',
  },
});
