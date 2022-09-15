import axios from "axios";

export const login = (user) => {
    return axios.post("/api/login", user);
};

export const getUser = () => {
    return axios.get("/api/user", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
};
