# Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, required): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.
- `role` (string, required): The role of the user. Must be either `user` or `admin`.

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "role": "user"
}
```

#### Responses
201 Created

Description: User registered successfully.
Body:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "role": "user"
  },
  "token": "jwt_token"
}
```

400 Bad Request

Description: Validation errors.
Body:
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```
409 Conflict

Description: Email is already registered.
Body:
{
  "message": "Email is already registered"
}

500 Internal Server Error

Description: Error creating user.
Body:
```json
{
  "message": "Invalid email or password"
}
```

### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body must be a JSON object with the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses
200 OK

Description: User logged in successfully.
Body:
```json
{
  "message": "User logged in successfully",
  "user": {
    "id": "user_id",
    "fullname": "John Doe",
    "email": "john.doe@example.com",
    "role": "user"
  },
  "token": "jwt_token"
}
```
POST /users/logout
Description
This endpoint is used to log out the logged-in user.

Headers
Authorization (string, required): The JWT token of the logged-in user.
Example Request

POST /users/logout HTTP/1.1
Host: localhost:4000
Authorization: Bearer jwt_token

Responses
200 OK

Description: User logged out successfully.
Body:
{
  "message": "User logged out successfully"
}


## How to Run
Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The server will be running on http://localhost:4000.

## Environment Variables
- `PORT`: The port on which the server will run (default: 4000).
- `DB_CONNECTION`: The MongoDB connection URI.
- `JWT_SECRET`: The secret key for signing JWT tokens.