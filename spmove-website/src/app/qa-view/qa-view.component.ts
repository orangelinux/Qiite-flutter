import { QareviewComponent } from './../qareview/qareview.component';
import { RouterModule, Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-qa-view',
  templateUrl: './qa-view.component.html',
  styleUrls: ['./qa-view.component.css']
})
export class QaViewComponent implements OnInit {
  title: string;
  answer: string;
  constructor(private dialog:MatDialog,private activatedroute: ActivatedRoute) { 
    this.activatedroute.queryParamMap.subscribe(params => {
      // ↑ が queryParamMap になる
      this.title = params.get('title');
      this.answer = params.get('answer');
      console.log(this.title);
    });
  }
  async send(yn) {
    await console.log(yn);
    const dialogRef = await this.dialog.open(QareviewComponent, {
 //     data: {yn: yn }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
      }
  ngOnInit() {
  
      
  }
}
