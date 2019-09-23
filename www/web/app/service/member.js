
const Service = require('egg').Service;

class MemberService extends Service {

  async list(){
    let result = await this.ctx.model.Member.findAll();
    return result;
  }

  async create(payload){
    payload.passwd = await this.ctx.genHash(payload.passwd)
    let result = await this.ctx.model.Member.create(payload);
    return result;
  }

  /**
   * 返回ID号 没有返回 0
   */
  async deleteById(id){
    let result = await this.ctx.model.Member.destroy({where:{id:id}});
    return result;
  }

  /**
   * 通过登录名查找用户
   */
  async findByUsername(username){
     let result = await this.ctx.model.Member.findOne({
       where:{
         username:username
       }
     });
     return result;
  }
}



module.exports = MemberService;
