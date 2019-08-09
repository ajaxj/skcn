
class EventEntity{
  int errorCode;
  String errorMsg;
  List<EventData> data;

  EventEntity({this.errorCode,this.errorMsg,this.data});

  EventEntity.fromJson(Map<String,dynamic> json){
    errorCode = json['errorCode'];
    errorMsg = json['errorMsg'];
    if(json['data'] !=null){
      this.data = List<EventData>();  
      (json['data'] as List).forEach(  (v) {
        data.add(EventData.fromJson(v));
      });
    }
  }

  Map<String,dynamic> toJson(){
    Map<String,dynamic> data = new Map<String,dynamic>();
    data['errorCode'] = this.errorCode;
    data['errorMsg'] = this.errorMsg;
    data['data'] = this.data.map( (v) => v.toJson()).toList();
    return data;
  }


}



class EventData {
  int id;
  String name;
  int visible;
  List<EventDetail> details;
  bool isExpanded;        //自定义的一个属性，用于风琴组件的打开关闭状态
  
  EventData({this.id,this.name,this.visible});

  EventData.fromJson(Map<String,dynamic> json){
    id = json['id'];
    name = json['name'];
    visible = json['visible'];
    details = List<EventDetail>();
    (json['eventdetails'] as List).forEach(  (v){
      details.add(EventDetail.fromJson(v));
    });

  }

  Map<String,dynamic>  toJson(){
    Map<String,dynamic> data = new Map<String,dynamic>();
    data['id'] = this.id;
    data['name'] = this.name;
    data['visible'] = this.visible;
    data['details'] = this.details.map((v)=> v.toJson()).toList();
    return data; 
  }

}

class EventDetail {
  int  id;
  int eid;
  String title;
  int status;

  EventDetail({this.id,this.eid,this.title,this.status});

  EventDetail.fromJson(Map<String,dynamic> json){
    id = json['id'];
    eid = json['eid'];
    title = json['title'];
    status = json['status'];
  }

  Map<String,dynamic> toJson(){
    final Map<String,dynamic> data = new Map<String,dynamic>();
    data['id'] = id;
    data['eid'] = eid;
    data['title'] = title;
    data['status'] =status;
    return data;
  }

}