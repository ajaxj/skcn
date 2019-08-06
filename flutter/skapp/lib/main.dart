import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';



import 'package:skapp/routes.dart';
import 'package:skapp/pages/myHomePage.dart';

// void main() => runApp(MyApp());
//加上 fluro的配置
void main() {
  final router = Router();
  Routes.configureRoutes(router);
  runApp(
      MyApp()
    // MaterialApp(
    //   onGenerateRoute: Routes.router.generator,
    // )
  );
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(

        primarySwatch: Colors.blue,
      ),
      // home: MyHomePage(title: 'Flutter Demo Home Page'),     //  关闭这个使用fluro导航 
      onGenerateRoute: Routes.router.generator,
    );
  }
}
