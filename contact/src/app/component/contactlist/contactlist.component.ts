import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  title:string = "Contact List";

  name:string = '';
  email:string = '';
  phone:string = '';
  address:string = '';

  dtOptions: DataTables.Settings = {};
  tableData: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3
    };
    var data:any = localStorage.getItem('contactbook');
    this.tableData = JSON.parse(data);
  }
  clickData(val:any){
    this.name = val.name;
    this.address = val.address;
    this.phone = val.phoneno;
    this.email = val.email;
  }

  navigation(val:any){
    this.router.navigate(['edit', val.id]);
  }
}
