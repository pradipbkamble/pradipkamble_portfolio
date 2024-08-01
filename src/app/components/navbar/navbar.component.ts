import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'pradipkamble_portfolio';
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

  ondownlod(){
    const link=document.createElement("a")
    // link.href="../images/resume.pdf";
    // link.download='resume.pdf'
    link.click()
  }
  
}