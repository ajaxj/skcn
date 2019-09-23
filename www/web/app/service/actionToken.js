const Service = require('egg').Service;

/**
 * 用来生成Token
 */
class ActionTokenService extends Service {
  /**
   * 通过用户ID生成
   */
   async apply(id) {
    const {ctx} = this;
    return ctx.app.jwt.sign({
      data: {
        id: id
      },
      // exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
      exp: Math.floor(Date.now() / 1000) + (60 * 60 )
    }, ctx.app.config.jwt.secret);
  }
}

module.exports = ActionTokenService;
