# Book Management System

A simple digital library management system with admin and reader routes.

## Endpoints

### Admin Routes
- `POST /admin/books` - Add a new book.
- `GET /admin/books` - Get all books.
- `PATCH /admin/books/:id` - Update a book.
- `DELETE /admin/books/:id` - Remove a book.

### Reader Routes
- `GET /reader/books` - Get available books.
- `POST /reader/borrow/:id` - Borrow a book.
- `POST /reader/return/:id` - Return a book.

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
3.Run the server:
node server.js

The server will be running at http://localhost:3000.
### Running the App

To start the app, run:
```bash
node server.js
