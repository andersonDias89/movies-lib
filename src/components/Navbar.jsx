import { BsSearch } from 'react-icons/bs'
import { Logo } from "./Logo";

export function Navbar() {
    return (
        <div className="w-full h-20 degrade flex items-center">
            <div className="container flex items-center justify-between">
                <Logo />
                <form className="flex justify-end">
                    <div className="flex bg-transparent border border-card p-2 rounded-md justify-between">
                        <input
                            type="text"
                            placeholder='Search'
                            className=" bg-transparent placeholder:text-slate-500 border-none formSearch w-20 text-white outline-none"
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