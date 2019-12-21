import 'package:flutter/material.dart';
import 'package:flappy_search_bar/flappy_search_bar.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import "dart:async";
import './view.dart';

class Search extends StatefulWidget {
  @override
  State createState() {
    return Searchs();
  }
}

class Searchs extends State<Search> {
  List<Object> _titl = <Object>[];
  Future<List> search(String search) async {
    print("run");
    final res = await http
        .get('https://qiita.com/api/v2/items?per_page=50&query=$search');
    final data = json.decode(res.body);
    print(data);
    print("---");
    print(data[0]);
    print(")---(");
    print(res.body[0]);

    if (data.toString() ==
        "{message: Rate limit exceeded, type: rate_limit_exceeded}") {
      print("LIMIT");
      return List.generate(1, (int index) {
        /*   return Post(
          "API制限が発生しました。時間を置いてもう一度お試しください。",
        );*/
      });
    }

    print(data[1]);
    //await Future.delayed(Duration(seconds: 2));
    return List.generate(50, (int index) {
      // if (data[index]["title"]) {
      var ret = data[index]["title"];
      _titl.add(ret);
      //} else {
      //  return Post(
      //    "End",
      //  );
      // }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
          // padding: const EdgeInsets.symmetric(horizontal: 20),
          children: <Widget>[
            Padding(padding: const EdgeInsets.all(8.0)),
            Container(
              //         height: 50.0,
              width: double.infinity,
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10.0),
                  color: Colors.white,
                  boxShadow: <BoxShadow>[
                    BoxShadow(
                      color: Colors.grey,
                      offset: Offset(
                        0.5,
                        0.5,
                      ),
                      blurRadius: 7.0,
                    ),
                  ]),
              child: TextField(
                onSubmitted: search,
                style: TextStyle(fontSize: 25.0),
                textInputAction: TextInputAction.search,
                decoration: InputDecoration(
                    hintText: "入力して検索...",
                    hintStyle: TextStyle(fontSize: 20.0),
                    border: InputBorder.none,
                    //  contentPadding: EdgeInsets.only(left: 15.0,top:10),
                    suffixIcon: IconButton(
                      icon: Icon(Icons.search),
                      //onPressed:,

                      iconSize: 30.0,
                    )),
              ),
            ),
            Expanded(child: ListView.builder(

                itemBuilder: (BuildContext context, int index) {
              return ListTile(
                onTap: () {
                  print(_titl[index]);
             /*     this.jsonE = _jso[index];
                  print(this.jsonE);
                  print("-------ここまでhome.dartのjsonE-------");
                  Navigator.push(
                    context,
                    new MaterialPageRoute<Null>(
                      settings: const RouteSettings(name: "/view"),
                      builder: (BuildContext context) =>
                          ViewPage(jsonE: this.jsonE),
                    ),
                  );*/
                },
                title: Text(_titl[index]),
              );
            }))
          ]),
    );
  }
 /*   @override
  void initState() {
    super.initState();
    print("initState");
    _titl = [];
  }
*/
}
