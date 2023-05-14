const express = require('express');
var router = express.Router();
var operationController = require('../controllers/operationController.js')

// Start message
router.get('/', (req, res) => {
    res.send('Start page');
})
// a + b route
router.get('/add/:num1/:num2', operationController.add_action);
// a - b route
router.get('/sub/:num1/:num2', operationController.sub_action);
// a * b route
router.get('/mul/:num1/:num2', operationController.multiply_action);
// a / b route
router.get('/div/:num1/:num2', operationController.divide_action);

module.exports = router;
