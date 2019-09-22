const Service =require('egg').Service

class MemberService extends Service {

  async create(payload){
    payload.password = await this.ctx.getHash(payload.password)
    return payload
  }

}

module.exports = UserService
