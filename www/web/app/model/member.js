'use strict';

module.exports = app => {
  const {STRING,INTEGER,TEXT,DATE} = app.Sequelize;
  const Article = app.model.define('article',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autuIncrement:true,
    },
    name:STRING(255),
    username:STRING(255),     //登录名
    passwd:STRING(255),
  },{
    tableName:'users',
  });
}
