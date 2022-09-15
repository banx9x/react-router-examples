import { useSelector } from "react-redux";
import { selectUser } from "../store/user.slice";

export const useAuth = () => {
    const user = useSelector(selectUser);

    return user;
};
