const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/books', adminController.addBook);
router.get('/books', adminController.getAllBooks);
router.patch('/books/:id', adminController.updateBook);
router.delete('/books/:id', adminController.deleteBook);

module.exports = router;
