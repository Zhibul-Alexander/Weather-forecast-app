export interface CityList {
    cod: string;
    count: number;
    list: CityData[];
    message: string;
}

export interface CityData {
    id: number;
    clouds: {all: number};
    coord: {lat: number, lon: number};
    dt: number;
    main: Main;
    name: string;
    rain?: any;
    snow?: any;
    sys: {country: string};
    weather: Weather[];
    wind: {speed: number, deg: number};
}

export interface Main {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Forecast {
    city: ForecastCity;
    cnt: number;
    cod: string;
    list: ForecastList[];
    message: string;
}

export interface ForecastCity {
    id: number;
    coord: {lat: number, lon: number};
    country: string
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
}

export interface ForecastList {
    clouds: {all: number};
    dt: number;
    dt_txt: string;
    main: Main;
    pop: number;
    sys: {pod: string};
    visibility: number;
    weather: Weather[];
    wind: {speed: number, deg: number, gust: number};
}