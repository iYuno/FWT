import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../../shared/api/base';
import { ErrorType, RejectedDataType } from '../../../../shared/api/types/errorTypes';
import { IPainting } from '../../../../shared/api/painting/types';
import { IPaintingParams } from '../../../../shared/api/painting/painting';

interface IFetchSearch extends IPaintingParams {}

const fetchPaintingsFillteredList = createAsyncThunk<IPainting[], IFetchSearch, { readonly rejectValue: RejectedDataType }>('paintings/fetchFillteredList  ', async ({
  _gte, _lte, id, q, _page, _limit,
}, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/paintings?${_gte ? `_gte=${_gte}` : ''}&${_lte ? `_lte=${_lte}` : ''}&${id ? `id=${id}` : ''}&${q ? `q=${q}` : ''}&${_page ? `_page=${_page}` : ''}&${_limit ? `_limit=${_limit}` : ''}`);
    return response.data;
  } catch (err: unknown) {
    const knownError = err as ErrorType;
    return thunkAPI.rejectWithValue({
      messageError: knownError.message,
      status: knownError.response?.status,
    });
  }
});

export default fetchPaintingsFillteredList;
