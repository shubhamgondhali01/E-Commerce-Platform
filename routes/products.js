const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const { ROLES } = require('../utils/roles');

router.get('/', authenticate, getProducts);
router.post('/', authenticate, authorize(ROLES.ADMIN), createProduct);
router.put('/:id', authenticate, authorize(ROLES.ADMIN), updateProduct);
router.delete('/:id', authenticate, authorize(ROLES.ADMIN), deleteProduct);

module.exports = router;
