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

  config.bcrypt = {
    saltRounds: 10 // default 10
  };

  config.jwt = {
     secret: 'Great4-M',
     enable: true, // default is false
     match: '/jwt', // optional
   };

  config.sequelize = {
      dialect: 'mysql',  // 表示使用mysql
      // host: '127.0.0.1', // win7连接的数据库主机地址
      // host:'192.168.0.113',//ubuntu测试机
      host:'localhost',   //mbb
      port: 3306, // mysql服务端口
      database: 'skdb', // 数据库名
      username: 'root',  // 数据库用户名
      password:'34erdfcv',   //ubuntu测试 机
      // password: '12345678', // win7测试 机
      define: {  // model的全局配置
        	timestamps: true,   // 添加create,update,delete时间戳
        	// paranoid: true,   // 添加软删除
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


  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };


  config.security = {
    csrf :{
      // enable:false,    //关闭全部的csrf
      ignoreJSON:true,    //设为true,放过所有的content-type为 application/json
    },
    // domainWhiteList: [ '*' ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
