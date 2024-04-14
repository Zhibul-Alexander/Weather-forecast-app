import { createAsyncThunk, buildCreateSlice, asyncThunkCreator, PayloadAction } from '@reduxjs/toolkit';

import { IInitialState, handlePending, handleFulfilled, handleRejected } from './sliceUtils';

import { CityData, Forecast } from '../types/api';
import { getCityList, getForecast } from '../api';

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const searchData = createAsyncThunk<CityData[], string>(
  'weather/searchData',
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await getCityList(city);
      return response.data.list;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);

export const forecastData = createAsyncThunk<Forecast[], number>(
  'weather/forecastData',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await getForecast(id);
      return [response.data];
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);

const initialState: IInitialState = {
  searchList: [],
  selectedCities: [],
  status: null,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  selectors: {
    selectState: (state) => state,
    selectSearchList: (state) => state.searchList,
    selectSelectedCities: (state) => state.selectedCities,
  },
  reducers: (create) => ({
    clearSearchList: create.reducer((state: IInitialState) => {
      state.searchList = [];
    }),
    clearSelectedCities: create.reducer((state: IInitialState) => {
      state.selectedCities = [];
    }),
    removeSelectedCity: create.reducer((state: IInitialState, action: PayloadAction<number>) => {
      state.selectedCities = state.selectedCities.filter(city => city.city.id !== action.payload);
    }),
  }),
  extraReducers: (builder) => {
    builder
      .addCase(searchData.pending, handlePending)
      .addCase(searchData.fulfilled, (state: IInitialState, action: PayloadAction<CityData[]>) => {
        handleFulfilled(state, action);
        state.searchList = action.payload;
      })
      .addCase(forecastData.pending, handlePending)
      .addCase(forecastData.fulfilled, (state: IInitialState, action: PayloadAction<Forecast[]>) => {
        handleFulfilled(state, action);
        state.selectedCities = [...state.selectedCities, ...action.payload];
      })
      .addCase(forecastData.rejected, handleRejected);
  },
});

export const { selectState, selectSearchList, selectSelectedCities } = weatherSlice.selectors;
export const { clearSearchList, clearSelectedCities, removeSelectedCity } = weatherSlice.actions;

export default weatherSlice.reducer;