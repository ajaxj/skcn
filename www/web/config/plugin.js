'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  sequelize:{
      enable:true,
      package:'egg-sequelize',
  },


  bcrypt : {
    enable: true,
    package: 'egg-bcrypt'
  },

  jwt:{
    enable: true,
    package: "egg-jwt"
  },



  // exports.redis = {
  //   enable: true,
  //   package: 'egg-redis',
  // };
  //
  // exports.cors = {
  //     enable: true,
  //     package: 'egg-cors',
  // };



  nunjucks:{
    enable: true,
    package: 'egg-view-nunjucks',
  }


};
