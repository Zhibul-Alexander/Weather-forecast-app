import styled from 'styled-components';
import { SCREEN_TYPES } from '../../hooks/useScreenSizeHook/useScreenSizeHook';

export const Wrapper = styled.button<{ screenType: SCREEN_TYPES }>`
    position: relative;
    top: 0;
    left: 0;

    background-color: #C5DFE6;

    border-radius: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? 0.8 : 1.6}vw;

    border: 1px solid #66A5AD;
    outline: 0;
    margin: 0;
    padding: ${({ screenType }) => screenType === SCREEN_TYPES.DESKTOP ? '0.4vw 0.8vw' : '1.6vw 3.2vw'};
    
    text-transform: uppercase;

    transition: all 0.15s linear;

    &:hover {
        transition: all 0.15s linear;

        background-color: #66A5AD;
    }
`;