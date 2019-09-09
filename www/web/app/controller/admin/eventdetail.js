'use strict';

const Controller = require("egg").Controller;

class EventdetailController extends Controller{
  async index(){
    let result = await this.service.eventdetail.list();
    let json = {
      errorCode:0,
      errorMsg:"",
      data:result,
    };
    this.ctx.body = json;
  }

  async create(){
    let result = await this.service.eventdetail.create(this.ctx.request.body);
    let json = {
      errorCode:0,
      errorMsg:"",
      data:result,
    };
    this.ctx.body = json;
  }
}

module.exports = EventdetailController;
