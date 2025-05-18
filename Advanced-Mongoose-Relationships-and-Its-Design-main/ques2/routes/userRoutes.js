const express = require("express");
const router = express.Router();
const { addUser, getUserRentals } = require("../controllers/userController");

router.post("/add-user", addUser);
router.get("/user-rentals/:userId", getUserRentals);

module.exports = router;
