import { TodoListType } from '../../store/myStore';

export const setTodoListLS = (todoList: Array<TodoListType>, name: string) => {
  if (name) localStorage.setItem(name, JSON.stringify(todoList));
};
