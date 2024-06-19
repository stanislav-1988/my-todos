/* eslint-disable no-console */
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../modules';
import loonaStore from '../store/loonaStore';
import styles from './App.module.scss';

export const App = observer(() => {
  const {
    isLoading,
  } = loonaStore;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.RoutingLayout}>
      <h1>Начнем писать код?!</h1>
    </div>
  );
});
