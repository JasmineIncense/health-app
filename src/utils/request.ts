import { request } from '@tarojs/taro';
import config from '@/config';

/**
 * 封装taro请求方法
 * @param method 请求方法
 * @param opts 配置项
 */
class Http {
  baseUrl:string = '';

  constructor(baseUrl:string) {
    this.baseUrl = baseUrl;
  }

  async req<T>(method: MethodType, opts: request.Option) {
    if (opts && opts.header) {
      opts.header = {
        ...opts.header,
      };
    }

    opts.url = this.baseUrl + opts.url;

    const obj:request.Option = {
      method,
      dataType: 'json',
      timeout: 5000,
      ...opts,
    };
    const res = await request<T>(obj);
    return res;
  }

  /**
    * get请求封装
    * @param url 请求链接
    * @param data 请求数据
    * @param opts 配置项
  */
  async get<T = any>(
    url:string,
    data?:any,
    opts?:request.Option,
  ) {
    const getOpts:request.Option = { url, data, ...opts };
    return this.req<T>('GET', getOpts);
  }

  async put<T = any>(
    url:string,
    data?:any,
    opts?:request.Option,
  ) {
    const putOpts:request.Option = { url, data, ...opts };
    return this.req<T>('PUT', putOpts);
  }

  async post<T = any>(
    url:string,
    data?:any,
    opts?:request.Option,
  ) {
    if (opts && opts.header) {
      opts.header = {
        'Content-Type': 'application/json',
        ...opts.header,
      };
    }
    const postOpts:request.Option = {
      url,
      data,
      ...opts,
    };
    return this.req<T>('POST', postOpts);
  }

  async del<T = any>(
    url:string,
    data?:any,
    opts?:request.Option,
  ) {
    const delOpts:request.Option = { url, data, ...opts };
    return this.req<T>('DELETE', delOpts);
  }

}

export const hostHttp = new Http(config.HOST);

