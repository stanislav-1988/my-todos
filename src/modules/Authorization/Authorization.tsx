import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { authorizationInfoLsKey } from '../../assets/constants';
import { InputLabel, InputReusable } from '../../components';
import { ConfirmButton } from '../../components/ConfirmButton';
import myStore from '../../store/myStore';
import styles from './authorization.module.scss';

type AuthorizationType = {
  email: string;
  password: string;
};

export const Authorization: FC = observer(() => {
  const {
    access, setAccess, setName, name: firstName,
  } = myStore;
  const [thereIsAccess, setThereIsAccess] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AuthorizationType>({
    mode: 'onBlur',
  });

  if (access) {
    return (
      <div className={styles.secretPage}>
        <h1 className={styles.h}>2345678765432345678</h1>
      </div>

    );
  }

  const sendingDataForAuthorization = (data: AuthorizationType) => {
    const accessData = localStorage.getItem(`${authorizationInfoLsKey}_${data.email}`);
    if (accessData) {
      const { email, password, name } = JSON.parse(accessData || '');
      if (!firstName) setName(name);
      if (email === data.email || password === data.password) {
        setAccess(true);
        reset();
        setThereIsAccess(false);
      } else {
        setThereIsAccess(true);
      }
    }
  };

  return (
    <div className={styles.authorizationForm}>
      <h3>Вход</h3>
      <form onSubmit={handleSubmit(sendingDataForAuthorization)}>
        <span>{thereIsAccess ? 'Неверный логин или пароль' : null}</span>
        <InputLabel text="Электронная почта" />
        <InputReusable
          type="email"
          placeholder="mail@mail.ru"
          register={register('email', {
            required: 'введите емайл',
            pattern: {
              value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,4})+$/,
              message: 'некорректный адрес почты',
            },
          })}
        />
        <span>{errors?.email && <p>{errors.email?.message}</p>}</span>
        <InputLabel text="Пароль" />
        <InputReusable
          type="Пароль"
          placeholder="Пароль"
          register={register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'минимальная длинна пароля 6 символов',
            },
            maxLength: {
              value: 40,
              message: 'максимальная длинна пароля 40 символов',
            },
          })}
        />
        <span>{errors?.password && <p>{errors?.password?.message || 'пароль не введен'}</p>}</span>
        <ConfirmButton value="Войти" />
      </form>
      <span className={styles.registrationLink}>
        Нет Аккаунта?
        {'   '}
        <Link to="/sign-up">Зарегестрироваться</Link>
      </span>
    </div>
  );
});
