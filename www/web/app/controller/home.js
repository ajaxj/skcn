'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
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

    // let detail1 = {"title":"event1-title1","eid":1};
    // await ctx.service.eventdetail.create(detail1);

    // let detail = {"title":"event1-title2","eid":1};
    // await ctx.service.eventdetail.create(detail);
    // detail = {"title":"event2-title1","eid":2};
    // await ctx.service.eventdetail.create(detail);

    ctx.body = "ok";
  }
}

module.exports = HomeController;
