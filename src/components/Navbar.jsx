import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { Logo } from "./Logo";

export function Navbar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault()
        console.log(search)

        if (!search) return 

        navigate(`/search?q=${search}`)
        setSearch('')

    }

    return (
        <header className="w-full h-20 degrade flex items-center">
            <div className="container flex items-center justify-between">
                <Logo />
                <form
                    onSubmit={handleSearch}
                    className="flex justify-end"
                >
                    <div className="flex bg-transparent border border-card p-2 rounded-md justify-between">
                        <input
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            type="search"
                            placeholder='Search'
                            className=" bg-transparent placeholder:text-slate-500 border-none formSearch w-20 text-white outline-none"
                        />
                        <button type="submit">
                            <BsSearch />
                        </button>
                    </div>
                </form>
            </div>
        </header>
    )
}