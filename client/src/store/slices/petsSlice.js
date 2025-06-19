import { createSlice } from '@reduxjs/toolkit';

const PET_SLICE_NAME = 'pets';

const initialState = {
  pets: [],
  petstype: [],
  isFetching: false,
  error: null,
};

const petsSlice = createSlice({
  name: PET_SLICE_NAME,
  initialState,
  extraReducers: (builder) => {},
});

const { reducer } = petsSlice;

export default reducer;
