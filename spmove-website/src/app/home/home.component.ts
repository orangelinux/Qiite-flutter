import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
config: any;
fullpage_api: any;
  constructor() {  this.config = {
      menu: '#menu',
      anchors:['page1','page2','page3']
    };
}


}
