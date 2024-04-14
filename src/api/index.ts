import { AxiosResponse } from 'axios';

import makeRequest from './request';

import { CityList, Forecast } from '../types/api';

const API_KEY = '1355bf3e695fbdc7c52672a6764db4b9';

export async function getCityList(city: string, units: string = 'metric'): Promise<AxiosResponse<CityList>> {
  return makeRequest('GET', `/find?q=${city}&appid=${API_KEY}&units=${units}`);
}

export async function getForecast(cityId: number): Promise<AxiosResponse<Forecast>> {
  return makeRequest('GET', `/forecast?id=${cityId}&appid=${API_KEY}`);
}