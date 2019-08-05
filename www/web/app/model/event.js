'use strict';

module.exports = app => {
  const {STRING,INTEGER,DATE} = app.Sequelize;
  const Event = app.model.define('event',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autuIncrement:true,
    },
    name:STRING(255),
    visible:{type:INTEGER,defaultValue:0},
  },{
    tableName:'events',
  });

  Event.associate = function (){
      app.model.Event.hasMany(app.model.Eventdetail, {foreignKey: 'eid', targetKey: 'id'});
  }

  return Event;
}
