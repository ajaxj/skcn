
const Service = require('egg').Service;

class ArticleService extends Service {

  async list(offset,limit){
    let result = await this.ctx.model.Article.findAll({offset:offset,limit:limit});
    return result;
  }

  async total(){
    let result = await this.ctx.model.Article.count();
    return result;
  }

  async create(request){
    if(!request) { return; }
    let result = await this.ctx.model.Article.create(request);
    return result;
  }

  async findById(id){
    let result = await this.ctx.model.Article.findByPk(id);
    return result;
  }

  async updateById(id,data){
    // let conditions = { where:{id:id}},update = {data}
    // let result = await this.ctx.model.Fetchcategory.update(update,conditions); //基它参数默认
    let result = await this.ctx.model.Article.update(data, { where: { id: id } });
    return result;    //返回的数据 {n: 1,nModified: 1,ok: 1 }
  }

  async deleteById(id){
    let result = await this.ctx.model.Article.destroy({where:{id:id}});
    return result;
  }

}


module.exports = ArticleService;
