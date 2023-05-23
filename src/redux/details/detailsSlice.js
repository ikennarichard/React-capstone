import { createSlice } from '@reduxjs/toolkit';
import getCityDetail from '../apiSlice';
import states from '../../states.json';

const initialState = {
  details: [],
  isLoading: false,
  cities: states,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCityDetail.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCityDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
    });

    builder.addCase(getCityDetail.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default detailsSlice.reducer;
