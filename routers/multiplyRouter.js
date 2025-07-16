const express = require('express');
const multiplyController = require('../controllers/multiplyController');
const router = express.Router();

router.get('/', multiplyController.getBasicMultiply);
router.get('/:multiplyMedthod', multiplyController.getAdvanceMultiply);

module.exports = router;