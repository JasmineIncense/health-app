type MethodType = 'GET' | 'POST' | 'DELETE' | 'PUT';

interface HTTPResponse<T = any> {
  data:T & { error_code:string };
  statusCode:number;
  errMsg:string;
}

type IResponse<T = any> = {
    code:number;
    data:T;
    success:boolean;
}

interface PagingRes<T> {
	total:number;
	currentPage:number;
	pageSize:number;
	items:T[];
}
