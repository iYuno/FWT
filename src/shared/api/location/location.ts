import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery, { BASE_URL } from "../base";
import { ILocation } from "./types";

const API_URL = "/locations";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: build => ({
    fetchLocations: build.query<ILocation[], void>({
      query: () => ({
        url: API_URL,
      }),
    }),
  }),
});

export const { useFetchLocationsQuery } = locationApi;
