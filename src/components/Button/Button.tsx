import React from 'react';

import useScreenSizeHook from '../../hooks/useScreenSizeHook/useScreenSizeHook';

import { Wrapper } from './styles';

interface IButton {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: IButton) => {
  const { screenType } = useScreenSizeHook();

  return (
    <Wrapper onClick={onClick} className={className} screenType={screenType}
             title={text} aria-label={text}>
      {text}
    </Wrapper>
  );
};

export default Button;