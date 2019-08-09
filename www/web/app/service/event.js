'use strict';

const Service = require('egg').Service;

class EventService extends Service{

  async list( offset,limit){
    let result = await this.ctx.model.Event.findAll({ order: [['createdAt', 'DESC']],offset: offset, limit: limit })
    return result;
  }

  async total(){
    let result = await this.ctx.model.Event.count();
    return result;
  }

  async findById(id){
    let result = await this.ctx.model.Event.findById(id);
    return result;
  }


  async updateById(id,data){
    // let conditions = { where:{id:id}},update = {data}
    // let result = await this.ctx.model.Fetchcategory.update(update,conditions); //基它参数默认
    let result = await this.ctx.model.Event.update(data, { where: { id: id } });
    return result;    //返回的数据 {n: 1,nModified: 1,ok: 1 }
  }

  //添加
  async create(request){
      if(!request) { return };
      let result = await this.ctx.model.Event.create(request);
      return result;
  }

//   Post.destroy({
//   where: {
//     status: 'inactive'
//   }
// });

  async deleteById(id){
    let result = await this.ctx.model.Event.destroy({where:{id:id}});
    return result;
  }


//API 部分
  async api_list(){
    let result =await this.ctx.model.Event.findAll({
      include:{
        model:this.ctx.model.Eventdetail
      }
    });
    return result;
  }

  async api_create(data){
    let result = await this.ctx.model.Event.create(data);
    return data;
  }
}

module.exports = EventService;
