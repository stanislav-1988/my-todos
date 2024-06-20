import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Authorization, Header, Registration } from '../modules';
import { FirstPage } from '../modules/FirstPage';
import { Loader } from '../modules/Loader';
import { ROUTES } from '../providers';
import loonaStore from '../store/myStore';
import styles from './App.module.scss';

export const App = observer(() => {
  const {
    isLoading, setIsLoading,
  } = loonaStore;
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isLoading, setIsLoading]);

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
        <Route path="*" element={<FirstPage />} />
      </Routes>
    </div>
  );
});
