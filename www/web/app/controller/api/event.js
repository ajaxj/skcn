'use strict';

const Controller = require("egg").Controller;

class EventController extends Controller{
  async index(){
    let result = await this.service.event.api_list();
    let json = {
      errorCode:0,
      errorMsg:"",
      data:result,
    };
    this.ctx.body = json;
  }

  async create(){
    let result = await this.service.event.api_create(this.ctx.request.body);
    let json = {
      errorCode:0,
      errorMsg:"",
      data:result,
    };
    this.ctx.body = json;
  }
}

module.exports = EventController;
