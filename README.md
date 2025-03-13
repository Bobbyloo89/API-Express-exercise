# User API Documentation

## Installation and Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/Bobbyloo89/API-Express-exercise.git
2. **Install dependencies:**
   Navigate to the project directory and install the required dependencies:
   ```bash
   cd API-Express-exercise
   npm install
3. **Run the application:**
   To start the server and run the application locally, use:
   ```bash
   node server.js
   OR
   npm start

The API will be available at http://localhost:3000.

## General Information

This API provides basic operations to manage users. It allows you to:

- **Get all users**
- **Get a specific user by ID**
- **Create a new user**
- **Update an existing user**
- **Delete a user**

## API Endpoints

### **GET /users**

- **Description**: Retrieve a list of all users.
- **Method**: `GET`
- **Request**: No parameters needed.
- **Response**:
  - **Status**: 200 OK
  - **Body**: A JSON array containing all users.
    ```json
    [
        { "id": "1", "name": "Alice" },
        { "id": "2", "name": "Bob" },
        { "id": "3", "name": "Charlie" }
    ]
    ```
  - **Error Response**:
    - **Status**: 500 Internal Server Error
    - **Body**: 
    ```json
    { "message": "Internal Server Error" }
    ```

### **GET /users/{id}**

- **Description**: Retrieve a specific user by their unique ID.
- **Method**: `GET`
- **Request**:
  - **Path Parameter**: `id` (The ID of the user you want to fetch.)
- **Response**:
  - **Status**: 200 OK
  - **Body**: A JSON object representing the user.
    ```json
    { "id": "1", "name": "Alice" }
    ```
  - **Error Response**:
    - **Status**: 404 Not Found
    - **Body**: 
    ```json
    { "message": "User not found" }
    ```

### **POST /users**

- **Description**: Create a new user.
- **Method**: `POST`
- **Request**:
  - **Body**: A JSON object containing the `name` of the user.
    ```json
    { "name": "David" }
    ```
- **Response**:
  - **Status**: 201 Created
  - **Body**: A JSON object representing the newly created user with a randomized ID.
    ```json
    { "id": "randomized number", "name": "David" }
    ```
  - **Error Response**:
    - **Status**: 400 Bad Request
    - **Body**: 
    ```json
    { "message": "Name is required" }
    ```
    - **Status**: 500 Internal Server Error
    - **Body**: 
    ```json
    { "message": "Internal Server Error" }
    ```

### **PUT /users/{id}**

- **Description**: Update an existing user.
- **Method**: `PUT`
- **Request**:
  - **Path Parameter**: `id` (The ID of the user to update.)
  - **Body**: A JSON object containing the updated `name` of the user.
    ```json
    { "name": "Alice Updated" }
    ```
- **Response**:
  - **Status**: 200 OK
  - **Body**: A JSON object representing the updated user.
    ```json
    { "id": "1", "name": "Alice Updated" }
    ```
  - **Error Response**:
    - **Status**: 404 Not Found
    - **Body**: 
    ```json
    { "message": "User not found" }
    ```
    - **Status**: 500 Internal Server Error
    - **Body**: 
    ```json
    { "message": "Internal Server Error" }
    ```

### **DELETE /users/{id}**

- **Description**: Delete a user.
- **Method**: `DELETE`
- **Request**:
  - **Path Parameter**: `id` (The ID of the user to delete.)
- **Response**:
  - **Status**: 200 OK
  - **Body**: A JSON object representing the deleted user.
    ```json
    { "id": "1", "name": "Alice Updated" }
    ```
  - **Error Response**:
    - **Status**: 404 Not Found
    - **Body**: 
    ```json
    { "message": "User not found" }
    ```
    - **Status**: 500 Internal Server Error
    - **Body**: 
    ```json
    { "message": "Internal Server Error" }
    ```

## Error Codes

| Status Code | Description                     |
|-------------|---------------------------------|
| 400         | Bad Request (e.g., missing name)|
| 404         | Not Found (e.g., user not found)|
| 500         | Internal Server Error (unexpected error)|
