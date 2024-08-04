import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _matdialog:MatDialog) { }

  ngOnInit(): void {
   
  
   

  }
  matdialogbox(){
    this._matdialog.open(ContentComponent)
      }

}
