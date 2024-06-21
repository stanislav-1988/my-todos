import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import DefaulAvatar from '../../assets/icons/defaultAvatar.svg';
import exit from '../../assets/icons/Exit.svg';
import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import styles from './header.module.scss';

export const Header: FC = observer(() => {
  const navigate = useNavigate();
  const {
    access, clearStore, name,
  } = myStore;

  const logOut = () => {
    clearStore();
    navigate(ROUTES.ROOT_ROUTE);
  };

  if (access && name) {
    return (
      <div className={styles.headerContainer}>
        <h3 className={styles.greetings}>{`Привет ${name}`}</h3>
        <div className={styles.img}>
          <img className={styles.avatar} src={DefaulAvatar} alt="Hello" />
        </div>
        <button
          type="button"
          onClick={logOut}
          className={styles.logOutButton}
        >
          <img src={exit} alt="exit" />
        </button>
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
