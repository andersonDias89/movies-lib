import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import {MovieCard} from '../components/MovieCard'

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
    console.log(movies) 
  }

  useEffect(() => {
    const searchWithQueryUrl = `${serachUrl}?${apiKey}&query=${query}`

    getSeachedMovies(searchWithQueryUrl)
  }, [query])

    return (
      <div className="w-full my-6">
      <div className="container grid grid-cols-3 gap-12">
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
      </div>
    </div>
    )
  }

  export default Search