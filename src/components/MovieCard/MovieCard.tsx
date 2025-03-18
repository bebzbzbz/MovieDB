import { Link } from "react-router-dom";
import { Movie } from "../../data/data";
import transformTitle from "../../functions/transformTitle";

type MovieCardProps = {
    movie: Movie,
}

const MovieCard = ({movie}:MovieCardProps) => {
    return ( 
        <div>
            <div>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
            </div>
            <div>
                <p><b>Genre:</b></p>
                <ul>
                    {movie.genre.map((genre) => (<li key={crypto.randomUUID()}>{genre}</li>))}
                </ul>
            </div>
            <p><b>Rating:</b> {movie.rate} ★</p>
            <Link to={`/${transformTitle(movie.title)}`}>
                <button>More Details...</button>
            </Link>
        </div>
    );
}

export default MovieCard;