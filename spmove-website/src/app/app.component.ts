import { Component} from '@angular/core';
//import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spmove-website';
  mobile: any;
  viewer: any;
 // constructor(public documet:Document){}
  ngOnInit() {
    console.log(window.screen.width);
    if (window.screen.width < 500) { // 768px portrait
      this.mobile = true;
    }
  }
  golink(url) {
    var gyr = url;
    //var gyr = "https://docs.google.com/forms/d/e/1FAIpQLSc7R9QhkBjj-PVQrYy0QeooirHG1t16OeTpC_UDFEcdM8tLng/viewform?usp=sf_link";
    console.log(gyr);
    document.location.href = gyr;
}
  hidemenu() {
    console.log("hidemenu");
    this.viewer = false;
  }
}
