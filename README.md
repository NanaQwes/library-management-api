# Library Management API

## Author

Eugene Acheampong


## Project Description

This is a RESTful API for managing a library system. It allows management of books, authors, students, borrowing activities, and attendance tracking.


##  Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/NanaQwes/library-management-api.git
cd library-management-api
```

2. Install dependencies:

```bash
npm install
```

3. Start MongoDB (locally)

4. Run the server:

```bash
npm run dev
```

Server runs on:


http://localhost:5001

## Project Structure (MVC)

* models/ → Mongoose schemas
* routes/ → API routes
* server.js → Entry point


##  API ENDPOINTS

###  Books

* POST /api/books
* GET /api/books
* PUT /api/books/:id
* DELETE /api/books/:id

### Authors

* POST /api/authors
* GET /api/authors

###  Students

* POST /api/students
* GET /api/students

###  Borrow

* POST /api/borrow
* GET /api/borrow
* PUT /api/borrow/:id/return

###  Attendance

* POST /api/attendance
* GET /api/attendance


##  Testing

All endpoints were tested using Postman.


##  Features

* Full CRUD operations
* Borrow & return system
* Attendance tracking
* MongoDB relationships (populate)


##  Future Improvements

* Authentication (JWT)
* Book availability tracking
* Frontend UI


