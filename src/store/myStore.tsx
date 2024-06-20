import { makeAutoObservable } from 'mobx';

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

  email: string = '';

  password: string = '';

  successfulRegistration: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading = (isLoading: boolean): void => {
    this.isLoading = isLoading;
  };

  setAccess = (access: boolean) => {
    this.access = access;
  };

  setName = (name: string) => {
    this.name = name;
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
