# Movie API

A simple Express.js backend API for a movie tracking app.

This project was built as part of my full-stack development practice to learn backend routes, REST API structure, validation, and connecting an Express backend to a React frontend.

## Tech Stack

- Node.js
- Express.js
- JavaScript
- CORS
- REST API

## Features

- Get all movies
- Get a movie by ID
- Filter movies by rating
- Add a new movie
- Delete a movie
- Update a movie
- Toggle watched status
- Basic validation for bad requests
- 404 handling for missing movies

## API Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Test route |
| GET | `/movies` | Get all movies |
| GET | `/movies?rating=PG-13` | Filter movies by rating |
| GET | `/movies/:id` | Get one movie by ID |
| POST | `/movies` | Add a new movie |
| DELETE | `/movies/:id` | Delete a movie |
| PATCH | `/movies/:id` | Update a movie |

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/movie-api.git
```

2. Go into the project folder:

```bash
cd movie-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. The backend should run at:

```txt
http://localhost:5000
```

## What I Practiced

- Creating Express routes
- Handling GET, POST, DELETE, and PATCH requests
- Using `express.json()`
- Sending proper status codes like `201`, `400`, and `404`
- Connecting a backend API to a frontend app
- Using Git and GitHub for version control
