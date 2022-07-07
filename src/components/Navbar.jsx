import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="w-full h-16 bg-gray-800">
            <Link to="/">MovieLab</Link>
        </div>
    )
}