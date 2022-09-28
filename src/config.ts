/**
 * @description 小程序业务API配置文件
 */

function createConfig() {
  const baseConf = {
    // 基础配置在这添加
    MOCK: 'xxxxxx',
  };

  // 开发环境
  const devConf = {
    HOST: 'https://dev-xxx.com.cn',
    ENV: 'development',
    ...baseConf,
  };

  const prodConf = {
    HOST: 'https://prod-xxx.com.cn',
    ENV: 'production',
    ...baseConf,
  };

  switch (__DEV__) {
    case 'development':
      return devConf;
    case 'production':
      return prodConf;
    default:
      return devConf;
  }
}

const config = createConfig();

export default config;