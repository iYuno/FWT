import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPaintingsParams } from '../../../shared/api/painting/painting';
import { RejectedDataType, ErrorType } from '../../../shared/api/types/errorTypes';
import { IPainting } from '../../../shared/api/painting/types';

interface IFetchSearch extends IPaintingsParams {}

const fetchPaintingsList = createAsyncThunk<IPainting[], IFetchSearch, { readonly rejectValue: RejectedDataType }>('paintings/fetchSearch', ({
  q, _page, _limit, _gte, _lte, id,
}, thunkAPI) => {
  try {
    const response = getPaintings({
      q, _page, _limit, _gte, _lte, id,
    });
    return response;
  } catch (err: unknown) {
    const knownError = err as ErrorType;

    return thunkAPI.rejectWithValue({
      messageError: knownError.message,
      status: knownError.response?.status,
    });
  }
});

// // const paintingsApi = createApi({
// //   reducerPath: 'paintingsApi',
// //   baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
// //   endpoints: (build) => ({
// //     getPaintings: build.query<IPaintings[], IFetchSearch>({
// //       query: ({
// //         q, _page, _limit, _gte, _lte, id,
// //       }) => `paintings?${q ? `q=${q}` : ''}&${_page ? `_page=${_page}` : ''}&${_limit ? `_limit=${_limit}` : ''}&${_gte ? `_gte=${_gte}` : ''}&${_lte ? `_lte=${_lte}` : ''}&${id ? `id=${id}` : ''}`,
// //     }),
// //   }),
// // });

// export default fetchSearch;
