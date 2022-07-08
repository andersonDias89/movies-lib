import { useState } from "react"
import { useEffect } from "react"
import { MovieCard } from "../components/MovieCard"

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${movieUrl}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)

  }, [])

  return (
    <div className="w-full my-6">
      <div className="container grid grid-cols-4 gap-4">
        {topMovies.length > 0 &&
          topMovies.map(movie => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
      </div>
    </div>
  )
}

export default Home