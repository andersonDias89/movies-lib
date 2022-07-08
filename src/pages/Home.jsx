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
    console.log(topMovies)
  }

  useEffect(() => {
    const topRatedUrl = `${movieUrl}top_rated?${apiKey}`

    console.log(topRatedUrl)
    getTopRatedMovies(topRatedUrl)

  }, [])

  return (
    <div className="w-full">
      <div className="container">
        {topMovies.length > 0 &&
          topMovies.map(movie => {
            return (
              <MovieCard movie={movie} />
            )
          })}
      </div>
    </div>
  )
}

export default Home