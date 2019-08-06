import 'package:flutter/material.dart';
import 'package:skapp/routes.dart';

class AboutPage extends StatefulWidget {
  AboutPage({Key key}) : super(key: key);

  _AboutPageState createState() => _AboutPageState();
}

class _AboutPageState extends State<AboutPage> {
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: Text('AboutPage'),
      ),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                RaisedButton(
                  child: Text("page1"),
                  onPressed: (){
                    Routes.router.navigateTo(context, "/about/page1");
                  },
                ),
                 RaisedButton(
                  child: Text("Button"),
                ),
                 RaisedButton(
                  child: Text("Button"),
                )
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                RaisedButton(
                  child: Text("Button"),
                ),
                 RaisedButton(
                  child: Text("Button"),
                ),
                 RaisedButton(
                  child: Text("Button"),
                )
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                RaisedButton(
                  child: Text("Button"),
                ),
                 RaisedButton(
                  child: Text("Button"),
                ),
                 RaisedButton(
                  child: Text("Button"),
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}