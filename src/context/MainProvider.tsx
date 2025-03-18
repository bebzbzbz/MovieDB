import { createContext, useState } from "react";
import { Movie, movieData } from "../data/data";

export const mainContext = createContext({})

export type MovieType = {
    allMovies : Movie[],
    filteredMovies: Movie[]
}

const MainProvider = ({children}:{children:React.ReactNode}) => {
    const [movies, setMovies] = useState<MovieType>({
        allMovies: movieData,
        filteredMovies: movieData
    })

    return (  
        <mainContext.Provider value={{movies, setMovies}}>
            {children}
        </mainContext.Provider>
    );
}

export default MainProvider;