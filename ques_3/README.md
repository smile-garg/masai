# Simple Dishes API

This project provides a simple CRUD API for managing dishes using Express.js and a JSON database (db.json).

## Endpoints

1. `POST /dishes` - Add a new dish.
2. `GET /dishes` - Get all dishes.
3. `GET /dishes/:id` - Get a dish by ID.
4. `PUT /dishes/:id` - Update a dish by ID.
5. `DELETE /dishes/:id` - Delete a dish by ID.
6. `GET /dishes/get?name=<dish_name>` - Search for dishes by name (partial matches).

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
Start the server:
node server.js
The server will be running at http://localhost:3000.
