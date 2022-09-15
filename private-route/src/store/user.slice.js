import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, login } from "../services/auth.service";

export const loginAsync = createAsyncThunk(
    "login",
    async (user, { fulfillWithValue, rejectWithValue }) => {
        return login(user)
            .then(({ data, headers }) => {
                localStorage.setItem(
                    "token",
                    headers["authorization"].split(" ")[1]
                );

                return fulfillWithValue(data);
            })
            .catch((err) => rejectWithValue(err.response.data));
    }
);

export const getUserAsync = createAsyncThunk(
    "getUser",
    async (_, { fulfillWithValue, rejectWithValue }) => {
        return getUser()
            .then(({ data }) => fulfillWithValue(data))
            .catch((err) => rejectWithValue(err.response.data));
    }
);

export const logoutAsync = createAsyncThunk(
    "logout",
    async (_, { fulfillWithValue, rejectWithValue }) => {
        localStorage.removeItem("token");

        fulfillWithValue();
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        logout(state, action) {},
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            return action.payload;
        });

        builder.addCase(getUserAsync.fulfilled, (state, action) => {
            return action.payload;
        });

        builder.addCase(logoutAsync.fulfilled, (state, action) => {
            return null;
        });
    },
});

export default userSlice.reducer;
export const { logginSuccess } = userSlice.actions;

export const selectUser = (state) => state.user;
