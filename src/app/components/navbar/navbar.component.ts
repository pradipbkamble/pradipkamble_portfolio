import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'pradipkamble_portfolio';
  component :boolean=true

  
  constructor(private _matdialog:MatDialog) { }

  ngOnInit(): void {
  
    let neviget=document.getElementById("navbarNav")
   
   let nav=document.querySelector("nav");
   
   window.addEventListener("scroll",function(){
if(document.documentElement.scrollTop> 0){
nav?.classList.add("sticky");
}
else{
  nav?.classList.remove("sticky")
}
   })
  }
//   matdialogbox(){
// this._matdialog.open(ContentComponent)
//   }

  onclick(ele:any){
    if(this.component==true){
ele.classList.add("show")
this.component=false
    }
    else{
      this.component=false
      ele.classList.remove("show")
      this.component=true
    }
    
  }
  
  onclicklist(){
    const alllist=document.querySelectorAll("li")
    console.log(alllist)
    let neviget=document.getElementById("navbarNav")
    if(alllist){
      neviget?.classList.remove("show")
    }
  
  
  }
  
  
  
  
  


  
   
}




function onlistclick(arg0: (li: any) => void) {
  throw new Error('Function not implemented.');
}

