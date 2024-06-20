import React, { FC } from 'react';

import PetIcon from '../../assets/icons/pet.svg';
import styles from './FirstPage.module.scss';

export const FirstPage: FC = () => (
  <div className={styles.container}>
    <img src={PetIcon} alt="Hello" />
  </div>
);
