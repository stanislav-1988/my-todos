import { makeAutoObservable } from 'mobx';

export type TodoListType = {
  todo: string,
  done: boolean,
  date: string;
  id: string,
};

class MyStore {
  /**
   * Лоадер
   */
  isLoading: boolean = false;

  /**
   * Доступ
   */
  access: boolean = false;

  name: string = '';

  /**
   * Текст всплывающей подсказки
   */
  tooltipText: string = '';

  todoList: Array<TodoListType> = [{
    todo: 'У вас нет текущих задач',
    done: false,
    date: 'сегодня',
    id: '1',
  }];

  email: string = '';

  password: string = '';

  successfulRegistration: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  clearStore = () => {
    this.email = '';
    this.name = '';
    this.access = false;
    this.todoList = [{
      todo: 'У вас нет текущих задач',
      done: false,
      date: 'сегодня',
      id: '1',
    }];
    this.password = '';
    this.successfulRegistration = false;
  };

  setAccess = (access: boolean) => {
    this.access = access;
  };

  setName = (name: string) => {
    this.name = name;
  };

  setTooltipText = (text: string) => {
    this.tooltipText = text;
  };

  setTodoList = (newList: Array<TodoListType>) => {
    this.todoList = newList;
  };

  setEmail = (email: string) => {
    this.email = email;
  };

  setSuccessfulRegistration = (payload: boolean) => {
    this.successfulRegistration = payload;
  };

  setPassword = (password: string) => {
    this.password = password;
  };
}

export default new MyStore();
