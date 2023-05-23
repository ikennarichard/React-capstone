/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './details/detailsSlice';

export const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});
