import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spmove-website';
  mobile: any;
  viewer: any;
  ngOnInit() {
    console.log(window.screen.width);
    if (window.screen.width < 500) { // 768px portrait
      this.mobile = true;
    }
  }

  hidemenu() {
    console.log("hidemenu");
    this.viewer = false;
  }
}
