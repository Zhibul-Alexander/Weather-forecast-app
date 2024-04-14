import { useEffect, useState } from 'react';

export enum SCREEN_TYPES {
  DESKTOP,
  MOBILE,
  TABLET,
}

const getWindowDimensions = () => ({ width: window.innerWidth, height: window.innerHeight });

const useScreenSizeHook = () => {
  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>(getWindowDimensions());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | number;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowDimensions(getWindowDimensions()), 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let screenType;
  if ((windowDimensions.width / 120) * 100 < windowDimensions.height) {
    if (windowDimensions.width < 1050 && windowDimensions.width >= 500) {
      screenType = SCREEN_TYPES.TABLET;
    } else {
      screenType = SCREEN_TYPES.MOBILE;
    }
  } else {
    screenType = SCREEN_TYPES.DESKTOP;
  }

  return { screenType };
};

export default useScreenSizeHook;

