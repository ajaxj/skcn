//关于事件的路由
module.exports = app => {
  const {router,controller} = app;
  // router.resources("events","/v1/events",controller.event);
  // router.resources("eventdetails","/v1/eventdetails",controller.eventdetail);
  // router.get('/events',checkLogin,controller.event.index);
  // router.get('/events/add',checkLogin,controller.event.add);
  // router.post('/events/create',checkLogin,controller.event.create);
  // router.get('/events/delete/:id',checkLogin,controller.event.destroy);

  router.get('/events',controller.event.index);
  router.get('/events/add',controller.event.add);
  router.post('/events/create',controller.event.create);
  router.get('/events/delete/:id',controller.event.destroy);
}
