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
  dev: any;
  constructor() {  this.config = {
      menu: '#menu',
      anchors:['top','persent','download'],
      navigation: true,
  /*    paddingTop:'56px'*/
  };
}
async ngOnInit(){
  this.dev = await this.getDevice();
  await console.log(this.dev);

}
async getDevice(){
  if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    return true;
  } else {
    return false;
  }
  }
}
