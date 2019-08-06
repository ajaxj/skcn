import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:skapp/routes.dart';       //添加这个使用fluro导航

class DemoPage extends StatefulWidget {
  DemoPage({Key key}) : super(key: key);

  _DemoPageState createState() => _DemoPageState();
}

class _DemoPageState extends State<DemoPage> {
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: Text('DemoPage'),
      ),
      body: Container(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            FlatButton(
              child: Text("page1",style: TextStyle(color: Colors.red),),
              onPressed: (){
                Routes.router.navigateTo(context, "/demo/page1",transition: TransitionType.inFromRight);
              },
            ),
            FlatButton(
              child: Text("Button2"),
            ),
            RaisedButton(
            child: Text("Button3"),
            )
          ],
        ),

      ),
    );
  }
}