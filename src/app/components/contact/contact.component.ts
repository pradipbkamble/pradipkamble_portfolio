import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contsctform!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
onsubmitform(){
  
}
}
