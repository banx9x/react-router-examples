import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { useAuth } from "./hooks/useAuth";
import { getUserAsync } from "./store/user.slice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAsync());
    }, []);

    return (
        <div className="App">
            <Nav />

            <Outlet />
        </div>
    );
}

export default App;
