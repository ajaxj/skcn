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
    cname:STRING(45),
  },{
    tableName:'categories',
  });

  // Event.associate = function (){
  //     app.model.Event.hasMany(app.model.Eventdetail, {foreignKey: 'eid', targetKey: 'id'});
  // }

  return Category;
}
