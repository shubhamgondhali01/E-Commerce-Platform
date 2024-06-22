// services/mockPayments.js
const nock = require('nock');

// Mocking payment gateway API
const mockPaymentGateway = () => {
  nock('https://api.payment-gateway.com')
    .post('/charge')
    .reply(200, {
      status: 'success',
      paymentId: 'mock-payment-id',
    });
};

module.exports = mockPaymentGateway;
