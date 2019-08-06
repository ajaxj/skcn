import 'package:skapp/pages/homePage.dart';
import 'package:fluro/fluro.dart';
import 'package:skapp/pages/myHomePage.dart';
import 'package:skapp/pages/demo/demoPage1.dart';
import 'package:skapp/pages/about/aboutPage1.dart';
/**
 * 使用fluro的路由配置
 */

class Routes{
  static Router router;
  static String  home = "/";
  static String demopage1 = "/demo/page1";
  static String aboutpage1 = "/about/page1";

  static void configureRoutes(Router router){
    //首页
    router.define(home,handler: Handler(handlerFunc: (context,params) => MyHomePage(title: 'Flutter Demo Home Page')));
    //demo页部分
    router.define(demopage1,handler:Handler(handlerFunc: (context,params) => DemoPage1() ));
    //about页部分
    router.define(aboutpage1,handler:Handler(handlerFunc: (context,params)=>AboutPage1()));
    
    Routes.router = router;
  }
}