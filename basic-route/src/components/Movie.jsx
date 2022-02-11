import {
    Link,
    useParams,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import { getMovieById, deleteMovieById } from "../db/movies";

const Movie = () => {
    const { id } = useParams();
    const movie = getMovieById(id);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    if (!movie) {
        return <h3>Movie not found</h3>;
    }

    return (
        <div>
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Description: {movie.description}</p>
            <p>
                Genres:{" "}
                {movie.genres.map((genre) => (
                    <span key={genre} style={{ marginRight: "5px" }}>
                        <Link to={"/movies?genre=" + genre}>{genre}</Link>
                    </span>
                ))}
            </p>

            <button
                onClick={() => {
                    deleteMovieById(movie.id);
                    navigate("/movies");
                }}
            >
                Delete this movie
            </button>
        </div>
    );
};

export default Movie;
