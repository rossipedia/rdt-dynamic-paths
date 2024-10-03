import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { remixDevTools, defineRdtConfig } from 'remix-development-tools';

export default defineConfig({
  plugins: [
    remixDevTools(
      defineRdtConfig({
        client: {
          position: 'bottom-left',
          showBreakpointIndicator: false,
          urlFlag: crypto.randomUUID(),
        },
      })
    ),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
