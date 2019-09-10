
const Service = require('egg').Service;

class CategoryService extends Service {


  async listall(){
    let result = await this.ctx.model.Category.findAll();
    return result;
  }

  async list(offset,limit){
    let result = await this.ctx.model.Category.findAll({offset:offset,limit:limit});
    return result;
  }

  async total(){
    let result = await this.ctx.model.Category.count();
    return result;
  }

  async create(request){
    if(!request) { return; }
    let result = await this.ctx.model.Category.create(request);
    return result;
  }

  async findById(id){
    let result = await this.ctx.model.Category.findByPk(id);
    return result;
  }

  async updateById(id,data){
    // let conditions = { where:{id:id}},update = {data}
    // let result = await this.ctx.model.Fetchcategory.update(update,conditions); //基它参数默认
    let result = await this.ctx.model.Category.update(data, { where: { id: id } });
    return result;    //返回的数据 {n: 1,nModified: 1,ok: 1 }
  }

  async deleteById(id){
    let result = await this.ctx.model.Category.destroy({where:{id:id}});
    return result;
  }

}


module.exports = CategoryService;
