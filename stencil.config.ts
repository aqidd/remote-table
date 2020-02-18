import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'remote-table',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  bundles: [
    { components: ['remote-table', 'remote-table-content', 'remote-table-footer', 'remote-table-header'] }
  ]
};
