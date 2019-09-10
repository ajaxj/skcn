'use strict';

module.exports = app => {
  const {STRING,INTEGER,DATE} = app.Sequelize;
  const Category = app.model.define('category',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autuIncrement:true,
    },
    name:STRING(45),
    ename:STRING(45),
  },{
    tableName:'categories',
  });

  Category.associate = function (){
      app.model.Category.hasMany(app.model.Article, {foreignKey: 'cid', targetKey: 'id'});
  }


  return Category;
}
