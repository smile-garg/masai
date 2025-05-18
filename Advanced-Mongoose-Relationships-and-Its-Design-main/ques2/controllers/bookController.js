const Book = require("../models/Book");
const User = require("../models/User");

// Create book
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const book = await Book.create({ title, author, genre });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });

    await User.updateMany({ rentedBooks: book._id }, { $pull: { rentedBooks: book._id } });
    res.json({ message: "Book deleted and removed from all users" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Rent book
exports.rentBook = async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user || !book) return res.status(404).json({ error: "User or Book not found" });

    if (!user.rentedBooks.includes(bookId)) {
      user.rentedBooks.push(bookId);
      await user.save();
    }

    if (!book.rentedBy.includes(userId)) {
      book.rentedBy.push(userId);
      await book.save();
    }

    res.json({ message: "Book rented successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Return book
exports.returnBook = async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    await User.findByIdAndUpdate(userId, { $pull: { rentedBooks: bookId } });
    await Book.findByIdAndUpdate(bookId, { $pull: { rentedBy: userId } });

    res.json({ message: "Book returned successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get book renters
exports.getBookRenters = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId).populate("rentedBy", "name email");
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book.rentedBy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
