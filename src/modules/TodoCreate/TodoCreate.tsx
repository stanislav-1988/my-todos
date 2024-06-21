import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ConfirmButton, CreateTodo } from '../../components';
import { HeaderTodo } from '../../components/HeaderTodo';
import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import styles from './todoCreate.module.scss';

export const TodoCreate: FC = observer(() => {
  const navigate = useNavigate();
  const { access, name } = myStore;
  useEffect(() => {
    if (!access && name) navigate(ROUTES.ROOT_ROUTE);
  }, [access, name, navigate]);

  if (access && name) {
    navigate(ROUTES.ROOT_ROUTE);
  }

  const handleViewTask = () => {
    navigate(ROUTES.MY_TODO_PAGE_ROUTE);
  };

  return (
    <div className={styles.container}>
      <HeaderTodo text="Создание задачи" />
      <CreateTodo />
      <ConfirmButton onClick={handleViewTask} color="var(--button-accent)" value="Посмотреть мои задачи" />
    </div>
  );
});
