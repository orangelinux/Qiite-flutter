import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import './view.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<String> _titles = <String>[];
  List<Object> _jso = <Object>[];
  Object jsonE;
  /*
  @override
  Widget build(BuildContext context) {
    return Scaffold(
 
    );
  }
}*/
  @override
    initState() {
  super.initState();
   _load();
}

/*
  Future<void> _load() async {
    final res = await http.get('https://api.github.com/repositories/31792824/issues');
    setState(() {
      _data = res.body;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(

      body: Text(_data),
    );
  }
}*/
  Future<void> _load() async {
    final res = await http.get('https://qiita.com/api/v2/items?per_page=50');
    final data = json.decode(res.body);
    setState(() {
      print(data);
      print("--------------ここまで生データー--------------");
      final issues = data as List;
      print(issues);
      print("--------ここまでissues---------");
      issues.forEach((dynamic element) {
        final issue = element as Map;
        _jso.add(issue);
        _titles.add(issue['title'] as String);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
          padding: const EdgeInsets.all(10.0),
          child:
              ListView.builder(itemBuilder: (BuildContext context, int index) {
           /* if (index >= _titles.length) {
              return null;
            }*/
            return ListTile(
              onTap: () {
                print(_jso[index]);
                this.jsonE = _jso[index];
                print(this.jsonE);
                print("-------ここまでhome.dartのjsonE-------");
                Navigator.push(
                  context,
                  new MaterialPageRoute<Null>(
                    settings: const RouteSettings(name: "/view"),
                    builder: (BuildContext context) =>
                        ViewPage(jsonE: this.jsonE),
                  ),
                );
              },
              title: Text(_titles[index]),
            );
          })),
    );
  }
}
