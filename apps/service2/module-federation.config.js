module.exports = {
  name: 'service2',
  exposes: {
    './Module': 'apps/service2/src/app/remote-entry/entry.module.ts',
  },
};
