import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"
import { GiReceiveMoney } from 'react-icons/gi'
import { BiTime } from 'react-icons/bi'
import { FaDesktop } from 'react-icons/fa'
import { MdLeaderboard } from 'react-icons/md'

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

              <div className="flex items-center justify-start gap-5 text-sm mt-4">
                <div className="flex items-center gap-1">
                  <span className="text-primary text-lg"><FaDesktop /></span>
                  <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-primary text-lg"><BiTime /></span>
                  <span>{`${movie.runtime}min`}</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-primary text-lg"><GiReceiveMoney /></span>
                  <span>Revenue: {formatCurrence(movie.revenue > "0.00" ? movie.revenue : "Uninformed")}</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-primary text-lg"><MdLeaderboard /></span>
                  <span>Invoicing: {formatCurrence(movie.budget > "0.00" ? movie.budget : "Uninformed")}</span>
                </div>

              </div>

              <p className="mt-5 font-light">
                {movie.overview}
              </p>
              <div className="mt-5">
                <h2 className="text-primary font-bold">Production Company:</h2>
                <div className="flex gap-5">
                  {movie.production_companies.map(company => {
                    return <p key={company.id}>{company.name}</p>
                  })}
                </div>
              </div>



            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default Movie