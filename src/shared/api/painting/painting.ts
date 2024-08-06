import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery, { BASE_URL } from '../base';
import { IPaintings } from './types';

const API_URL = '/paintings';
export interface IPaintingsParams {
  _gte?: string;
  _lte?: string;
  id?: number;
  q?: string;
  _page?: number;
  _limit?: number;
}

export const paintingApi = createApi({
  reducerPath: 'paintingApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchPaintings: build.query<IPaintings[], IPaintingsParams>({
      query: ({
        _gte, _lte, id, q, _page, _limit,
      }) => ({
        url: `${API_URL}?${_gte ? `_gte=${_gte}` : ''}&${_lte ? `_lte=${_lte}` : ''}&${id ? `id=${id}` : ''}&${q ? `q=${q}` : ''}&${_page ? `_page=${_page}` : ''}&${_limit ? `_limit=${_limit}` : ''}`,
      }),
    }),
  }),
});

export const { useFetchPaintingsQuery } = paintingApi;
