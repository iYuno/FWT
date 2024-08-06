import { createApi } from '@reduxjs/toolkit/query';

import { IAuthors } from './types';
import axiosBaseQuery, { BASE_URL } from '../base';

const API_URL = '/authors';

const authorApi = createApi({
  reducerPath: 'authorApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchAuthors: build.query<IAuthors[], void>({
      query: () => ({ url: API_URL }),
    }),
  }),
});

export default authorApi;
