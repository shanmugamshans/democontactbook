import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { ContactlistComponent } from '../contactlist/contactlist.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent, 
    children:[
      {
        path:'contactList', component:ContactlistComponent
      },
      {
        path:'add', component:AddComponent
      },
      {
        path:'edit/:id', component:AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
