import { Movie } from "../../data/data";
import MovieCard from "../MovieCard/MovieCard";

type MovieListProps = {
    movieArray: Movie[]
}

const MovieList = ({movieArray}: MovieListProps) => {
    return (  
        <>
            {movieArray.map((movie:Movie) => {
                return (<MovieCard movie={movie} key={crypto.randomUUID()}/>)
            }
            )}
        </>
    );
}

export default MovieList;