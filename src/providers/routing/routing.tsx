import React, { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from '../../App';
import { ROUTES } from './routing.routes';

export const Routing: FC<PropsWithChildren> = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.ROOT_ROUTE} element={(<App />)} />
    </Routes>
  </BrowserRouter>
);
