import { useContext, useEffect, useRef, useState } from 'react';
import './Header.css'
import { mainContext } from '../../context/MainProvider';
import { Movie } from '../../data/data';

const Header = () => {
    const {movies, setMovies} = useContext(mainContext) as any

    const [searchInput, setSearchInput] = useState<string>("")
    const searchInputRef = useRef<HTMLInputElement>(null)

    const filterMovies = (action: "yearUp" | "yearDown" | "bestRating" | "az" | "za" | "search") => {
        if(action === "yearUp") {
            setMovies({
                ...movies,
                filteredMovies: movies.allMovies.sort((a: Movie, b: Movie) => Number(a.year) - Number(b.year))
            })
        } else if(action === "yearDown") {
            setMovies({
                ...movies,
                filteredMovies: movies.allMovies.sort((a: Movie, b: Movie) => Number(b.year) - Number(a.year))
            })
        } else if(action === "bestRating") {
            setMovies({
                ...movies,
                filteredMovies: movies.allMovies.sort((a: Movie, b: Movie) => Number(b.rate) - Number(a.rate))
            })
        } else if(action === "az") {
            setMovies({
                ...movies,
                filteredMovies: movies.allMovies.sort(((a: Movie, b: Movie) => a.title.localeCompare(b.title)))
            })
        } else if(action === "za") {
            setMovies({
                ...movies,
                filteredMovies: movies.allMovies.sort(((a: Movie, b: Movie) => b.title.localeCompare(a.title)))
            })
        } else if(action === "search") {
            setMovies({
                ...movies,
                filteredMovies: movies.allMovies.filter((movie: Movie) => {
                    if(movie.title.toLowerCase().includes(searchInput)) {
                        return movie
                    }
                })
            })
        }
    }

    useEffect(() => {
        filterMovies("search")
    }, [searchInput])

    return (  
        <header>
            <h1>movies for you</h1>
            <div className="inputs-wrapper grid">
                <input type="text" placeholder="Browse movies..." ref={searchInputRef} onChange={() => setSearchInput(searchInputRef.current?.value || "")}/>
                <button onClick={() => filterMovies("yearUp")}>Year ↑</button>
                <button onClick={() => filterMovies("yearDown")}>Year ↓</button>
                <button onClick={() => filterMovies("bestRating")}>Best rating</button>
                <button onClick={() => filterMovies("az")}>A-Z</button>
                <button onClick={() => filterMovies("za")}>Z-A</button>
            </div>
        </header>
    );
}

export default Header;