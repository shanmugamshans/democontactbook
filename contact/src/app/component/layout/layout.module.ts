import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContactlistComponent } from '../contactlist/contactlist.component';
import { AddComponent } from '../add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ContactlistComponent,
    AddComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule
  ],exports:[
    SidebarComponent
  ]
})
export class LayoutModule { }
