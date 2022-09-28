import { hostHttp } from "@/utils/request";
import * as Type from "./type";

export const getApiInfo = async (): Type.IResponse<string[]> =>
  await hostHttp.get("/xxx/xxx");
