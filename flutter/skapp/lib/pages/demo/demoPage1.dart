import 'package:flutter/material.dart';
import 'package:skapp/common/httpUtil.dart';
import 'package:skapp/common/api.dart';
import 'package:skapp/entity/event_entity.dart';
import 'dart:convert';

/**
 * 这个是用风琴组件显示一个一对多的event detail表的
 */

class DemoPage1 extends StatefulWidget {
  DemoPage1({Key key}) : super(key: key);

  _DemoPage1State createState() => _DemoPage1State();
}

class _DemoPage1State extends State<DemoPage1> {

  List<EventData> _datas = new List();      //装载事件的data数据的用在下拉风琴组件


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
      var eventEntity = new EventEntity.fromJson(eventMap);   //把map的json数据变成对象列表

      for(int i=0;i<eventEntity.data.length;i++){
        eventEntity.data[i].isExpanded = false;     //风琴全部都是关闭的
      }

      setState(() {
        _datas = eventEntity.data;      //更新状态的datas
      });
      
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
      body: SingleChildScrollView(
        child: ExpansionPanelList(
           animationDuration: Duration(milliseconds: 500),
           expansionCallback: (panelIndex,isExpanded){
             setState(() {
               _datas[panelIndex].isExpanded = !isExpanded;
             });
           },
          children: _datas.map<ExpansionPanel>(( EventData eventData) {
            return new ExpansionPanel(
               headerBuilder: (context,isExpanded){
                 return ListTile(
                   contentPadding: EdgeInsets.all(10.0),
                   title: Text(eventData.name),
                 );
               },
               body: Container(
                 height: 200,
                 padding: EdgeInsets.symmetric(horizontal: 5.0),
                 child: ListView.builder(
                   itemCount: eventData.details.length,
                   itemBuilder: (context,position){
                     return getRow(position,eventData);
                   },
                 ),
               ),
               isExpanded: eventData.isExpanded
             );
           }).toList(),
        ),
      )
    );
  }

  Widget getRow(int i,EventData eventData){
    //返回一个手势加Tile的组件
    return GestureDetector(
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 5.0),
        child: ListTile(
          title: Text(eventData.details[i].title),
          trailing: Icon(Icons.chevron_right,color: Colors.green),
        ),
      ),
      onTap: (){
        //GestureDetecor手势组件的事件
        print(eventData.details[i].id);
      },
    );
  }


}