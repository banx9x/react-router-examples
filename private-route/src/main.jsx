import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Login from "./page/Login";
import Home from "./page/Home";
import Admin from "./page/Admin";

import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
    worker.start({
        onUnhandledRequest: "bypass",
        waitUntilReady: true,
    });
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/admin" element={<Admin />}></Route>
                    </Route>
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
