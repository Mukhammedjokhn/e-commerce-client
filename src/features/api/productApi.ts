import { apiSlice } from "./apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<
            ProductData[],
            { type?: "today" | "our-product" | "for-you" | "month" | "all" }
        >({
            query: ({ type } = {}) => ({
                url: `/get/product${type ? `?type=${type}` : ""}`,
                method: "GET"
            }),
            transformResponse: (response: TransformResponseData) => {
                return response.innerData;
            },
            providesTags: ["AUTH", "PRODUCT"]
        })
    })
});

export const { useGetProductsQuery } = productApi;
