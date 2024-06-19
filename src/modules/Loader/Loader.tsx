import React from 'react';

import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.spinner}>
      <div />
      <div />
    </div>
  </div>
);
