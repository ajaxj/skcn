const Service = require('egg').Service

class UserAccessService extends Service {

  async login(payload) {
   const { ctx, service } = this;
   const user = await service.member.findByUsername(payload.username);
   if(!user){
     ctx.throw(404,'user not foud');      // TODO: 出错页面显示
   }

   let verifyPsw = await ctx.compare(payload.passwd,user.passwd);   //验证加密的密码正确为true
   if(!verifyPsw){
      ctx.throw(404,'password is error');
   }
   // 生成Token令牌
   return { token: await service.actionToken.apply(user.id) }

 }

}

module.exports = UserAccessService;
