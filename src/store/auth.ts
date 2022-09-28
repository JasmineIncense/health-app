/**
 * @description 登录信息模块state
 */

import { observable, action } from 'mobx';

export interface IAuthStore {
  // 小程序不带cookies，header 带上token鉴权
  authToken:string;

  setAuthToken:(token:string) => void;
}

class AuthStore implements IAuthStore {
  @observable
  authToken = 'hello word!'

 
  @action
  setAuthToken = (token:string) => {
    this.authToken = token;
  }
}

export default new AuthStore();
