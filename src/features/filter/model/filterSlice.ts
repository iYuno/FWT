import { createSlice } from '@reduxjs/toolkit';
import { IFilterState } from './types';

const initialState: IFilterState = {
  locationId: null,
  authorId: null,
  from: null,
  to: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (_, action) => ({ ...action.payload }),
    resetFilter: () => ({ ...initialState }),
  },
});

export const {
  changeFilter, resetFilter,
} = filterSlice.actions;
export default filterSlice;
