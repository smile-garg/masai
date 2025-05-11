const returnCheckMiddleware = (req, res, next) => {
  const { id } = req.params;
  const books = require('../models/bookModel').readBooks();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const borrowedDate = new Date(book.borrowedDate);
  const today = new Date();
  const diffTime = Math.abs(today - borrowedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 3) {
    return res.status(400).json({ error: "Book cannot be returned within 3 days of borrowing." });
  }

  next();
};

module.exports = returnCheckMiddleware;
