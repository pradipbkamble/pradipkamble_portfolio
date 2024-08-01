import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:"",
    component:HeaderComponent,
  },
  {
    path:"skills",
    component:SkillsComponent
  },
  
  {
    path:"experience",
    component:ExperienceComponent
  },
 
  {
    path:"projct",
    component:ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
