import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from '../components/MovieCard'

const serachUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

function Search() {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get("q")

  const getSeachedMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryUrl = `${serachUrl}?${apiKey}&query=${query}`

    getSeachedMovies(searchWithQueryUrl)
  }, [query])

  return (
    <main className="w-full my-6">
      <h1 className="text-center my-4 text-xl">Resultado para a busca:
        <span className="text-primary font-extrabold"> {query}</span>
      </h1>
      <div className="container grid grid-cols-3 md:flex md:flex-wrap md:grid-cols-none md:w-[380px] gap-12">
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
      </div>
    </main>
  )
}

export default Search