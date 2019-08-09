import 'package:flutter/material.dart';
import 'package:skapp/common/httpUtil.dart';
import 'package:skapp/common/api.dart';
import 'package:dio/dio.dart';

class DemoPage2 extends StatefulWidget {
  DemoPage2({Key key}) : super(key: key);

  _DemoPage2State createState() => _DemoPage2State();
}

class _DemoPage2State extends State<DemoPage2> {
  var nameControler = TextEditingController();


  void postEvent(String name) async{
    var data = {"name":name};
    // response=await dio.post("/test",data:{"id":12,"name":"wendu"})
    var result =  await HttpUtil().post(Api.EVENT_LIST,data:data);
    print(result);

    // try{
    //   Response response;
    //   var data={"name":"TypeText"};
    //   response = await Dio().post(
    //     "http://47.96.183.71:7006/api/events",
    //       data:data
    //   );
    //   print(response.data.toString());
    // }catch(e){
    //   return print(e);
    // }
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('添加Eevent'),
      ),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Padding(
              padding: EdgeInsets.fromLTRB(10.0, 30.0, 10.0, 10.0),
              child: TextField(
                controller: nameControler,
                maxLines: 1,
                decoration: InputDecoration(
                  labelText: "事件名称",
                  helperText: "总的事件名称",
                ),
                onChanged: (text){
                  print("change $text");
                },
              ),
            ),
            Container(
              child: RaisedButton(
                child: Text("新增"),
                onPressed: (){
                  if(nameControler.text.isEmpty){
                    //TODO 空的怎么办
                  }
                  var name = nameControler.text.toString();
                  postEvent(name);
                },
              ),
            )
          ],
        ),
      ),
    );
  }
}