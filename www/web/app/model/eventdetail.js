'use strict';

module.exports = app => {
  const {STRING,INTEGER,DATE} = app.Sequelize;
  const Eventdetail = app.model.define('eventdetail',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autuIncrement:true,
    },
    eid:{type:INTEGER},
    title:STRING(255),
    status:{type:INTEGER,defaultValue:0},
  },{
    tableName:'eventdetails',
  });

  Eventdetail.associate = function(){
    app.model.Eventdetail.belongsTo(app.model.Event,{foreignKey:'eid',targetKey:'id'});
  }

  return Eventdetail;
}
