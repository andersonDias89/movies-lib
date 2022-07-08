import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

export function MovieCard({ movie, showLink = true }) {
    return (
        <div className="p-2 bg-gray-700 w-72 mt-5">
            <div className="w-full">
                <img src={imageUrl + movie.poster_path} alt={movie.title} />
                <div className="flex justify-between py-2">
                    <h2>{movie.title}</h2>
                    <p className="flex items-center space-x-1">
                        <span><FaStar /></span> 
                        <span>{movie.vote_average}</span>
                    </p>
                </div>
                <div className="w-full">
                    {showLink && <Link to={`/movie/${movie.id}`}>
                        <button type="button" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detalhes</button>
                    </Link>}
                </div>
            </div>
        </div>
    )
}