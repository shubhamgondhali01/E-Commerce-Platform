const express = require('express');
const router = express.Router();
const { createOrder, updateOrderStatus, getOrders } = require('../controllers/orderController');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const { ROLES } = require('../utils/roles');

router.post('/', authenticate, authorize(ROLES.GUEST), createOrder);
router.put('/:id', authenticate, authorize(ROLES.ADMIN), updateOrderStatus);
router.get('/', authenticate, authorize(ROLES.ADMIN), getOrders);

module.exports = router;
