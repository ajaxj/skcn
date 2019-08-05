'use strict';

const Service = require('egg').Service;

class EventdetailService extends Service{

  async list(){
    let result =await this.ctx.model.Eventdetail.findAll();
    return result;
  }

  async create(data){
    let result = await this.ctx.model.Eventdetail.create(data);
    return data;
  }
}

module.exports = EventdetailService;
