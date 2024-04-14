import React, { useEffect, useState } from 'react';

import useScreenSizeHook, { SCREEN_TYPES } from '../../hooks/useScreenSizeHook/useScreenSizeHook';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks/reduxHooks';

import {
  searchData, forecastData,
  selectState, selectSearchList, selectSelectedCities,
  clearSearchList, clearSelectedCities, removeSelectedCity,
} from '../../store/weatherSlice';

import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../components/Button/Button';
import CityForecastCard from '../../components/CityForecastCard/CityForecastCard';

import { getItem, setItem } from '../../localStorage';
import { LOCAL_STORAGE_NAMES } from '../../localStorage/types';

import { MainWrapper, FullScreenSection, Title, TitleWrapper, ContentWrapper, Text, TextWrapper } from './styles';

const Main = () => {
  const { screenType } = useScreenSizeHook();
  const dispatch = useAppDispatch();

  const initialState = useAppSelector(selectState);
  const searchList = useAppSelector(selectSearchList);
  const selectedCities = useAppSelector(selectSelectedCities);

  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedCitiesId, setSelectedCitiesId] = useState<number[]>([]);

  const handleChange = async (value: string) => {
    setSearchValue(value);
    await dispatch(searchData(value));
  };

  const handleClick = async (cityId: number) => {
    console.log(cityId);
    const isCityAlreadySelected = selectedCitiesId.some(id => id === cityId);
    if (!isCityAlreadySelected) {
      setSelectedCitiesId((prevState) => ([...prevState, cityId]));
      await dispatch(forecastData(cityId));
    }
    setSearchValue('');
    setTimeout(() => dispatch(clearSearchList()), 100);
  };

  const removeCity = (cityId: number) => {
    setSelectedCitiesId(prevState => prevState.filter(id => id !== cityId));
    dispatch(removeSelectedCity(cityId));
  };

  const removeAllCities = () => {
    dispatch(clearSelectedCities());
    setSelectedCitiesId([]);
  };

  useEffect(() => {
    const cities = getItem(LOCAL_STORAGE_NAMES.CITY_IDS);
    if (cities?.length) {
      setSelectedCitiesId(cities ?? []);
      cities.map(cityId => dispatch(forecastData(cityId)));
    }
  }, []);

  useEffect(() => {
    setItem(LOCAL_STORAGE_NAMES.CITY_IDS, selectedCitiesId);
  }, [selectedCitiesId]);

  return (
    <MainWrapper>
      <FullScreenSection screenType={screenType}>
        <ContentWrapper screenType={screenType}>
          <SearchBar value={searchValue} handleChange={handleChange} searchList={searchList}
                     handleClick={handleClick} screenType={screenType} />

          {initialState.error && (
            <TextWrapper screenType={screenType}>
              <Text className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-err' : 'text-err-mob'}`}>
                {initialState.error}
              </Text>
            </TextWrapper>
          )}

          <TitleWrapper screenType={screenType}>
            <Title className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-l' : 'text-l-mob'}`}>
              {selectedCities.length > 0 ? 'List of selected cities:' : 'No selected cities, start searching'}
            </Title>
            {selectedCities.length > 0 &&
              <Button text="Clear list" onClick={removeAllCities}
                      className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-s' : 'text-s-mob'}`} />}
          </TitleWrapper>

          {selectedCities.map((forecast) => (
            <CityForecastCard key={forecast.city.id} forecast={forecast}
                              removeCiteHandler={removeCity} screenType={screenType} />
          ))}
        </ContentWrapper>
      </FullScreenSection>
    </MainWrapper>
  );
};
export default Main;