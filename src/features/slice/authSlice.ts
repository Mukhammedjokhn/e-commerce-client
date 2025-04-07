import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getFromLocalStorage = <T>(key: string): T | null => {
    try {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item) as T;
        }
        return null;
    } catch (error) {
        console.error("Error reading from localStorage", error);
        return null;
    }
};

const updateLocalStorage = (key: string, value: any) => {
    if (value !== null && value !== undefined) {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.removeItem(key);
    }
};

const initialState: AuthState = {
    userData: getFromLocalStorage<string | null>("user_data") || null,
    token: getFromLocalStorage<string | null>("access_token") || null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{
                userData?: string;
                accessToken?: string | null;
            }>
        ) => {
            const { userData, accessToken } = action.payload;

            if (userData !== undefined) {
                state.userData = userData;
            }

            if (accessToken !== undefined) state.token = accessToken;

            updateLocalStorage("user_data", state.userData);
            updateLocalStorage("access_token", state.token);
        },
        logOut: (state) => {
            state.userData = null;
            state.token = null;

            localStorage.removeItem("user_data");
            localStorage.removeItem("access_token");
        }
    }
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUserData = (state: { auth: AuthState }) =>
    state.auth.userData;
export const selectCurrentAccessToken = (state: { auth: AuthState }) =>
    state.auth.token;
