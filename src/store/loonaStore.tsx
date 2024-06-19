import { makeAutoObservable } from 'mobx';

class LoonaStore {
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading = (isLoading: boolean): void => {
    this.isLoading = isLoading;
  };
}

export default new LoonaStore();
