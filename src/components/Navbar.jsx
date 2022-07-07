import { Link } from "react-router-dom";

import { BiCameraMovie } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'

export function Navbar() {
    return (
        <div className="w-full h-16 bg-gray-800 flex items-center">
            <div className="container flex items-center justify-between">
                <div className="flex space-x-1 items-center justify-center">
                    <div className="text-xl">
                        <BiCameraMovie />
                    </div>
                    <Link to="/">
                        <h1 className="text-xl">MovieLab</h1>
                    </Link>
                </div>

                <form className="w-[35%]">
                    <div className="flex bg-gray-900 p-2 rounded-md">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-transparent placeholder:text-gray-700 border-none text-white outline-none"
                        />
                        <button type="submit">
                            <BsSearch />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}