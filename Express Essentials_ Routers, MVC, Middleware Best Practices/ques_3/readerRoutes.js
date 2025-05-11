const express = require('express');
const readerController = require('../controllers/readerController');
const returnCheckMiddleware = require('../middlewares/returnCheckMiddleware');
const transactionLogger = require('../middlewares/transactionLogger');

const router = express.Router();

router.get('/books', readerController.getAvailableBooks);
router.post('/borrow/:id', readerController.borrowBook);
router.post('/return/:id', returnCheckMiddleware, transactionLogger, readerController.returnBook);

module.exports = router;
