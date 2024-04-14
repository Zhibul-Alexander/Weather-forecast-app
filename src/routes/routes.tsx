import React from 'react';

const Main = React.lazy(() => import('../pages/main'));

export interface IRoute {
  path: string;
  exact: boolean;
  name: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
}

export const publicRoutes: IRoute[] = [
  { path: '*', exact: true, name: 'Main', element: Main },
];