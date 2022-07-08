import { useState } from "react"
import { useEffect } from "react"

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
  }

  useEffect(() => {
    const topRatedUrl = `${movieUrl}top_rated?${apiKey}`

    console.log(topRatedUrl)
    getTopRatedMovies(topRatedUrl)

  }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default Home