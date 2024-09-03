import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contsctform!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formcontrols()
  }
formcontrols(){
  this.contsctform=new FormGroup({
    Fname:new FormControl(null),
    Gmail:new FormControl(null),
    Message:new FormControl(null)
  })
}

onsubmitform(){
  this.contsctform.value
  console.log( this.contsctform.value);
  

this.contsctform.reset()


}
}
