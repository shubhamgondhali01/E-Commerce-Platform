// routes/mock.js
const express = require('express');
const router = express.Router();
const mockPayments = require('../services/mockPayments');
const mockLogistics = require('../services/mockLogistics');
const mockDomainRegistration = require('../services/mockDomainRegistration');

// Initialize mock integrations
mockPayments();
mockLogistics();
mockDomainRegistration();

// Route for simulating payment processing
router.post('/simulate-payment', async (req, res) => {
  try {
    // Simulated logic for processing payment
    res.json({ message: 'Simulated payment processed successfully' });
  } catch (error) {
    console.error('Error simulating payment:', error.message);
    res.status(500).json({ message: 'Failed to simulate payment' });
  }
});

// Route for simulating shipment creation
router.post('/simulate-shipment', async (req, res) => {
  try {
    // Simulated logic for creating shipment
    res.json({ message: 'Simulated shipment created successfully' });
  } catch (error) {
    console.error('Error simulating shipment creation:', error.message);
    res.status(500).json({ message: 'Failed to simulate shipment creation' });
  }
});

// Route for simulating domain registration
router.post('/simulate-domain-registration', async (req, res) => {
  try {
    // Simulated logic for registering domain
    res.json({ message: 'Simulated domain registered successfully' });
  } catch (error) {
    console.error('Error simulating domain registration:', error.message);
    res.status(500).json({ message: 'Failed to simulate domain registration' });
  }
});

module.exports = router;
