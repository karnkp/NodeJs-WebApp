const exp = require('express');
const router = exp.Router();
const dbProductController = require('../controllers/dbProductController');

router.get('/:dbMethod', dbProductController.getProducts);

module.exports = router;