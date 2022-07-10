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
    <main className="w-full my-6">
      <div className="container grid grid-cols-3 md:flex md:flex-wrap md:grid-cols-none md:w-[380px] gap-12">
        {topMovies.length > 0 &&
          topMovies.map(movie => {
            return (
              <MovieCard size="380px" key={movie.id} movie={movie} />
            )
          })}
      </div>
    </main>
  )
}

export default Home