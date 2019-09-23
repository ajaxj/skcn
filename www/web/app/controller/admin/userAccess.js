
const Controller = require('egg').Controller


class UserAccessController extends Controller{

    async login(){
      const {ctx,service} = this;
      const payload = ctx.request.body || {};
      const res = await service.userAccess.login(payload);

      ctx.body = res;


    }

    async userLogin(){
        await this.ctx.render('admin/login');
    }
}


module.exports = UserAccessController;
