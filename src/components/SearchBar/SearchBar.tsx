import React, { useEffect, useRef } from 'react';

import { SCREEN_TYPES } from '../../hooks/useScreenSizeHook/useScreenSizeHook';
import { CityData } from '../../types/api';

import { DefaultElement, Input, List, ListElement, ListImg, ListWrapper, Wrapper } from './styles';

interface ISearchBar {
  value: string;
  handleChange: (value: string) => void;
  searchList: CityData[];
  handleClick: (cityId: number) => void;
  screenType: SCREEN_TYPES;
}

const SearchBar = ({ value, handleChange, searchList, handleClick, screenType }: ISearchBar) => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Wrapper screenType={screenType}>
      <Input
        placeholder="Search for a city ..."
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        ref={inputRef}
        className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-l' : 'text-l-mob'}`}
        screenType={screenType}
      />

      <ListWrapper visibility={value.length > 0} screenType={screenType}>
        {(value.length > 0 && searchList.length === 0) ? (
          <DefaultElement screenType={screenType}
                          className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-m' : 'text-m-mob'}`}>
            Nothing found
          </DefaultElement>
        ) : (
          <List>
            {searchList.map((result, index, array) => (
              <ListElement key={result.id} onClick={() => handleClick(result.id)}
                           withMargin={index !== array.length - 1} screenType={screenType}
                           className={`${screenType === SCREEN_TYPES.DESKTOP ? 'text-m' : 'text-m-mob'}`}>
                <span>{result.name}</span>
                <ListImg
                  src={`https://openweathermap.org/images/flags/${result.sys.country.toLowerCase()}.png`}
                  alt="Flag" title="Flag" aria-label="Flag"
                  screenType={screenType}
                />
              </ListElement>
            ))}
          </List>
        )}
      </ListWrapper>
    </Wrapper>
  );
};

export default SearchBar;
