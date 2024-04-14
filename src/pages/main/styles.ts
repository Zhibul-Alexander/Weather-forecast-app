import styled from 'styled-components';
import { SCREEN_TYPES } from '../../hooks/useScreenSizeHook/useScreenSizeHook';

export const MainWrapper = styled.main`
    overflow: hidden;
`;

export const FullScreenSection = styled.section<{ screenType: SCREEN_TYPES }>`
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    height: 100%;

    min-width: 100vw;
    min-height: 100vh;

    padding: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.4 : 4}vw;

    box-sizing: border-box;

    background: linear-gradient(to bottom, #b4d9ff, #4d94ff);
`;

export const ContentWrapper = styled.div<{ screenType: SCREEN_TYPES }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    max-width: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 60 : 100}vw;
`;

export const TitleWrapper = styled.div<{ screenType: SCREEN_TYPES }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? '0 0 0.8vw 0' : '0 0 3.2vw 0'};

    box-sizing: border-box;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 0;
`;

export const TextWrapper = styled.div<{ screenType: SCREEN_TYPES }>`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;

    margin: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? '0 0 0.8vw 0' : '0 0 3.2vw 0'};

    box-sizing: border-box;
`;

export const Text = styled.span`
    margin: 0;
    padding: 0;
`;