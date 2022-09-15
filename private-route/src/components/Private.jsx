import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Private = (props) => {
    const user = useAuth();

    if (!user)
        return (
            <div>
                You must log in
                <Link to="/login">Login</Link>
            </div>
        );

    return props.children;
};

export default Private;
