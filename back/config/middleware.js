module.exports = {
  load: {
    before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
    order: [],
    after: ['parser', 'router'],
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['*'],
    },
  },
};
 