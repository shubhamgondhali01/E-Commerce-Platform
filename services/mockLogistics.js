// services/mockLogistics.js
const nock = require('nock');

// Mocking logistics provider API
const mockLogisticsProvider = () => {
  nock('https://api.logistics-provider.com')
    .post('/createShipment')
    .reply(200, {
      status: 'success',
      shipmentId: 'mock-shipment-id',
    });
};

module.exports = mockLogisticsProvider;
