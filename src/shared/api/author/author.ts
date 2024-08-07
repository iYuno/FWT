import { createApi } from '@reduxjs/toolkit/query/react';
import { IAuthors } from './types';
import axiosBaseQuery, { BASE_URL } from '../base';

const API_URL = '/authors';

export const authorApi = createApi({
  reducerPath: 'authorApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchAuthors: build.query<IAuthors[], void>({
      query: () => ({ url: API_URL }),
    }),
  }),
});

export const { useFetchAuthorsQuery } = authorApi;
