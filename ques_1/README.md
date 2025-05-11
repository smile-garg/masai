# Basic Express Server

This project sets up a basic Express server with some predefined routes.

## Endpoints

1. `GET /home` - Returns a simple HTML response: "Welcome to Home Page".
2. `GET /aboutus` - Returns a JSON response: `{ "message": "Welcome to About Us" }`.
3. `GET /contactus` - Returns dummy contact details in JSON format.
4. All undefined routes return: "404 Not Found".

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
3. run the server
node server.js
The server will be running at http://localhost:3000.
