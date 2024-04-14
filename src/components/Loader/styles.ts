import styled, { css } from 'styled-components';

export const LoaderContainer = styled.div<{ size?: number, borderWidth?: number, color?: string }>`
    display: inline-block;

    ${({ size, borderWidth, color }) => css`
        ${size
                ? css`
                    width: ${size}px;
                    height: ${size}px;
                `
                : css`
                    width: 48px;
                    height: 48px;
                `}
        ${borderWidth || color
                ? css`
                    border: ${borderWidth || 5}px solid ${color || '#07575B'};
                `
                : css`
                    border: 5px solid #07575B;
                `}
    `};

    border-bottom-color: transparent;
    border-radius: 50%;

    box-sizing: border-box;

    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;