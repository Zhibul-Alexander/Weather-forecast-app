import React, { CSSProperties } from 'react';

import { LoaderContainer } from './styles';

export interface ILoader {
  size?: number;
  borderWidth?: number;
  color?: string;
  style?: CSSProperties;
}

const Loader = ({ size, borderWidth, color, style }: ILoader) => {
  return <LoaderContainer size={size} borderWidth={borderWidth} color={color} style={style} />;
};

export default Loader;
