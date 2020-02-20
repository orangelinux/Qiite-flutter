import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  links: any;
  data: any;
  constructor(private http:HttpClient,private router:Router) { }
  ngOnInit() {
    this.getnotify();
    this.links = [
      {
        'title': "Spila",
        'html': "<p>hello!!!!</p>"
      }
    ];
  }
  goview(title,html) {
    console.log("view");
    console.log(title);
    console.log(html);
    this.router.navigate(['/nev'], 
        { queryParams: { 'title':title,'html':html }});
  }
  async getnotify() {
    await this.http.get('https://spmoveapi.herokuapp.com/getnotify',{ responseType: 'text' }).subscribe((data) => {
      console.log(data);
      var replaced = data.replace(/'/g, '"');
      console.log(replaced);
      var res = JSON.parse(replaced);
      var notify = res["notify"];
      console.log(notify);
      this.data = notify;
      console.log(this.data);
        });
  }
  
}
