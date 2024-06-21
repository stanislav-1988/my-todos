/* eslint-disable max-len */
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import { setTodoListLS } from '../../api';
import donePen from '../../assets/icons/DonePen.svg';
import edit from '../../assets/icons/EditPen.svg';
import trash from '../../assets/icons/Trash.svg';
import myStore, { TodoListType } from '../../store/myStore';
import styles from './todo.module.scss';

interface ITodo {
  text: string;
  done: boolean;
  date: string;
  id: string;
}

export const Todo: FC<ITodo> = observer(({
  text, done, date, id,
}) => {
  const {
    todoList, setTodoList, setTooltipText, email,
  } = myStore;

  const clickDelete = () => {
    if (id === '1') {
      setTooltipText('Это не задача');

      return;
    }

    const newTodoList = todoList.filter((el) => el.id !== id);
    setTodoList(newTodoList);
    setTodoListLS(newTodoList, email);
    setTooltipText('Задача удалена!');
  };

  const clickEdit = () => {
    const newTodoList = todoList.map((elem: TodoListType) => {
      if (elem.id === id) {
        return { ...elem, done: !done };
      }

      return elem;
    });
    setTodoList(newTodoList);
    setTodoListLS(newTodoList, email);
    if (!done) setTooltipText('Задача выполнена!');
    if (done) setTooltipText('Задача возвращена в работу!');
  };

  return (
    <div className={styles.container}>
      {done
        ? <h5 className={classNames(styles.timeDone, styles.time)}>Выполнена</h5>
        : (
          <h5 className={styles.time}>
            Заплонировано до:
            {' '}
            {' '}
            <span>{date}</span>
          </h5>
        )}

      <section className={styles.todo}>
        <button
          type="button"
          onClick={clickEdit}
          className={styles.buttonEdit}
        >
          <img src={done ? donePen : edit} alt="Отметить выполненой" />
        </button>
        <div className={styles.text}>
          <article className={done ? styles.doneTodo : ''}>
            {text}
          </article>
        </div>
        <button
          type="button"
          onClick={clickDelete}
          className={styles.buttonDelete}
        >
          <img src={trash} alt="Удалить" />
        </button>
      </section>
    </div>
  );
});
