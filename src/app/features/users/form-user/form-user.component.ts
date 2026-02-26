import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {


  email= new FormControl('',Validators.required);
  pwd = new FormControl('',Validators.required);


  formUser= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    pwd: new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
    tel: new FormControl('',[Validators.required, Validators.pattern('[0-9]{8}')]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('' , [Validators.required, Validators.min(18), Validators.max(100)]),
  })

  save(){
    console.log(this.formUser.value)
  }

  get f (){
    return this.formUser.controls;
  }
}
