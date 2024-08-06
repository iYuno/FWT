import { createSlice } from '@reduxjs/toolkit';
import { IPaintingList } from './types';
import fetchPaintingsFillteredList from './paintingListThunk';

const initialState: IPaintingList = {
  paintings: [],
  totalCountPaintings: 0,
  isLoading: false,
  error: null,
};

const paintingFilteredListSlice = createSlice({
  name: 'paintingFilteredList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchPaintingsFillteredList.pending,
        (state) => ({ ...state, isLoading: true, error: null }),
      )
      .addCase(
        fetchPaintingsFillteredList.fulfilled,
        (state, action) => ({
          ...state, isLoading: false, error: null, paintings: [...action.payload],
        }),
      )
      .addCase(
        fetchPaintingsFillteredList.rejected,
        (state, action) => (
          { ...state, isLoading: false, error: action.payload ?? null }
        ),
      );
  },
});

export default paintingFilteredListSlice.reducer;
