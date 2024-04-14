import { PayloadAction } from '@reduxjs/toolkit';

import { CityData, Forecast } from '../types/api';

export interface IInitialState {
  searchList: CityData[];
  selectedCities: Forecast[];
  status: string | null;
  error: string | null;
}

export const handlePending = (state: IInitialState) => {
  state.status = 'loading';
  state.error = null;
};

export const handleFulfilled = (state: IInitialState, action: PayloadAction<any>) => {
  state.status = 'resolved';
};

export const handleRejected = (state: IInitialState, action: PayloadAction<any>) => {
  state.status = 'rejected';
  state.error = action.payload;
};
