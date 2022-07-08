import { BsSearch } from 'react-icons/bs'
import { Logo } from "./Logo";

export function Navbar() {
    return (
        <div className="w-full h-20 degrade flex items-center">
            <div className="container flex items-center justify-between">
                <Logo />
                <form className="w-[35%]">
                    <div className="flex bg-transparent border border-card p-2 rounded-md">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full bg-transparent placeholder:text-slate-500 border-none text-white outline-none"
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