'use strict';

const Controller = require('egg').Controller;
class CategoryController extends Controller{

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



    let categorylist = await this.service.category.list(offset,limit);
    pager.maxNum = await this.service.category.total();


    pager.pageCount = parseInt(Math.ceil(parseFloat(pager.maxNum) / parseFloat(pager.pageSize)));  //计算总页数
    const data = {
      categorylist:categorylist,
      pager: pager
    };
    await this.ctx.render('admin/category/index',data);
  //
  //   //分页缓存
  //
  //   const {ctx,app} = this;
  //   let pager = {};
  //   pager.pageSize = 20;      //默认的每页数
  //   pager.pageCurrent = 1;    //默认当前页
  //
  //   if(ctx.query.offset){
  //     pager.pageCurrent = parseInt(ctx.query.offset)
  //   }
  //
  //   let offset = pager.pageSize * (pager.pageCurrent  - 1);
  //   let limit = pager.pageSize;
  //
  //   pager.pageNext = pager.pageCurrent + 1;     //上一页
  //   pager.pagePrev = pager.pageCurrent - 1;     //下一页
  //
  //   let categorylist,categorylist_total = null;
  //
  //
  //
  //   let c_cate_page = await app.redis.get("c_cate_page" + offset.toString());
  //   if(c_cate_page){
  //       categorylist = JSON.parse(c_cate_page);
  //   }else{
  //       categorylist = await this.service.fetchcategory.list(offset,limit);
  //       await app.redis.set("c_cate_page"+offset.toString(),JSON.stringify(categorylist),"EX",3600);      //分页删除的方式可以设为超时，也可以是清理一个KEY或都把一组KEY放在数组里一次清理
  //
  //   }
  //
  //   //取总数量的缓存，与每一页分开
  //   categorylist_total =   await app.redis.get("c_cate_page_total");
  //   if(!categorylist_total){
  //     categorylist_total =  await this.service.fetchcategory.total();
  //     await app.redis.set("c_cate_page_total",categorylist_total,"EX",3600);
  //   }
  //
  //
  //   pager.maxNum = categorylist_total;
  //
  //
  //   pager.pageCount = parseInt(Math.ceil(parseFloat(pager.maxNum) / parseFloat(pager.pageSize)));  //计算总页数
  //   const data = {
  //     categorylist:categorylist,
  //     pager: pager
  //   };
  //   await this.ctx.render('fetchcategories/index',data);
  //
  //
  //
  }


  async add(){
    await this.ctx.render('admin/category/add');
  }

  async create(){
    const ctx = this.ctx;
    let _category = await this.service.category.create(ctx.request.body);
    if(_category){
      ctx.redirect('/admin/categories')
    }
  }
  //
  // async edit(){
  //   const ctx = this.ctx;
  //   let id = ctx.params.id;
  //   let _category = await this.service.fetchcategory.findById(id);
  //   const data = {
  //     category:_category,
  //   }
  //   await this.ctx.render('fetchcategories/edit',data);
  // }
  //
  // async update(){
  //   const ctx = this.ctx;
  //   let id = ctx.request.body.id;
  //   let _title = ctx.request.body.title;
  //   let _category = ctx.request.body.category;
  //   let _src = ctx.request.body.src;
  //   let _fetchurl = ctx.request.body.fetchurl;
  //   let _img = ctx.request.body.img;
  //   let data = {"title":_title,"category":_category,"src":_src,"fetchurl":_fetchurl,"img":_img};
  //   // let result = id;
  //   let result = await this.service.fetchcategory.updateById(id,data);
  //   if(result){
  //     ctx.redirect('/fetchcategories/edit/'+id);
  //   }
  //   ctx.body = result;
  // }
  //
  //


  async destroy(){
    const ctx = this.ctx;
    let id = ctx.params.id;
    let result = await this.service.category.deleteById(id);
    if(result == 1){
      ctx.redirect('/admin/categories')
    }else{
      throw "error";
    }
  }




}


module.exports = CategoryController;
