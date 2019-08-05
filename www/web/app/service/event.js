'use strict';

const Service = require('egg').Service;

class EventService extends Service{

  async list(){
    let result =await this.ctx.model.Event.findAll({
      include:{
        model:this.ctx.model.Eventdetail
      }
    });
    return result;
  }

  async create(data){
    let result = await this.ctx.model.Event.create(data);
    return data;
  }
}

module.exports = EventService;
