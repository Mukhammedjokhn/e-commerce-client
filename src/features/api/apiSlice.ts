import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        const token = state.auth?.token;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        return headers;
    }
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ["AUTH", "PRODUCT"],
    endpoints: () => ({})
});
