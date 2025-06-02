const express = require('express');
const { getProducts, getProductById, addProduct,updateProduct,deleteProduct } = require('../controllers/productcontroller')
const router = express.Router();

router.get('/',getProducts)
router.get('/:id',getProductById)
router.post('/',addProduct)
router.put('/',updateProduct)
router.delete('/',deleteProduct)

module.exports = router;