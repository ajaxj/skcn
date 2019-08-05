/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564931991935_427';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.sequelize = {
      dialect: 'mysql',  // 表示使用mysql
      host: '127.0.0.1', // 连接的数据库主机地址
      port: 3306, // mysql服务端口
      database: 'skdb', // 数据库名
      username: 'root',  // 数据库用户名
      password: '12345678', // 数据库密码
      define: {  // model的全局配置
        	timestamps: true,   // 添加create,update,delete时间戳
        	paranoid: true,   // 添加软删除
        	freezeTableName: true,  // 防止修改表名为复数
        	underscored: false  // 防止驼峰式字段被默认转为下划线
      },
      pool:{
        max:5,
        min:0,
        idle:10000,
      },
      timezone: '+8:00',  // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
      dialectOptions: {  // 让读取date类型数据时返回字符串而不是UTC时间
          dateStrings: true,
          typeCast(field, next) {
              if (field.type === "DATETIME") {
                  return field.string();
              }
              return next();
          }
      }
  };


  return {
    ...config,
    ...userConfig,
  };
};
