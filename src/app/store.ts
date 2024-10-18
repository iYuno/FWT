import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "@/features/filter";
import { searchSlice } from "@/features/search";
import { authorApi } from "@/shared/api/author/author";
import { locationApi } from "@/shared/api/location/location";
import { paintingApi } from "@/shared/api/painting/painting";

export const store = configureStore({
  reducer: {
    [paintingApi.reducerPath]: paintingApi.reducer,
    [authorApi.reducerPath]: authorApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    search: searchSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(paintingApi.middleware)
      .concat(authorApi.middleware)
      .concat(locationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
