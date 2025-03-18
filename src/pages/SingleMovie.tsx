import { useParams } from "react-router-dom";
import SingleMovieItem from "../components/SingleMovieItem/SingleMovieItem";
import { Movie } from "../data/data";
import { useContext, useEffect, useState } from "react";
import { mainContext } from "../context/MainProvider";
import transformTitle from "../functions/transformTitle";

const SingleMovie = () => {
    const {movieParam} = useParams();
    const {movies} = useContext(mainContext) as any
    const [singleMovie, setSingleMovie] = useState<Movie>()

    useEffect(() => {
        if(movieParam) {
            setSingleMovie(movies.allMovies.find((movie:Movie) => transformTitle(movie.title).includes(movieParam)))
        }
    }, [movieParam])

    return (  
    <>
        {singleMovie ? <SingleMovieItem movie={singleMovie}/> : <p>Loading...</p>
    }
    </>
);
}

export default SingleMovie;