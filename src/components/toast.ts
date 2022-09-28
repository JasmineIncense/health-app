import Taro from "@tarojs/taro";

function handler(
  title: string,
  icon: "success" | "loading" | "none" | "error" = "none",
  duration: number = 2000
) {
  Taro.showToast({
    title,
    icon,
    duration
  });
}

const toast = {
  /**
   * 提示
   * @param {string} msg - 内容
   * @param {number} [duration] - 延迟时间，默认：2000
   */
  show(msg: string, duration?: number): void {
    handler(msg, "none", duration);
  },
  /**
   * 成功
   *
   * @param {string} msg - 内容
   * @param {number} [duration] - 延迟时间，默认：2000
   */
  success(msg: string, duration?: number): void {
    handler(msg, "success", duration);
  },
  /**
   * 错误
   *
   * @param {string} msg - 内容
   * @param {number} [duration] - 延迟时间，默认：2000
   */
  error(msg: string, duration?: number): void {
    handler(msg, undefined, duration);
  },
  /**
   * 加载中
   *
   * @param {string} msg - 内容
   * @param {number} [duration] - 延迟时间，默认：2000
   */
  loading(msg?: string): void {
    Taro.showLoading({
      title: msg || "加载中……"
    });
  }
};

export default toast;
