
const Controller = require("egg").Controller;

class ArticleController extends Controller {

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



    let articlelist = await this.service.article.list(offset,limit);
    pager.maxNum = await this.service.article.total();


    pager.pageCount = parseInt(Math.ceil(parseFloat(pager.maxNum) / parseFloat(pager.pageSize)));  //计算总页数
    const data = {
      articlelist:articlelist,
      pager: pager
    };
    await this.ctx.render('admin/article/index',data);
  }


  async add(){
    await this.ctx.render('admin/article/add');
  }

  async create(){
    const ctx = this.ctx;
    let _article = await this.service.article.create(ctx.request.body);
    if(_article){
      ctx.redirect('/admin/articles')
    }
  }



  async destroy(){
    const ctx = this.ctx;
    let id = ctx.params.id;
    let result = await this.service.article.deleteById(id);
    if(result == 1){
      ctx.redirect('/admin/articles')
    }else{
      throw "error";
    }
  }



}

module.exports = ArticleController;
