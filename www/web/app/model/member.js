'use strict';

module.exports = app => {
  const {STRING,INTEGER,TEXT,DATE} = app.Sequelize;
  const Member = app.model.define('member',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autuIncrement:true,
    },
    name:STRING(255),
    username:STRING(255),
    passwd:STRING(255),
  },{
    tableName:'members',
  });

  return Member;
}
