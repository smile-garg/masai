# Simple Express App with User Routes

This project sets up a basic Express server with user-related routes.

## Endpoints

1. `GET /users/get` - Returns a single dummy user.
2. `GET /users/list` - Returns a list of dummy users.
3. All undefined routes return: 
   ```json
   { "error": "404 Not Found" }
Setup Instructions
Clone the repository.

Install dependencies:
npm install

Run the server:
node server.js

The server will be running at http://localhost:3000.
