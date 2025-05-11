# Simple Booking Storage API

This project provides a simple CRUD API for managing books using Express.js and a JSON database (db.json).

## Endpoints

1. `POST /books` - Add a new book.
2. `GET /books` - Get all books.
3. `GET /books/:id` - Get a book by ID.
4. `PUT /books/:id` - Update a book by ID.
5. `DELETE /books/:id` - Delete a book by ID.
6. `GET /books/search?author=<author_name>` - Search for books by author name (partial matches).
7. `GET /books/search?title=<title_name>` - Search for books by title name (partial matches).

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
Start the server:
node server.js
The server will be running at http://localhost:3000.
