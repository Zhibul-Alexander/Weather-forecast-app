import React from 'react';

import Button from '../Button/Button';

import { Forecast, ForecastList } from '../../types/api';

import { SCREEN_TYPES } from '../../hooks/useScreenSizeHook/useScreenSizeHook';

import { Element, ElementImg, List, ListElement, Title, TitleWrapper, Wrapper } from './styles';

interface ICityForecastCard {
  forecast: Forecast;
  removeCiteHandler: (cityId: number) => void;
  screenType: SCREEN_TYPES;
}

const CityForecastCard = ({ forecast, removeCiteHandler, screenType }: ICityForecastCard) => {
  const parseWeather = (item: ForecastList, withMargin: boolean) => {
    const temperatureCelsius = item.main.temp - 273.15;
    const date = new Date(item.dt_txt);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
    const dayOfWeek = date.toLocaleDateString('en-GB', { weekday: 'short' });

    return (
      <ListElement key={item.dt} withMargin={withMargin} screenType={screenType}
                   className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-s' : 'text-s-mob'}`}>
        <Element screenType={screenType}>{formattedDate} ({dayOfWeek})</Element>
        <Element screenType={screenType}>Temperature: {temperatureCelsius.toFixed(1)}°C</Element>
        <Element style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                 screenType={screenType}>
          <ElementImg src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      title={item.weather[0].description} alt={item.weather[0].description}
                      aria-label={item.weather[0].description} />
        </Element>
      </ListElement>
    );
  };

  return (
    <Wrapper screenType={screenType}>
      <TitleWrapper screenType={screenType}>
        <Title className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-m' : 'text-m-mob'}`}>
          {forecast.city.name}
        </Title>
        <Button onClick={() => removeCiteHandler(forecast.city.id)} text="Remove"
                className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-s' : 'text-s-mob'}`} />
      </TitleWrapper>
      <List>
        {forecast.list.filter((item) => {
          const date = new Date(item.dt_txt);
          const hours = date.getHours();
          return hours >= 10 && hours <= 14;
        }).map((item, index, array) => parseWeather(item, index !== array.length - 1))}
      </List>
    </Wrapper>
  );
};

export default CityForecastCard;
