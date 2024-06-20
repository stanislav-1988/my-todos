import { observer } from 'mobx-react-lite';
import React, { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { authorizationInfoLsKey } from '../../assets/constants';
import { InputLabel, InputReusable } from '../../components';
import { ConfirmButton } from '../../components/ConfirmButton';
import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import styles from './registration.module.scss';

type RegistrationType = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  checkbox: boolean
};

export const Registration = observer(() => {
  const navigate = useNavigate();
  const {
    successfulRegistration,
    setName,
    setEmail,
    setPassword,
    setSuccessfulRegistration,
  } = myStore;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<RegistrationType>();

  const registrationData = (data: RegistrationType) => {
    localStorage.setItem(`${authorizationInfoLsKey}_${data.email}`, JSON.stringify({ email: data.email, password: data.password, name: data.name }));
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
    reset();
    setSuccessfulRegistration(true);
  };

  if (successfulRegistration) {
    navigate(ROUTES.AUTHORIZATION_ROUTE);
  }

  return (
    <div className={styles.registrationList}>
      <div className={styles.registrationForm}>
        <h3>Регистрация</h3>
        <form onSubmit={handleSubmit(registrationData)}>
          <InputLabel text="Имя" />
          <InputReusable
            register={register('name', {
              required: 'Введите имя',
              minLength: {
                value: 3,
                message: 'минимальная длинна имени 3 символов',
              },
              maxLength: {
                value: 20,
                message: 'максимальная длинна имени 20 символов',
              },
            })}
            type="text"
            placeholder="имя"
          />
          <div>{errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}</div>
          <InputLabel text="Почта" />
          <InputReusable
            register={register('email', {
              required: 'введите корректный адрес',
              pattern: {
                value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,4})+$/,
                message: 'некорректный адрес почты',
              },
            })}
            type="email"
            placeholder="mail@mail.ru"
          />
          <div>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
          <InputLabel text="Пароль" />
          <InputReusable
            register={register('password', {
              required: 'придумайте пароль от 6 до 40 символов',
              minLength: {
                value: 6,
                message: 'минимальная длинна пароля 6 символов',
              },
              maxLength: {
                value: 40,
                message: 'максимальная длинна пароля 40 символов',
              },
            })}
            type="password"
            placeholder="пароль"
          />
          <InputLabel text="Повтор пароля" />
          <InputReusable
            register={register('repeatPassword', {
              required: 'повторите пароль',
              minLength: {
                value: 6,
                message: 'минимальная длинна пароля 6 символов',
              },
              maxLength: {
                value: 40,
                message: 'максимальная длинна пароля 40 символов',
              },
              validate: (value) => value === watch('password') || 'пароли не совпадают',
            })}
            type="password"
            placeholder="повторите пароль"
          />
          <span>{errors?.repeatPassword && <p>{errors?.repeatPassword?.message}</p>}</span>
          <span>{errors?.password && <p>{errors?.password?.message}</p>}</span>
          <div className={styles.agreementContainer}>
            <input
              {...register('checkbox', {
                required: true,
              })}
              style={{ color: errors.checkbox && 'red' }}
              id="agreement"
              className={styles.agreement}
              type="checkbox"
              placeholder="Repeat Password"
            />
            <label htmlFor="agreement">Согласия на обработку персоональных данных</label>
          </div>
          <div>{errors?.checkbox && <p>необходимо дать согласие!</p>}</div>
          <ConfirmButton value="Зарегестрироваться" />
        </form>
        <span className={styles.registrationLink}>
          Уже зарегестрированы?
          {' '}
          <Link to="/sign-in">Авторизация</Link>
        </span>
      </div>
    </div>
  );
});
