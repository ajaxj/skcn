
//管理部分的router模块
module.exports = app =>{
  const {router,controller} = app;
  router.get("/admin",controller.admin.home.index);          //管理首页

  router.get("/admin/userlogin",controller.admin.userAccess.userLogin);
  router.post("/admin/login",controller.admin.userAccess.login);

  //事件crud
  router.get("/admin/events",controller.admin.event.index);
  router.get('/admin/events/add',controller.admin.event.add);
  router.post('/admin/events/create',controller.admin.event.create);
  router.get('/admin/events/delete/:id',controller.admin.event.destroy);


  //分类crud
  router.get("/admin/categories",controller.admin.category.index);
  router.get("/admin/categories/add",controller.admin.category.add);
  router.post("/admin/categories/create",controller.admin.category.create);
  router.get('/admin/categories/edit/:id',controller.admin.category.edit);
  router.post('/admin/categories/update',controller.admin.category.update);
  router.get("/admin/categories/delete/:id",controller.admin.category.destroy);


  //文章crud
  router.get("/admin/articles",controller.admin.article.index);
  router.get("/admin/articles/add",controller.admin.article.add);
  router.post("/admin/articles/create",controller.admin.article.create);
  router.get('/admin/articles/edit/:id',controller.admin.article.edit);
  router.post('/admin/articles/update',controller.admin.article.update);
  router.get("/admin/articles/delete/:id",controller.admin.article.destroy);

  //抓取的影片
  router.get("/admin/fetchmovies",controller.admin.fetchmovie.index);
  router.get("/admin/fetchmovies/add",controller.admin.fetchmovie.add);
  router.post("/admin/fetchmovies/create",controller.admin.fetchmovie.create);
  router.get('/admin/fetchmovies/edit/:id',controller.admin.fetchmovie.edit);
  router.post('/admin/fetchmovies/update',controller.admin.fetchmovie.update);
  router.get("/admin/fetchmovies/delete/:id",controller.admin.fetchmovie.destroy);


}
