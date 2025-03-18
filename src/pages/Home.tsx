import { useContext } from "react";
import MovieList from "../components/MovieList/MovieList";
import { mainContext } from "../context/MainProvider";

const Home = () => {
    const {movies} = useContext(mainContext) as any

    return (  
        <section className="moviesWrapper grid">
            <MovieList movieArray={movies.filteredMovies}/>
        </section>
    );
}

export default Home;