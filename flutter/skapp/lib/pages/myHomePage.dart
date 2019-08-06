import 'package:flutter/material.dart';
import 'package:skapp/pages/homePage.dart';
import 'package:skapp/pages/demoPage.dart';
import 'package:skapp/pages/aboutPage.dart';
import 'package:skapp/common/colors.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  //buttomTab控制的几个pageview
  var pages = <Widget>[
    HomePage(),
    DemoPage(),
    AboutPage()
  ];

  var _pageController = PageController(initialPage: 0);

  int _selectedIndex = 0;


  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(

        title: Text(widget.title),
      ),
      body: PageView.builder(
        onPageChanged: _pageChange,
        controller: _pageController,
        itemCount: pages.length,
        itemBuilder: (BuildContext context,int index){
          return pages.elementAt(_selectedIndex);
        }
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(icon: Icon(Icons.home),title:Text('Home')),
          BottomNavigationBarItem(icon: Icon(Icons.home),title:Text('Demo')),
          BottomNavigationBarItem(icon: Icon(Icons.home),title:Text('About')),
        ],
        currentIndex: _selectedIndex,
        type: BottomNavigationBarType.fixed,
        //显示模式
        fixedColor: YColors.colorPrimary,
        //选中颜色
        onTap: _onItemTapped, //点击事件
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){},
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }


  //下边TAB的事件
  void _onItemTapped(int index){
        //bottomNavigationBar 和 PageView 关联
    _pageController.animateToPage(index,
        duration: const Duration(milliseconds: 300), curve: Curves.ease);
  }

   void _pageChange(int index) {
    setState(() {
      _selectedIndex = index;
      // //根据下标修改标题
      // switch (index) {
      //   case 0:
      //     title = YStrings.appName;
      //     break;
      //   case 1:
      //     title = YStrings.tree;
      //     break;
      //   case 2:
      //     title = YStrings.navi;
      //     break;
      //   case 3:
      //     title = YStrings.project;
      //     break;
      // }
    });
  }



}
