var Analytics = require('analytics-node');
var analytics = new Analytics('5UHzCeo2lrrwCsOkNiO08YcnbOkmwaz5', {
  flushAt: 20,
  flushInterval: 10000000000000000000000
});
analytics.identify({
  userId: 'monidambo',
  traits: {
    name: 'Monica D',
    email: 'm2@d.com',
    plan: 'Enterprise',
    friends: 42
  }
});

analytics.track({
  userId: 'monidambo',
  event: 'Item Purchased',
  properties: {
    revenue: 39.95,
    shippingMethod: '2-day'
  }
});
analytics.page({
  userId: 'monidambo',
  category: 'Docs',
  name: 'Node.js Library',
  properties: {
    url: 'https://segment.com/docs/libraries/node',
    path: '/docs/libraries/node/',
    title: 'Node.js Library - Segment',
    referrer: 'https://github.com/segmentio/analytics-node'
  }
});
