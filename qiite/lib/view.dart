import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:flutter_html/flutter_html.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:shared_preferences/shared_preferences.dart';

save(title, json) async {
  final SharedPreferences prefs = await SharedPreferences.getInstance();
  try {
    prefs.setString(title, json);
    return "True";
  } catch (err) {
    print(err);
    return "False";
  }
}

class ViewPage extends StatelessWidget {
  final jsonE;
  ViewPage({Key key, @required this.jsonE}) : super(key: key);
//  var js = jsonEncode(jsonE);
  Widget build(BuildContext context) {
    print(jsonE);
    var js = json.encode(jsonE);

//    var jsb = js;
    print("==========ここまでJSONE=======");
    var jsb = jsonE["rendered_body"];
    var jtitle = jsonE["title"];
    print("==========ここまでrederdbody=======");
    print(js);
    print("==========ここまでJSON(encode)=======");
    print(jsb);
    return MaterialApp(
        home: Scaffold(
      body: new SingleChildScrollView(child: Center(child: Html(data: jsb))),
      floatingActionButton: Column(
          verticalDirection: VerticalDirection.up, // childrenの先頭を下に配置
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            FloatingActionButton(
              child: Icon(Icons.file_download),
              backgroundColor: Colors.blueAccent,
              onPressed: () async {
                print("pressed");
                // obtain shared preferences
                var res = await save(jtitle, js);
                print(res);
                if (res == "True") {
                  Fluttertoast.showToast(msg: "保存が完了しました。");
                } else {
                  Fluttertoast.showToast(msg: "保存中に何らかのエラーが発生しました。");
                }
              },
            ),
          ]),
    ));
  }
}
