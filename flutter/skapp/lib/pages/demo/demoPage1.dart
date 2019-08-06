import 'package:flutter/material.dart';
import 'package:skapp/common/httpUtil.dart';
import 'package:skapp/common/api.dart';
import 'dart:convert';

class DemoPage1 extends StatefulWidget {
  DemoPage1({Key key}) : super(key: key);

  _DemoPage1State createState() => _DemoPage1State();
}

class _DemoPage1State extends State<DemoPage1> {

  @override
  void initState() {
    super.initState();
    getHttp();
  }

  //读取JSON数据
  void getHttp() async {
    try{
      var response = await HttpUtil().get(Api.EVENT_LIST);
      Map eventMap = json.decode(response.toString());      //转换一下
      print(eventMap);
    }catch(e){
      print(e);
    }
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('DemoPage1'),
      ),
      body: Container(),
    );
  }
}