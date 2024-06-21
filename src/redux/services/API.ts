// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// all apis
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://gnews.io/api/v4",
  }),
  endpoints: (builder) => ({
    // get headlines api
    getHeadline: builder.query({
      query: (filter) => ({
        url: "/top-headlines",
        method: "GET",
        params: filter,
      }),
     
    }),
    

    
  }),
});

export const { useGetHeadlineQuery } = baseApi;
