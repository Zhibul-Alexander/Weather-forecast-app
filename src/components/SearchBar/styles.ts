import styled from 'styled-components';
import { SCREEN_TYPES } from '../../hooks/useScreenSizeHook/useScreenSizeHook';

export const Wrapper = styled.div<{ screenType: SCREEN_TYPES }>`
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    height: 100%;

    margin: ${({ screenType }) => (screenType === SCREEN_TYPES.DESKTOP ? '0 0 0.8vw 0' : '0 0 3.6vw 0')};
`;

export const Input = styled.input<{ screenType: SCREEN_TYPES }>`
    width: 100%;
    height: ${({ screenType }) => (screenType === SCREEN_TYPES.DESKTOP ? 3.4 : 12)}vw;

    border: 1px solid #66A5AD;
    border-radius: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.8 : 1.6}vw;

    padding: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? '0.4vw 1.6vw' : '1.6vw 6.4vw'};
    margin: 0;
    outline: none;

    box-sizing: border-box;

    transition: all 0.15s linear;

    &:focus {
        transition: all 0.15s linear;

        border-color: #003B46;
    }
`;

export const ListWrapper = styled.div<{ visibility: boolean, screenType: SCREEN_TYPES }>`
    position: absolute;
    top: ${({ screenType }) => (screenType === SCREEN_TYPES.DESKTOP ? 3.8 : 13.6)}vw;
    left: 0;

    width: 100%;

    background-color: #66A5AD;

    border-radius: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.8 : 1.6}vw;

    padding: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.8 : 3.2}vw;

    box-sizing: border-box;

    transition: all 0.15s linear;

    visibility: ${({ visibility }) => (visibility ? 'visible' : 'hidden')};
    opacity: ${({ visibility }) => (visibility ? 1 : 0)};
    pointer-events: ${({ visibility }) => (visibility ? 'all' : 'none')};
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
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    background-color: #FFFFFF;

    border: 1px solid #66A5AD;
    border-radius: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.8 : 1.6}vw;

    padding: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.8 : 3.2}vw;
    margin: ${({ withMargin, screenType }) =>
            (withMargin ? `${screenType === SCREEN_TYPES.DESKTOP ? '0 0 0.4vw 0' : '0 0 1.6vw 0'}` : '0')};

    cursor: pointer;

    box-sizing: border-box;

    transition: all 0.15s linear;

    &:hover {
        transition: all 0.15s linear;

        background-color: #C5DFE6;
    }
`;

export const ListImg = styled.img<{ screenType: SCREEN_TYPES }>`
    width: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 1.2 : 3.6}vw;

    margin: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? '0 0 0 0.4vw' : '0 0 0 1.6vw'};
`;

export const DefaultElement = styled.span<{ screenType: SCREEN_TYPES }>`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    background-color: #FFFFFF;

    border: 1px solid #66A5AD;
    border-radius: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.8 : 1.6}vw;

    padding: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? '0.8vw 1.6vw' : '3.2vw'};
    margin: 0;

    box-sizing: border-box;
`;
