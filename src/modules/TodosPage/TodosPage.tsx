import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ConfirmButton, Todo } from '../../components';
import { HeaderTodo } from '../../components/HeaderTodo';
import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import styles from './todosPage.module.scss';

export const TodosPage: FC = observer(() => {
  const navigate = useNavigate();
  const {
    access, name, todoList,
  } = myStore;

  useEffect(() => {
    if (!access && !name) navigate(ROUTES.ROOT_ROUTE);
  }, [access, name, navigate]);

  const handleViewTask = () => {
    navigate(ROUTES.CREATE_TODO_PAGE_ROUTE);
  };

  const item = todoList.map((task) => {
    const {
      todo, done, id, date,
    } = task;

    return (
      <React.Fragment key={id}>
        <Todo text={todo} done={done} date={date} id={id} />
      </React.Fragment>
    );
  });

  return (
    <div className={styles.container}>
      <HeaderTodo text="Мои задачи" />
      {item}
      <ConfirmButton onClick={handleViewTask} color="var(--button-accent)" value="Создать новую" />
    </div>
  );
});
