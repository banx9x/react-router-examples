import { NavLink, Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <h1>Movies Wiki</h1>

            <nav>
                <ul>
                    <li>
                        <NavLink
                            to=""
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "brown" : "salmon",
                                };
                            }}
                        >
                            Homepage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="movies"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "brown" : "salmon",
                                };
                            }}
                        >
                            Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="about"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "brown" : "salmon",
                                };
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
            {/* Route index */}
        </div>
    );
};

export default App;
