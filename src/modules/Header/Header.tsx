import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-cycle
import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import styles from './header.module.scss';

export const Header: FC = observer(() => {
  const {
    access, setAccess, setSuccessfulRegistration,
  } = myStore;

  const logOut = () => {
    setSuccessfulRegistration(false);
    setAccess(false);
  };

  if (access) {
    return (
      <div className={styles.headerContainer}>
        <h3>Приватный список дел</h3>
        <div className={styles.logOut}>
          <Link to={ROUTES.AUTHORIZATION_ROUTE} onClick={logOut}>
            Log Out
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.headerContainer}>
      <h3>Приватный список дел</h3>
      <div className={styles.signIn}>
        <Link to={ROUTES.AUTHORIZATION_ROUTE}>Вход</Link>
      </div>
      <div className={styles.signUp}>
        <Link to={ROUTES.REGISTRATION_ROUTE}>Регистрация</Link>
      </div>
    </div>
  );
});
