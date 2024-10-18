import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery, { BASE_URL } from "../base";
import { IPainting } from "./types";

const API_URL = "/paintings";
export interface IPaintingParams {
  _gte?: string;
  _lte?: string;
  id?: number;
  q?: string | null;
  _page?: number;
  _limit?: number;
  authorId?: number;
  locationId?: number;
}

export const paintingApi = createApi({
  reducerPath: "paintingApi",
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: build => ({
    fetchPaintings: build.query<
      { paintings: IPainting[]; totalCountPaintings: number },
      IPaintingParams
    >({
      query: ({ _gte, _lte, id, q, _page, _limit, authorId, locationId }) => ({
        url: `${API_URL}?${_gte ? `_gte=${_gte}` : ""}&${_lte ? `_lte=${_lte}` : ""}&${id ? `id=${id}` : ""}&${q ? `q=${q}` : ""}&${_page ? `_page=${_page}` : ""}&${_limit ? `_limit=${_limit}&` : ""}&${authorId ? `authorId=${authorId}&` : ""}&${locationId ? `locationId=${locationId}` : ""}`,
      }),
      transformResponse: (
        response: IPainting[],
        meta: { headers: { "x-total-count": number } },
      ) => ({
        paintings: response,
        totalCountPaintings: meta?.headers["x-total-count"],
      }),
    }),
  }),
});

export const { useFetchPaintingsQuery } = paintingApi;
