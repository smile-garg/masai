const BookModel = require('../models/bookModel');

const getAvailableBooks = (req, res) => {
  const books = BookModel.readBooks();
  const availableBooks = books.filter(book => book.status === 'available');
  res.json(availableBooks);
};

const borrowBook = (req, res) => {
  const { readerName } = req.body;
  const books = BookModel.readBooks();
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (book.status !== 'available') {
    return res.status(400).json({ message: "Book is already borrowed" });
  }

  book.status = 'borrowed';
  book.borrowedBy = readerName;
  book.borrowedDate = new Date().toISOString();

  BookModel.writeBooks(books);
  res.json(book);
};

const returnBook = (req, res) => {
  const books = BookModel.readBooks();
  const book = books.find(b => b.id === parseInt(req.params.id));

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

  book.status = 'available';
  book.borrowedBy = null;
  book.borrowedDate = null;

  BookModel.writeBooks(books);
  res.json(book);
};

module.exports = {
  getAvailableBooks,
  borrowBook,
  returnBook
};
