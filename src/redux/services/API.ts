// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// all apis
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://newsapi.org/v2",
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
    // get everything api
    getEverything: builder.query({
      query: (filter) => ({
        url: "/everything",
        method: "GET",
        params: filter,
      }),
     
    }),
    // get all sources api
    getSources: builder.query({
      query: (filter) => ({
        url: "/sources",
        method: "GET",
        params: filter,
      }),
     
    }),
    
  }),
});

export const { useGetHeadlineQuery,useGetEverythingQuery,useGetSourcesQuery } = baseApi;
