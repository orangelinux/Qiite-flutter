import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:shared_preferences/shared_preferences.dart';
class Save extends StatelessWidget {
   Future<List<Widget>> getAllPrefs() async {
    final SharedPreferences prefs =  await SharedPreferences.getInstance();
    return prefs
        .getKeys()
        .map<Widget>((key) => ListTile(
              title: Text(key),
              subtitle: Text(prefs.get(key).toString()),
            ))
        .toList(growable: false);
  }
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
      FutureBuilder<List<Widget>>(
          future: getAllPrefs(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) return Container();
            return ListView(
              children: snapshot.data,
            );
          }),
          Text(")")
      ],
    );
  }
}