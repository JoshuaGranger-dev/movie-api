const express = require("express")
const app = express()
app.use(express.json())

let movies = [
  { id: 1, title: "Spider-Man", rating: "PG-13", watched: true },
  { id: 2, title: "Toy Story", rating: "G", watched: true },
  { id: 3, title: "The Batman", rating: "PG-13", watched: false }
]

app.get("/", (req, res) => {
  res.json({ message: "Movies API is running successfully"})
})

app.get("/movies", (req, res) => {
  const rating = req.query.rating

  if (rating) {
    const filteredMovies = movies.filter((movie) => movie.rating === rating)
    return res.json(filteredMovies)
  }

  res.json(movies)
})

app.get("/movies/:id", (req, res) => {
  const movieId = Number(req.params.id)

  const movie = movies.find((movie) => movie.id === movieId)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" })
  }

  res.json(movie)
})

app.post("/movies", (req, res) => {
  const newMovie = req.body 

  if (!newMovie.title || !newMovie.rating || newMovie.watched === undefined) {
    return res.status(400).json({ message: "Title, rating, and watched are required" })
  }

  movies.push(newMovie)

  res.json(movies)
})

app.delete("/movies/:id", (req, res) => {
  const movieId = Number(req.params.id)

  const movie = movies.find((movie) => movie.id === movieId)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" })
  }

  movies = movies.filter((movie) => movie.id !== movieId)

  res.json(movies)
})

app.patch("/movies/:id", (req, res) => {
  const movieId = Number(req.params.id)

  const updates = req.body

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ message: "At least one field is required to update" })
  }

  const movie = movies.find((movie) => movie.id === movieId)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" })
  }

  movies = movies.map((movie) => {
    if (movie.id === movieId) {
      return { ...movie, ...updates }
    }

    return movie
  })

  res.json(movies)
})

app.listen(5000, () => {
  console.log({ message: "Server is running on port 5000."})
})