import { Link } from "react-router-dom";

import { BiCameraMovie } from 'react-icons/bi'

export function Logo() {
    return (
        <div className="flex items-start justify-center border border-primary overflow-hidden rounded-md h-10">
            <div className="text-3xl h-full flex items-center p-1 bg-primary text-white">
                <BiCameraMovie />
            </div>
            <Link to="/">
                <h1 className="text-2xl font-extrabold py-1 px-2">Movies<span className="text-primary">Lab</span></h1>
            </Link>
        </div>
    )
}