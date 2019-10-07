'use strict';

const Controller = require('egg').Controller;

class FetchmovieController extends Controller {

  async index(){
    const {ctx,service} = this;
    let pager = {};
    pager.pageSize = 20;         //每页数量
    pager.pageCurrent = 1;      //默认的当前页
    if (ctx.query.offset){
      pager.pageCurrent = parseInt(ctx.query.offset);
    }
    let offset = pager.pageSize * (pager.pageCurrent -1 );
    let limit = pager.pageSize;

    pager.pageNext = pager.pageCurrent + 1;     //上一页
    pager.pagePrev = pager.pageCurrent - 1;     //下一页

    let movielist = await service.fetchmovie.list(offset,limit);
    pager.maxNum = await service.fetchmovie.total();

    pager.pageCount = parseInt(Math.ceil(parseFloat(pager.maxNum) / parseFloat(pager.pageSize)));  //计算总页数
    const data = {
      movielist:movielist,
      pager: pager
    };
    await ctx.render('admin/fetchmovie/index',data);
  }

  async add(){
    await this.ctx.render('admin/fetchmovie/add');
  }

  async create(){
    const {ctx,service} = this;
    let _movie = await service.fetchmovie.create(ctx.request.body);
    if(_movie){
      ctx.redirect('/admin/fetchmovies');
    }else{
      throw 404;
    }
  }

  async edit(){
    const {ctx,service} = this;
    let id = ctx.params.id;
    let _movie = await service.fetchmovie.findById(id);
    const data = {
      movie:_movie,
    };
    await ctx.render('admin/fetchmovie/edit',data);
  }

  async update(){
    const {ctx,service} = this;
    let id = ctx.request.body.id;
    let _title = ctx.request.body.title.trim();
    let _fetchurl = ctx.request.body.fetchurl.trim();
    let _status = ctx.request.body.status;
    let data = {"title":_title,"fetchurl":_fetchurl,"status":_status};
    let result = await service.fetchmovie.updateById(id,data);
    if(result){
        ctx.redirect('/admin/fetchmovies/edit/' + id);
    }else{
      // TODO: throw new Error;
      ctx.body = result;
    }

  }

  async destroy(){
    const {ctx,service} = this;
    let id = ctx.params.id;
    let result = await service.fetchmovie.deleteById(id);
    if(result == 1){
      ctx.redirect("/admin/fetchmovies");
    }else{
      throw "error";
    }
  }


}

module.exports = FetchmovieController;
