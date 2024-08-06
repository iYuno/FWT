// import { createSlice } from '@reduxjs/toolkit';
// import { ISearchState } from './types';
// import fetchSearch from './searchThunk';

// const initialState: ISearchState = {
//   paintings: null,
//   isLoading: false,
//   error: null,
// };

// const searchSlice = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSearch.pending, (state) => ({ ...state, isLoading: true, error: null }))
//       .addCase(fetchSearch.fulfilled, (state, action) => ({
//         ...state, isLoading: false, error: null, paintings: [...action.payload],
//       }))
//       .addCase(fetchSearch.rejected, (state, action) => (
//         { ...state, isLoading: false, error: action.payload ?? null }
//       ));
//   },
// });

// export default searchSlice.reducer;
