import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private _matdialog:MatDialog) { }

  ngOnInit(): void {
  }
  close(){
    this._matdialog.closeAll()
  }
}
