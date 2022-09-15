import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAsync } from "../store/user.slice";

const Login = () => {
    const dispatch = useDispatch();
    const form = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: form.current.elements.username.value,
            password: form.current.elements.password.value,
        };

        dispatch(loginAsync(data))
            .unwrap()
            .then((res) => {
                navigate("/");
            })
            .catch((res) => {
                console.log(res);
            });
    };

    return (
        <form name="login" onSubmit={handleSubmit} ref={form}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default Login;
