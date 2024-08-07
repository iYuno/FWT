import { createApi } from '@reduxjs/toolkit/query/react';
import { ILocation } from './types';
import axiosBaseQuery, { BASE_URL } from '../base';

const API_URL = '/locations';

export interface ILocationParams {

}

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchLocations: build.query<ILocation[], void>({
      query: () => ({
        url: API_URL,
      }),
    }),
  }),
});

export const { useFetchLocationsQuery } = locationApi;
