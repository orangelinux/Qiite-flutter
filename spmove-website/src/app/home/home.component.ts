import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
config: any;
getRef: any;
  fullpage_api: any;
  color1: any;
  color2: any;
  color3: any;
  mode1: any;
  mode2: any;
  mode3: any;
  value1: any;
  value2: any;
  value3: any;
  constructor() {  this.config = {
      menu: '#menu',
      anchors:['page1','page2','page3']
  };
    if (window.addEventListener) {
      var range = document.querySelector("#range"), circle = document.querySelectorAll("circle")[1];
      if (range && circle) {
          range.addEventListener("change", function() {
              var percent = this.value / 100, perimeter = Math.PI * 2 * 170;
              circle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1- percent));
          });
      }
  }
}


}
