import { observable, action, extendObservable,makeAutoObservable } from 'mobx';

class MobxStore {
  count = 4;
  constructor() {
    makeAutoObservable(this, {
      count: observable,
    });
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };
}

export default new MobxStore();
