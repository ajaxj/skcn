'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("home/index");
  }

  async test(){
    const {ctx} = this;
    // let result = await this.ctx.service.event.list();
    // let result = await this.ctx.service.eventdetail.list();

    //初始数据：
    // let event1 = {"name":"event1"};
    // await ctx.service.event.create(event1);
    // let event2 = {"name":"event2"};
    // await ctx.service.event.create(event2);
    //
    // let detail1 = {"title":"event1-title1","eid":1};
    // await ctx.service.eventdetail.create(detail1);
    //
    // let detail = {"title":"event1-title2","eid":1};
    // await ctx.service.eventdetail.create(detail);
    // detail = {"title":"event2-title1","eid":2};
    // await ctx.service.eventdetail.create(detail);

    let m1 = {"name":"name1","username":"username1","passwd":"passwor"}

    ctx.body = "ok";
  }
}

module.exports = HomeController;
