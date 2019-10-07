'use strict'

module.exports = app => {
  const {STRING,INTEGER,DATE} = app.Sequelize;
  const Fetchmovie = app.model.define('fetchmovie',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autuIncrement:true,
    },
    title:STRING(255),
    fetchurl:STRING(255),
    category:STRING(45),
    status:INTEGER,
  },{
    timestamps: false,
    tableName:'fetchmovies',
  });

  return Fetchmovie;
}
