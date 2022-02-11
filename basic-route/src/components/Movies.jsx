import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getMovies } from "../db/movies";

const Movies = () => {
    const movies = getMovies();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <main>
            <h2>Movies</h2>

            <input
                type="text"
                placeholder="Search by title"
                value={searchParams.get("title") || ""}
                onChange={(e) => {
                    const title = e.target.value.toLowerCase();

                    if (title.trim())
                        setSearchParams({ ...searchParams.entries(), title });
                    else setSearchParams({});
                }}
            />

            {searchParams.has("title") && (
                <p>Search by title: {searchParams.get("title")}</p>
            )}

            {searchParams.has("genre") && (
                <p>Search by genre: {searchParams.get("genre")}</p>
            )}

            <ul>
                {movies
                    .filter((movie) => {
                        const title = searchParams.get("title");

                        if (!title) return true;
                        else return movie.title.toLowerCase().includes(title);
                    })
                    .filter((movie) => {
                        const genre = searchParams.get("genre");

                        if (!genre) return true;
                        else return movie.genres.includes(genre);
                    })
                    .map(({ id, title }) => (
                        <li key={id}>
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "darkgreen" : "pink",
                                    };
                                }}
                                to={String(id)}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
            </ul>

            <Outlet />
        </main>
    );
};

export default Movies;
