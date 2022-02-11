import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import { Movies, Movie, About } from "./components";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        index
                        element={
                            <main>
                                <h2>Welcome! 😊</h2>
                            </main>
                        }
                    ></Route>

                    <Route path="movies" element={<Movies />}>
                        <Route index element={<h3>Select a movie</h3>}></Route>
                        <Route path=":id" element={<Movie />}></Route>
                    </Route>

                    <Route path="about" element={<About />}></Route>

                    <Route
                        path="*"
                        element={
                            <main>
                                <h2>Absolutely nothing here...</h2>
                                <p>
                                    Go back to <Link to="/">Homepage</Link>
                                </p>
                            </main>
                        }
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
