import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { logoutAsync } from "../store/user.slice";

const User = () => {
    const dispatch = useDispatch();
    const user = useAuth();

    if (!user) return <Link to="/login">Đăng nhập</Link>;

    const handleClick = () => {
        dispatch(logoutAsync());
    };

    return (
        <div>
            {user.fullname}
            <Link to="/admin">Admin page</Link>

            <button onClick={handleClick}>Logout</button>
        </div>
    );
};

export default User;
