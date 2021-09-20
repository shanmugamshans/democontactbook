import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  formDataDetails!: FormGroup;
  title: string = "Add New Contact"
  
  stroageData: any [] = [];
  id:any = null;

  constructor(private fb:FormBuilder, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.formDataDetails = this.fb.group({
      name:[''],
      email:['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneno:['',Validators.required],
      address:['']
    })

    this.activeRouter.paramMap.subscribe((params: ParamMap) =>{
      this.id = params.get('id');

      if(null != this.id){
        this.title = "Edit Contact"

        this.valuebinding(this.id);
      }
    })
    

  }

  get login_form_validate() { return this.formDataDetails.controls; }

  formDataSubmit(){
    
    if(this.formDataDetails.valid){
      
      var data:any = localStorage.getItem('contactbook');
      data = JSON.parse(data);

      this.stroageData = data;

      if(null == data){
        Object.assign(this.formDataDetails.value, {id:1});
        this.stroageData = [];
      }else{

        if(this.id==null){

          var id:any = this.stroageData[this.stroageData.length-1].id;
          Object.assign(this.formDataDetails.value, {id: parseInt(id)+1});

        }else{

          this.stroageData.filter(x => { if(x.id== this.id){
            x.name = this.formDataDetails.value.name;
            x.phoneno = this.formDataDetails.value.phoneno;
            x.email = this.formDataDetails.value.email;
            x.address = this.formDataDetails.value.address;

          }});

        }
      }

      if(this.id==null){
        this.stroageData.push(this.formDataDetails.value);
      }
      localStorage.setItem('contactbook',JSON.stringify(this.stroageData));

      this.router.navigate(['/dashboard/contactList']);
    }

  }
  valuebinding(val:any){

    var data:any = localStorage.getItem('contactbook');
    data = JSON.parse(data);

    this.stroageData = data;

    if(null != this.stroageData){
      var data:any = this.stroageData.filter( x=> x.id == val);

      this.login_form_validate.name.setValue(data[0].name);
      this.login_form_validate.email.setValue(data[0].email);
      this.login_form_validate.phoneno.setValue(data[0].phoneno);
      this.login_form_validate.address.setValue(data[0].address);
      
    }

  }
}
