import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {
  links: any;
  qa: any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.qa = [
      {
        'title': "完全に無料ですか？",
        'answer': "完全に無料で使用することができます。"
      },
      {
        'title': "先回りブロックとはなんですか？",
        'answer': "過去にスパムを送信したと当サービスのデーターベースに格納されているユーザーをあらかじめブロックします。スパムを未然に防ぐことができます。"
      },
      {
        'title': "画面が真っ白になり正常に動作しません。",
        'answer': "スマートフォンのバージョンまたは性能によっては、10秒程経つと正常に起動する場合がございます。それでも動作しない場合は本ウェブサイトからお問い合わせください。"
      }
    ]; 
    this.links = this.qa;
  }
  goview(title,answer) {
    console.log("view");
    console.log(title);
    console.log(answer);
    this.router.navigate(['/qav'], 
        { queryParams: { 'title':title,'answer':answer }});
  }
  search(val) {
    console.log(val.target.value);
    this.links = this.qa.filter(function(tag) {
      return tag.title.indexOf(val.target.value) >= 0;
  }); 

  }
}
