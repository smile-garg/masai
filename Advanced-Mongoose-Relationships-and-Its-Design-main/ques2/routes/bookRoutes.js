const express = require("express");
const router = express.Router();
const {
  addBook,
  updateBook,
  deleteBook,
  rentBook,
  returnBook,
  getBookRenters
} = require("../controllers/bookController");

router.post("/add-book", addBook);
router.put("/update-book/:bookId", updateBook);
router.delete("/delete-book/:bookId", deleteBook);
router.post("/rent-book", rentBook);
router.post("/return-book", returnBook);
router.get("/book-renters/:bookId", getBookRenters);

module.exports = router;
