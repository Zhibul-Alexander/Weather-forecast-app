import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { IRoute, publicRoutes } from './routes/routes';

import Loader from './components/Loader/Loader';

import './index.css';

const loading = (
  <div className="loader-container">
    <Loader size={64} borderWidth={6} />
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={loading}>
        <Routes>
          {publicRoutes.map((route: IRoute, idx) => route.element &&
            <Route key={idx} path={route.path} element={<route.element />} />)}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
