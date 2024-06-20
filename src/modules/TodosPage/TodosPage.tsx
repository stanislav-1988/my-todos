import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ConfirmButton } from '../../components';
import { HeaderTodo } from '../../components/HeaderTodo';
import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import styles from './todosPage.module.scss';

export const TodosPage: FC = observer(() => {
  const navigate = useNavigate();
  const { access, name } = myStore;
  useEffect(() => {
    if (!access && name) navigate(ROUTES.ROOT_ROUTE);
  }, [access, name, navigate]);

  const handleViewTask = () => {
    navigate(ROUTES.CREATE_TODO_PAGE_ROUTE);
  };

  return (
    <div className={styles.container}>
      <HeaderTodo text="Мои задачи" />
      <ConfirmButton onClick={handleViewTask} color="var(--button-accent)" value="Создать новую" />
    </div>
  );
});
