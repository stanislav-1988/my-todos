import React, { FC } from 'react';

import styles from './headerTodo.module.scss';

type HeaderTodoType = {
  text: string;
};

export const HeaderTodo: FC<HeaderTodoType> = ({ text }) => (
  <div className={styles.header}>
    <h1>{text}</h1>
  </div>
);
