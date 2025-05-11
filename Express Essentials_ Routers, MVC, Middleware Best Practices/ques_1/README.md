Ticketing System
This is a simple backend application for managing support tickets. It is built using Express.js and is designed to allow users to create, view, update, delete, and resolve tickets. All data is stored in a simple db.json file.

Table of Contents
Project Overview

Features

Installation

Usage

API Endpoints

Error Handling

Project Structure

Contributing

Project Overview
This ticketing system is designed to allow internal teams to track issues and ensure that all support requests are properly handled. It supports the following:

Full CRUD operations on tickets.

Ticket validation when creating a new ticket.

Resolving tickets (changing their status from "pending" to "resolved").

Features
Create a Ticket: Users can submit a ticket with a title, description, priority, and the user's name. New tickets default to a "pending" status.

View Tickets: You can view all tickets or fetch individual tickets by their ID.

Update Ticket: Modify the ticket’s details, such as title, description, and priority.

Delete Ticket: Remove a ticket from the system.

Resolve Ticket: Change the status of a ticket from "pending" to "resolved".

Data Validation: Ensures that all necessary fields are provided when creating a ticket.

Installation
To get started with the Ticketing System, follow these steps:

1. Clone the repository
First, clone this repository to your local machine:

bash
Copy
Edit
git clone https://github.com/your-username/ticketing-system.git
cd ticketing-system
2. Install dependencies
You’ll need Node.js to run the application. Install the required dependencies by running:

bash
Copy
Edit
npm install
3. Start the server
Run the application using:

bash
Copy
Edit
node server.js
Your server should now be running on http://localhost:3000.

Usage
Once the server is running, you can use the following API endpoints to interact with the system.

API Endpoints
1. GET /tickets
Fetch all tickets in the system.

Response:

json
Copy
Edit
[
  {
    "id": 1,
    "title": "Login Issue",
    "description": "Unable to login",
    "priority": "high",
    "user": "John Doe",
    "status": "resolved"
  },
  ...
]
2. GET /tickets/:id
Fetch a specific ticket by its ID.

Example: GET /tickets/1

Response:

json
Copy
Edit
{
  "id": 1,
  "title": "Login Issue",
  "description": "Unable to login",
  "priority": "high",
  "user": "John Doe",
  "status": "pending"
}
3. POST /tickets
Create a new ticket with the required fields (title, description, priority, user).

Request Body:

json
Copy
Edit
{
  "title": "Login Issue",
  "description": "Unable to login",
  "priority": "high",
  "user": "John Doe"
}
Response:

json
Copy
Edit
{
  "id": 1,
  "title": "Login Issue",
  "description": "Unable to login",
  "priority": "high",
  "user": "John Doe",
  "status": "pending"
}
4. PUT /tickets/:id
Update an existing ticket by its ID. You can modify the title, description, and priority fields.

Request Body:

json
Copy
Edit
{
  "title": "Updated Title",
  "description": "Updated description",
  "priority": "low"
}
Response:

json
Copy
Edit
{
  "id": 1,
  "title": "Updated Title",
  "description": "Updated description",
  "priority": "low",
  "user": "John Doe",
  "status": "pending"
}
5. DELETE /tickets/:id
Delete a specific ticket by its ID.

Response:

200 OK if the ticket was deleted successfully.

6. PATCH /tickets/:id/resolve
Resolve a ticket by changing its status from "pending" to "resolved".

Response:

json
Copy
Edit
{
  "id": 1,
  "title": "Login Issue",
  "description": "Unable to login",
  "priority": "high",
  "user": "John Doe",
  "status": "resolved"
}
Error Handling
If a request is missing required fields or if there is a problem with the ticket data, the system will return a 400 error with a message detailing the issue.

For example:

json
Copy
Edit
{
  "error": "Data insufficient, please provide all required fields"
}
If a ticket is not found when trying to fetch, update, or resolve it, a 404 error will be returned:

json
Copy
Edit
{
  "error": "Ticket not found"
}
Project Structure
The project follows the MVC (Model-View-Controller) architecture:

models/: Contains functions for reading and writing data to db.json.

controllers/: Contains logic for ticket operations (create, read, update, delete, resolve).

routes/: Defines the API routes and links them to appropriate controller functions.

middlewares/: Contains validation middleware to check if the required fields are present when creating a ticket.

Contributing
Feel free to fork this repository and submit pull requests! If you have any suggestions or improvements, please open an issue or a pull request.
