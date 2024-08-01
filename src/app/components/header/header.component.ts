import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  component :boolean=true
  constructor() { }

  ngOnInit(): void {
    
    let neviget=document.getElementById("navigation")
   
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

  

  


  

}
