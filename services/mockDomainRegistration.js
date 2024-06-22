// services/mockDomainRegistration.js
const nock = require('nock');

// Mocking domain registration API
const mockDomainRegistration = () => {
  nock('https://api.domain-registration.com')
    .post('/registerDomain')
    .reply(200, {
      status: 'success',
      domainId: 'mock-domain-id',
    });
};

module.exports = mockDomainRegistration;
