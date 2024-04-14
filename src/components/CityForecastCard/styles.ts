import styled from 'styled-components';
import { SCREEN_TYPES } from '../../hooks/useScreenSizeHook/useScreenSizeHook';

export const Wrapper = styled.div<{ screenType: SCREEN_TYPES }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;

    margin: ${({ screenType }) => (screenType === SCREEN_TYPES.DESKTOP ? '0 0 0.8vw 0' : '0 0 3.6vw 0')};
`;

export const TitleWrapper = styled.div<{ screenType: SCREEN_TYPES }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: ${({ screenType }) => (screenType === SCREEN_TYPES.DESKTOP ? '0 0 0.8vw 0' : '0 0 3.6vw 0')};
`;

export const Title = styled.h2`
    margin: 0;
    padding: 0;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;

    padding: 0;
    margin: 0;

    box-sizing: border-box;
`;

export const ListElement = styled.li<{ withMargin: boolean, screenType: SCREEN_TYPES }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background-color: #FFFFFF;

    border: 1px solid #66A5AD;
    border-radius: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.8 : 1.6}vw;

    padding: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? '0.8vw 1.6vw' : '3.2vw'};
    margin: ${({ withMargin, screenType }) =>
            (withMargin ? `${screenType === SCREEN_TYPES.DESKTOP ? '0 0 0.4vw 0' : '0 0 1.6vw 0'}` : '0')};

    box-sizing: border-box;
`;

export const Element = styled.div<{ screenType: SCREEN_TYPES }>`
    margin: ${({ screenType }) => (screenType === SCREEN_TYPES.DESKTOP ? '0 0.4vw 0 0' : '0 1.6vw 0 0')};

    box-sizing: border-box;
`;

export const ElementImg = styled.img`
    width: 100%;
    height: auto;
`;