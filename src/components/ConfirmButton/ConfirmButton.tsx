import React, { FC } from 'react';

import styles from './ConfirmButton.module.scss';

export interface ConfirmButtonProps {
  value: string;
}

export const ConfirmButton: FC<ConfirmButtonProps> = ({ value }) => (
  <button
    className={styles.submit_form}
    type="submit"
  >
    {value}
  </button>
);
