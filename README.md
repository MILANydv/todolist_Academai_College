# Todo List API

A simple Todo List API built with Node.js, Express, and MongoDB. This project includes user authentication using JWT, with routes for creating, reading, updating, and deleting todos.

## Features

- **User Authentication**: Secure login and token-based authentication.
- **CRUD Operations**: Create, Read, Update, and Delete todos.
- **Protected Routes**: Access restricted endpoints using JWT authentication.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side logic.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing data.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt.js**: Password hashing library.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (running locally or remotely)
- [Postman](https://www.postman.com/) or any other API client (optional, for testing)

## Installation
### Iclone the repository::
   ```
   git clone https://github.com/your-username/todo-list-api.git
   cd todo-list-api
```
### Install dependencies:

```
npm install
```
### Create a .env file:
```
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=MONGODB_URI = mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@cluster0.uanmf.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```
## Run the server:

#### For development with auto-reloading:
```
npm run dev
```
#### For production:
```
npm start
```
## Contributing
- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/your-feature).
- Open a pull request.
