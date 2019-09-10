'use strict';

module.exports = app => {
  const {STRING,INTEGER,TEXT,DATE} = app.Sequelize;
  const Article = app.model.define('article',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autuIncrement:true,
    },
    cid:{type:INTEGER},
    title:STRING(255),
    summary:TEXT,
    content:TEXT,
    status:{type:INTEGER,defaultValue: 0},

  },{
    tableName:'articles',
  });

  Article.associate = function(){
    app.model.Article.belongsTo(app.model.Category,{foreignKey:'cid',targetKey:'id'});
  }


  return Article;
}
