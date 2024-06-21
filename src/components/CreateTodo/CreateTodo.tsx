import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { setTodoListLS } from '../../api';
import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import { ConfirmButton } from '../ConfirmButton';
import { InputLabel } from '../InputLabel';
import { InputReusable } from '../InputReusable';
import styles from './createTodo.module.scss';

type CreateTodoType = {
  todo: string;
  date: string;
};

export const CreateTodo: FC = observer(() => {
  const navigate = useNavigate();
  const {
    todoList, setTodoList, setTooltipText, email, name, access,
  } = myStore;

  useEffect(() => {
    if (!access && !name) navigate(ROUTES.ROOT_ROUTE);
  }, [access, name, navigate]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateTodoType>({
    mode: 'onBlur',
  });

  const submit = (data: CreateTodoType) => {
    reset();
    const newTodoList = [...todoList, { ...data, id: uuidv4(), done: false }];
    setTodoList(newTodoList);
    setTodoListLS(newTodoList, email);
    setTooltipText('Задача добавлена!');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <div className={styles.inputs}>
          <div className={styles.textField}>
            <InputLabel text="Добавить задачу" />
            <InputReusable
              type="text"
              error={!!errors?.todo}
              placeholder="Добавить задачу"
              register={register('todo', {
                required: 'введите емайл',
                minLength: {
                  value: 1,
                  message: 'минимальная длинна пароля 1 символов',
                },
              })}
            />
          </div>
          <div>
            <InputLabel text="Дата Планового закрытия" />
            <InputReusable
              error={!!errors?.date}
              type="date"
              placeholder="Дата"
              register={register('date', {
                required: true,
              })}
            />
          </div>
        </div>
        <ConfirmButton color="var(--button-secondary)" value="Создать задачу" />
      </form>
    </div>

  );
});
