'use strict';

const Controller = require('egg').Controller;
class EventController extends Controller{

  async index(){

    const ctx = this.ctx;
    let pager = {};
    pager.pageSize = 20;      //默认的每页数
    pager.pageCurrent = 1;    //默认当前页

    if(ctx.query.offset){
      pager.pageCurrent = parseInt(ctx.query.offset)
    }

    let offset = pager.pageSize * (pager.pageCurrent  - 1);
    let limit = pager.pageSize;

    pager.pageNext = pager.pageCurrent + 1;     //上一页
    pager.pagePrev = pager.pageCurrent - 1;     //下一页

    let eventlist = await this.service.event.list(offset,limit);
    pager.maxNum = await this.service.event.total();
    pager.pageCount = parseInt(Math.ceil(parseFloat(pager.maxNum) / parseFloat(pager.pageSize)));  //计算总页数
    const data = {
      eventlist:eventlist,
      pager: pager
    };
    await this.ctx.render('events/index',data);
  }


  async add(){
    await this.ctx.render('events/add');
  }

  async create(){
    const ctx = this.ctx;
    let _events = await this.service.event.create(ctx.request.body);
    if(_events){
      ctx.redirect('/events')
    }
  }

  async destroy(){
    const ctx = this.ctx;
    let id = ctx.params.id;
    let result = await this.service.event.deleteById(id);
    if(result == 1){
      ctx.redirect('/events')
    }else{
      throw "error";
    }
  }


}


module.exports = EventController;
