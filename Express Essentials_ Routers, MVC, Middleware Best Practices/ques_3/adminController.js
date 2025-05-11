const BookModel = require('../models/bookModel');

const addBook = (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  const books = BookModel.readBooks();
  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    publishedYear,
    status: 'available'
  };
  books.push(newBook);
  BookModel.writeBooks(books);
  res.status(201).json(newBook);
};

const getAllBooks = (req, res) => {
  const books = BookModel.readBooks();
  res.json(books);
};

const updateBook = (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  const books = BookModel.readBooks();
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = title || book.title;
  book.author = author || book.author;
  book.genre = genre || book.genre;
  book.publishedYear = publishedYear || book.publishedYear;

  BookModel.writeBooks(books);
  res.json(book);
};

const deleteBook = (req, res) => {
  const books = BookModel.readBooks();
  const index = books.findIndex(b => b.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  BookModel.writeBooks(books);
  res.status(204).send();
};

module.exports = {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook
};
