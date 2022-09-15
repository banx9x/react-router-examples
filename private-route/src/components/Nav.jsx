import React from "react";
import { Link } from "react-router-dom";
import User from "./User";

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>

            <User />
        </nav>
    );
};

export default Nav;
