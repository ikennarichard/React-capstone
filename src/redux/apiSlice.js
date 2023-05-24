/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '51eb6c864043a938f7a0f0cb93194722';

export const getCityDetail = createAsyncThunk('details', async (cords) => {
  try {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${cords[0]}&lon=${cords[1]}&appid=${apiKey}`);
    return res.data.list;
  } catch (e) {
    throw new Error(e);
  }
});
