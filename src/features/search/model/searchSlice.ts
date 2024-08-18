import { createSlice } from '@reduxjs/toolkit';
import { ISearchState } from './types';

const initialState: ISearchState = {
  query: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeQuery: (_, action) => ({ query: action.payload }),
    resetQuery: () => ({ query: null }),
  },
});
export const { changeQuery, resetQuery } = searchSlice.actions;
export default searchSlice;
