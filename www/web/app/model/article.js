'use strict';

module.exports = app => {
  const {STRING,INTEGER,TEXT,DATE} = app.Sequelize;
  const Article = app.model.define('article',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autuIncrement:true,
    },
    title:STRING(255),
    summary:TEXT,
    content:TEXT,
    status:{type:INTEGER,defaultValue: 0},

  },{
    tableName:'articles',
  });

  // Event.associate = function (){
  //     app.model.Event.hasMany(app.model.Eventdetail, {foreignKey: 'eid', targetKey: 'id'});
  // }

  return Article;
}
