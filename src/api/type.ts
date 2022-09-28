export type IResponse<T = any> = Promise<
  Taro.request.SuccessCallbackResult<{
    code:number;
    data:T;
    msg:string;
    success:boolean;
  }>
>;