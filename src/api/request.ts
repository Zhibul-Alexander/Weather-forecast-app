import axios, { Method, AxiosRequestConfig, AxiosError } from 'axios';

const SERVER_PROTO: string = 'https';
const SERVER_URL: string = 'api.openweathermap.org/data/2.5';

const makeRequest = async (method: Method, path: string, data?: any, headers?: any) => {
  try {
    const config: AxiosRequestConfig = { method, url: `${SERVER_PROTO}://${SERVER_URL}${path}`, data, headers };
    return await axios(config);
  } catch (err: AxiosError | any) {
    throw err;
  }
};

export default makeRequest;
