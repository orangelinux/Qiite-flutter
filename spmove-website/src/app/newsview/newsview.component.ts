import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, RouterLink, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-newsview',
  templateUrl: './newsview.component.html',
  styleUrls: ['./newsview.component.css']
})
export class NewsviewComponent implements OnInit {
  html: any;
  title: any;
  safehtml: SafeHtml;
  constructor(private activatedroute:ActivatedRoute,private sanitizer: DomSanitizer) {this.activatedroute.queryParamMap.subscribe(params => {
    // ↑ が queryParamMap になる
    this.title = params.get('title');
    this.html = params.get('html');
    console.log(this.title);
    console.log(this.html);
    this.safehtml = sanitizer.bypassSecurityTrustHtml(this.html);
  });}
  ngOnInit() {
  }

}
