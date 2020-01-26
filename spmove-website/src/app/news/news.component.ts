import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  links: any;
  constructor() { }

  ngOnInit() {
    this.links = [
      {
        'title': "Spila",
        'href': "https://google.com"
      }
    ];
  }
  
}
