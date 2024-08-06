import { createApi } from '@reduxjs/toolkit/query';
import { ILocations } from './types';
import axiosBaseQuery, { BASE_URL } from '../base';

const API_URL = '/locations';

const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchLocations: build.query<ILocations[], void>({
      query: () => ({ url: API_URL }),
    }),
  }),
});

export default locationApi;
