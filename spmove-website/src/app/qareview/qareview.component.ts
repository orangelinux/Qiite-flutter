import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-qareview',
  templateUrl: './qareview.component.html',
  styleUrls: ['./qareview.component.css']
})
export class QareviewComponent implements OnInit {
  txt: string;
  data: string;
  yn: string;
  constructor(private dialogRef:MatDialogRef<QareviewComponent>) { }

  ngOnInit() {
    console.log(this.data);
  }
onNoClick(){ this.dialogRef.close();}
}
