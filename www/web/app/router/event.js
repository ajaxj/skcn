//关于事件的路由
module.exports = app => {
  const {router,controller} = app;
  router.resources("events","/v1/events",controller.event);
  router.resources("eventdetails","/v1/eventdetails",controller.eventdetail);
}
