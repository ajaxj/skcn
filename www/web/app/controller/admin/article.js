
const Controller = require("egg").Controller;

class ArticleController extends Controller {

  async index(){
    const ctx = this.ctx;
    let pager = {};
    pager.pageSize = 5;      //默认的每页数
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
      let categorylist = await this.service.category.listall();
      const data = {
        categorylist:categorylist,

      };
    await this.ctx.render('admin/article/add',data);
  }

  async create(){
    const ctx = this.ctx;
    let _article = await this.service.article.create(ctx.request.body);
    if(_article){
      ctx.redirect('/admin/articles')
    }
  }


  async edit(){
    const ctx = this.ctx;
    let id = ctx.params.id;
    let _article = await this.service.article.findById(id);
    const data = {
      article:_article,
    }
    await this.ctx.render('admin/article/edit',data);
  }

  async update(){
    const ctx = this.ctx;
    let id = ctx.request.body.id;
    let _title = ctx.request.body.title;
    let _summary = ctx.request.body.summary;
    let _content = ctx.request.body.content;
    let _status = ctx.request.body.status;
    let data = {"title":_title,"summary":_summary,"content":_content,"status":_status};
    // let result = id;
    let result = await this.service.article.updateById(id,data);
    if(result){
      ctx.redirect('/admin/articles/edit/'+id);
    }
    ctx.body = result;
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
