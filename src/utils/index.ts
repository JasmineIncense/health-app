import { getCurrentInstance } from "@tarojs/taro";

// 拼接参数置指定url路由
export function transferConfigToUrlQuery(
  config: { [key: string]: number | string | boolean },
  url: string
): string {
  let query = "?";
  for (const key of Object.keys(config)) {
    query += `${key}=${config[key]}&`;
  }
  // 去除最后一个&
  query = query.slice(0, -1);
  return url + query;
}

// 获取当前页面链接（带参数）
export function getCurrentPageUrlWithArgs() {
  const pages = getCurrentInstance();
  return transferConfigToUrlQuery(
    (pages.router?.params as Record<string, any>) || {},
    pages!.router!.path
  );
}
