# Backend API Documentation

Save this content in a file named `README.md` in the [Backend](http://_vscodecontentref_/0) folder.

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
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
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

500 Internal Server Error

Description: Error creating user.
Body:
```json
{
  "message": "Error creating user: error_message"
}
```
How to Run
Install dependencies:

npm install

Start the server:

npm start

The server will be running on http://localhost:4000.

Environment Variables
PORT: The port on which the server will run (default: 4000).
DB_CONNECTION: The MongoDB connection URI.
JWT_SECRET: The secret key for signing JWT tokens