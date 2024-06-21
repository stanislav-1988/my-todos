import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  Authorization, FirstPage, Header, Loader, Registration, TodoCreate,
  TooltipPopup,
} from '../modules';
import { TodosPage } from '../modules/TodosPage/TodosPage';
import { ROUTES } from '../providers';
import loonaStore from '../store/myStore';
import styles from './App.module.scss';

export const App: FC = observer(() => {
  const { isLoading } = loonaStore;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.body}>
      <Header />
      <Routes>
        <Route path={ROUTES.ROOT_ROUTE} element={<FirstPage />} />
        <Route path={ROUTES.AUTHORIZATION_ROUTE} element={<Authorization />} />
        <Route path={ROUTES.REGISTRATION_ROUTE} element={<Registration />} />
        <Route path={ROUTES.CREATE_TODO_PAGE_ROUTE} element={<TodoCreate />} />
        <Route path={ROUTES.MY_TODO_PAGE_ROUTE} element={<TodosPage />} />
        <Route path="*" element={<FirstPage />} />
      </Routes>
      <TooltipPopup />
    </div>
  );
});
