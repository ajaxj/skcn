
//管理部分的router模块
module.exports = app =>{
  const {router,controller} = app;
  router.get("/admin",controller.admin.home.index);          //管理首页

  //事件crud
  router.get("/admin/events",controller.admin.event.index);
  router.get('/admin/events/add',controller.admin.event.add);
  router.post('/admin/events/create',controller.admin.event.create);
  router.get('/admin/events/delete/:id',controller.admin.event.destroy);


  //分类crud
  router.get("/admin/categories",controller.admin.category.index);
  router.get("/admin/categories/add",controller.admin.category.add);
  router.post("/admin/categories/create",controller.admin.category.create);
  router.get("/admin/categories/delete/:id",controller.admin.category.destroy);

  

}
