import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

export function MovieCard({ movie, showLink = true, size}) {
    return (
        <article className={`p-3 bg-card w-[${size}] shadow-lg flex flex-col justify-between`}>
            <div className="w-full ">
                <img src={imageUrl + movie.poster_path} alt={movie.title} />


            </div>
            <div className="w-full">
                <div className="flex justify-between py-2 ">
                    <h2 className="font-extrabold px-2">{movie.title}</h2>
                    <p className="flex items-center space-x-1">
                        <span className="text-yellow-400"><FaStar /></span>
                        <span>{movie.vote_average}</span>
                    </p>
                </div>
                {showLink && <Link to={`/movie/${movie.id}`}>
                    <button type="button" className="bg-primary  hover:bg-[#341e64] transition-colors w-full text-white font-bold py-2 px-4 rounded">Detalhes</button>
                </Link>}
            </div>
        </article>
    )
}