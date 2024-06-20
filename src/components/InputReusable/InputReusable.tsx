import React, { FC } from 'react';

// import { UseFormRegister } from 'react-hook-form';
import styles from './InputReusable.module.scss';

export interface InputReusableProps {
  type: string;
  placeholder: string;
  register: any;
}

export const InputReusable: FC<InputReusableProps> = ({ type, placeholder, register }) => (
  <div className={styles.InputReusable}>
    <input
      className={styles.styleInput}
      type={type}
      placeholder={placeholder}
      {...register}
    />
  </div>
);
