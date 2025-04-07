import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data: SignUpDataType) => ({
                url: "/sign-up",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["AUTH", "PRODUCT"]
        }),
        signIn: builder.mutation({
            query: (data: SignInDataType) => ({
                url: "/sign-in",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["AUTH", "PRODUCT"]
        }),
        adminLogin: builder.mutation({
            query: (data: SignInDataType) => ({
                url: "/admin",
                method: "POST",
                body: data
            })
        }),
        userProfile: builder.query({
            query: () => ({
                url: "/user/profile",
                method: "GET"
            }),
            transformResponse: (response: TransformResponseData) =>
                response.innerData,
            providesTags: ["AUTH"]
        })
    })
});

export const {
    useAdminLoginMutation,
    useSignUpMutation,
    useSignInMutation,
    useUserProfileQuery
} = authApi;
