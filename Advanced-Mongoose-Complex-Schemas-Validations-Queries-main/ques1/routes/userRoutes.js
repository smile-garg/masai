const express = require('express');
const router = express.Router();
const {
  createUser,
  addAddress,
  getUserSummary,
  getUserDetails,
  deleteAddress
} = require('../controllers/userController');

router.post('/users', createUser);
router.post('/users/:userId/address', addAddress);
router.get('/users/summary', getUserSummary);
router.get('/users/:userId', getUserDetails);
router.delete('/users/:userId/address/:addressId', deleteAddress); // Bonus

module.exports = router;
