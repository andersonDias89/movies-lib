import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setMovie(data)
    console.log(movie)
  }

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`

    getMovie(movieUrl)

  }, [])

  function formatCurrence(value) {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  return (
    <main className="w-full my-6">
      <div className="container flex">
        {movie && (
          <>

            <MovieCard size={'300px'} movie={movie} showLink={false} />

            <div className="p-5 flex-1">
              <h1 className="text-3xl text-primary font-extrabold">{movie.title}</h1>
              <p className="font-light">{movie.tagline}</p>
              <div className="flex items-center justify-start gap-2">
                <span>
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
                <span>Receita: {formatCurrence(movie.budget)}</span>
                <span>Faturamento: {formatCurrence(movie.revenue)}</span>
                <span>{`${movie.runtime}min`}</span>
              </div>
              <p className="mt-5">
                {movie.overview}
              </p>



            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default Movie