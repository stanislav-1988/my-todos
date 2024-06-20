import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './InputReusable.module.scss';

export interface InputReusableProps {
  type: string;
  placeholder: string;
  error?: boolean;
  register?: any;
}

export const InputReusable: FC<InputReusableProps> = ({
  type, placeholder, register, error,
}) => (
  <div className={classNames(styles.InputReusable, (error && styles.error))}>
    <input
      className={styles.styleInput}
      type={type}
      placeholder={placeholder}
      {...register}
    />
  </div>
);
