import 'package:flutter/material.dart';
import './home.dart';
import './search.dart';
import './save.dart';

void main() => runApp(
      MaterialApp(
        debugShowCheckedModeBanner: false,
        home: MyApp(),
      ),
    );

class TabInfo {
  Widget link;
  IconData icon;
  TabInfo(this.link, this.icon);
}

class MyApp extends StatelessWidget {
  TextEditingController controller;
  final List<TabInfo> _tabs = [
    TabInfo(Search(), Icons.search),
    TabInfo(Home(), Icons.home),
    TabInfo(Save(), Icons.cloud_download),
    // TabInfo("HUNTINGTON BEACH", Page2()),
    // TabInfo("SHAKE SHACK", Page3()),
    // TabInfo("THE HAT", Page4()),
  ];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: _tabs.length,
      child: Scaffold(
        bottomNavigationBar: menu(),
        body: new SafeArea(
          child: TabBarView(children: _tabs.map((tab) => tab.link).toList()),
        ),
      ),
    );
  }
}

Widget menu() {
  var _tabs = [
    TabInfo(Search(), Icons.search),
    TabInfo(Home(), Icons.home),
    TabInfo(Home(), Icons.cloud_download),
    // TabInfo("HUNTINGTON BEACH", Page2()),
    // TabInfo("SHAKE SHACK", Page3()),
    // TabInfo("THE HAT", Page4()),
  ];
  return Container(
      color: Color(0xFF3F5AA6),
      child: TabBar(
        isScrollable: true,
        tabs: _tabs.map((TabInfo tab) {
          return Tab(icon: Icon(tab.icon));
        }).toList(),
      ));
}
