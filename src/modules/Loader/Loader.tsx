import React from 'react';

import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.container}>
    <span className={styles.loader} />
  </div>
);
