import { Movie } from "../../data/data";

type SingleMovieItemProps = {
    movie: Movie
}

const SingleMovieItem = ({movie}:SingleMovieItemProps) => {
    return (  
        <>
            <div>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
            </div>
            <p>directed by <br/> <b>{movie.director}</b></p>
            <p>{movie.duration}</p>
            <div>
                <p><b>Genre:</b></p>
                <ul>
                    {movie.genre.map((genre) => (<li key={crypto.randomUUID()}>{genre}</li>))}
                </ul>
            </div>
            <p><b>Rating:</b> {movie.rate} ★</p>
        </>
    );
}

export default SingleMovieItem;