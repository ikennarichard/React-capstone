/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'bd7c27981397af9e6b8c6a649e6bf51a';

export const getCityDetail = createAsyncThunk('details', async (cords) => {
  try {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${cords[0]}&lon=${cords[1]}&appid=${apiKey}`);
    return res.data.list;
  } catch (e) {
    throw new Error(e);
  }
});
