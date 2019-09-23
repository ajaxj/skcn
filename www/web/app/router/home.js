//home部分的router模块
module.exports = app =>{
  const {router,controller} = app;
  router.get("/",controller.home.home.index);
  router.get("/test",controller.home.home.test);
}
