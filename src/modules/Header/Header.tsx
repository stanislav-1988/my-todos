import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import DefaulAvatar from '../../assets/icons/defaultAvatar.svg';
import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import styles from './header.module.scss';

export const Header: FC = observer(() => {
  const {
    access, setAccess, setSuccessfulRegistration, name,
  } = myStore;

  const logOut = () => {
    setSuccessfulRegistration(false);
    setAccess(false);
  };

  if (access && name) {
    return (
      <div className={styles.headerContainer}>
        <h3 className={styles.greetings}>{`Привет ${name}`}</h3>
        <div className={styles.img}>
          <img src={DefaulAvatar} alt="Hello" />
        </div>
        <div className={styles.logOut}>
          <Link to={ROUTES.ROOT_ROUTE} onClick={logOut}>
            Log Out
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.signIn}>
        <Link to={ROUTES.AUTHORIZATION_ROUTE}>Вход</Link>
      </div>
      <div className={styles.header}>
        <h1>Приватный список дел</h1>
      </div>
      <div className={styles.signUp}>
        <Link to={ROUTES.REGISTRATION_ROUTE}>Регистрация</Link>
      </div>
    </div>
  );
});
